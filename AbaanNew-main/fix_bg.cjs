const sharp = require('sharp');
const fs = require('fs');

async function processImage(filename, outname) {
    const { data, info } = await sharp(filename).raw().toBuffer({ resolveWithObject: true });
    
    for (let i = 0; i < data.length; i += info.channels) {
        const r = data[i];
        const g = data[i+1];
        const b = data[i+2];
        
        // If it's a neutral color (grey/white) and bright enough
        if (r > 170 && g > 170 && b > 170) {
            if (Math.abs(r - g) < 25 && Math.abs(g - b) < 25) {
                // Turn to pure white
                data[i] = 255;
                data[i+1] = 255;
                data[i+2] = 255;
            }
        }
    }
    
    await sharp(data, {
        raw: {
            width: info.width,
            height: info.height,
            channels: info.channels
        }
    }).toFile(outname);
}

Promise.all([
    processImage('public/images/creamcofee.png', 'public/images/creamcofee_fixed.png'),
    processImage('public/images/Black Coffee.png', 'public/images/Black Coffee_fixed.png')
]).then(() => console.log('Done!'));
