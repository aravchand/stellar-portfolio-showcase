const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const iconsDir = __dirname;
const svgFiles = fs.readdirSync(iconsDir).filter(f => f.endsWith('.svg'));

async function convert() {
  for (const svg of svgFiles) {
    const svgPath = path.join(iconsDir, svg);
    const pngPath = path.join(iconsDir, svg.replace('.svg', '.png'));
    try {
      await sharp(svgPath)
        .resize(256, 256, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png()
        .toFile(pngPath);
      console.log(`Converted ${svg}`);
    } catch (e) {
      console.error(`Error converting ${svg}:`, e.message);
    }
  }
}

convert();