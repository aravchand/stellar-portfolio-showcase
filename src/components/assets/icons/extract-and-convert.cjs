// Extract SVG icons from simple-icons package and convert to PNG
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const iconsDir = __dirname;
const simpleIconsPath = path.join(__dirname, '../../../../node_modules/simple-icons/icons');

// Map of our icon names to simple-icons names
const iconMap = {
  'python': 'python',
  'cpp': 'cplusplus',
  'dart': 'dart',
  'flutter': 'flutter',
  'swift': 'swift',
  'kotlin': 'kotlin',
  'unity': 'unity',
  'ios': 'apple',
  'android': 'android',
  'meta-xr': 'meta',
  'latex': 'latex',
  'tensorflow': 'tensorflow',
  'mediapipe': 'mediapipe',
  'arduino': 'arduino',
  'fusion360': 'autodesk'
};

async function extractAndConvert() {
  console.log('Extracting and converting icons...\n');
  
  for (const [ourName, simpleName] of Object.entries(iconMap)) {
    const svgPath = path.join(simpleIconsPath, `${simpleName}.svg`);
    const pngPath = path.join(iconsDir, `${ourName}.png`);
    
    if (!fs.existsSync(svgPath)) {
      console.log(`⚠ ${ourName}: SVG not found in simple-icons (${simpleName})`);
      continue;
    }
    
    try {
      // Read SVG and convert to PNG
      const svgBuffer = fs.readFileSync(svgPath);
      await sharp(svgBuffer)
        .resize(256, 256, { 
          fit: 'contain', 
          background: { r: 0, g: 0, b: 0, alpha: 0 } 
        })
        .png()
        .toFile(pngPath);
      console.log(`✓ Converted ${ourName}.png`);
    } catch (error) {
      console.error(`✗ Error converting ${ourName}:`, error.message);
    }
  }
  
  // Handle NIST separately (custom icon)
  const nistSvgPath = path.join(iconsDir, 'nist.svg');
  const nistPngPath = path.join(iconsDir, 'nist.png');
  if (fs.existsSync(nistSvgPath)) {
    try {
      const svgBuffer = fs.readFileSync(nistSvgPath);
      await sharp(svgBuffer)
        .resize(256, 256, { 
          fit: 'contain', 
          background: { r: 0, g: 0, b: 0, alpha: 0 } 
        })
        .png()
        .toFile(nistPngPath);
      console.log(`✓ Converted nist.png`);
    } catch (error) {
      console.error(`✗ Error converting nist:`, error.message);
    }
  }
  
  console.log('\nConversion complete!');
}

extractAndConvert().catch(console.error);
