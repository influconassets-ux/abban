const fs = require('fs');
const path = require('path');

const srcDir = './src';

function walk(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stats = fs.statSync(filePath);
        if (stats.isDirectory()) {
            walk(filePath);
        } else if (filePath.endsWith('.jsx') || filePath.endsWith('.js') || filePath.endsWith('.json') || filePath.endsWith('.css')) {
            let content = fs.readFileSync(filePath, 'utf8');
            const originalContent = content;
            
            // Replace .png, .jpg, .jpeg with .webp
            // We use a regex that looks for the extension preceded by a dot and followed by a quote or end of string/path
            content = content.replace(/\.(png|jpg|jpeg)/gi, '.webp');
            
            if (content !== originalContent) {
                fs.writeFileSync(filePath, content, 'utf8');
                console.log(`Updated: ${filePath}`);
            }
        }
    });
}

walk(srcDir);
console.log('Code updates complete!');
