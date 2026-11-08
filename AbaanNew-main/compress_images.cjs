const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, 'public', 'images');

async function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      await processDirectory(filePath);
    } else {
      // Check if file is larger than 1MB (1048576 bytes)
      if (stat.size > 1048576) {
        const ext = path.extname(file).toLowerCase();
        if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
          console.log(`Compressing ${file} (${(stat.size / 1024 / 1024).toFixed(2)} MB)...`);
          const tempPath = filePath + '.tmp';
          
          try {
            await sharp(filePath)
              .resize({ width: 1920, withoutEnlargement: true })
              .webp({ quality: 75 }) // Force WebP compression internally even if extension is different
              .toFile(tempPath);
              
            fs.renameSync(tempPath, filePath);
            console.log(`Success! ${file} compressed.`);
          } catch (err) {
            console.error(`Failed to compress ${file}:`, err);
            if (fs.existsSync(tempPath)) {
                fs.unlinkSync(tempPath);
            }
          }
        }
      }
    }
  }
}

processDirectory(dir).then(() => {
  console.log('Finished compressing large images.');
});
