const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const directory = './public/images';
const extensions = ['.jpg', '.jpeg', '.png'];

async function optimizeImages(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const filePath = path.join(dir, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            await optimizeImages(filePath);
            continue;
        }

        const ext = path.extname(file).toLowerCase();
        if (extensions.includes(ext)) {
            const fileNameNoExt = path.parse(file).name;
            const outputFilePath = path.join(dir, `${fileNameNoExt}.webp`);

            // Only convert if the webp doesn't exist or is older than the original
            if (!fs.existsSync(outputFilePath)) {
                console.log(`Optimizing: ${file}...`);
                try {
                    await sharp(filePath)
                        .webp({ quality: 80 })
                        .toFile(outputFilePath);
                    
                    const oldSize = stats.size;
                    const newSize = fs.statSync(outputFilePath).size;
                    console.log(`Done! ${file} (${(oldSize / 1024).toFixed(2)} KB) -> ${fileNameNoExt}.webp (${(newSize / 1024).toFixed(2)} KB)`);
                    console.log(`Reduction: ${((1 - newSize / oldSize) * 100).toFixed(2)}%`);
                } catch (err) {
                    console.error(`Error processing ${file}:`, err);
                }
            }
        }
    }
}

optimizeImages(directory).then(() => {
    console.log('Image optimization complete!');
}).catch(err => {
    console.error('Optimization failed:', err);
});
