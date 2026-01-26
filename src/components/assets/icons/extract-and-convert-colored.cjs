// Extract SVG icons from simple-icons package and convert to PNG WITH COLORS
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const iconsDir = __dirname;
const simpleIconsPath = path.join(__dirname, '../../../../node_modules/simple-icons/icons');

// Map of our icon names to simple-icons names and their brand colors
const iconMap = {
  // 'python': { name: 'python', color: '3776AB' },
  // 'cpp': { name: 'cplusplus', color: '00599C' },
  'dart': { name: 'dart', color: '0175C2' },
  // 'flutter': { name: 'flutter', color: '02569B' },
  // 'swift': { name: 'swift', color: 'FA7343' },
  // 'kotlin': { name: 'kotlin', color: '7F52FF' },
  // 'unity': { name: 'unity', color: '000000' },
  // 'ios': { name: 'apple', color: '000000' },
  // 'android': { name: 'android', color: '3DDC84' },
  // 'meta-xr': { name: 'meta', color: '0081FB' },
  // 'latex': { name: 'latex', color: '008080' },
  // 'tensorflow': { name: 'tensorflow', color: 'FF6F00' },
  // 'mediapipe': { name: 'mediapipe', color: '4285F4' }, // Google blue
  // 'arduino': { name: 'arduino', color: '00979D' },
  // 'fusion360': { name: 'autodesk', color: '0696D2' }
};

// Function to inject color into SVG
function injectColorIntoSvg(svgContent, color) {
  // Remove any existing fill attributes and add the brand color
  // Wrap paths in a group with fill color, or add style to svg
  if (svgContent.includes('<path')) {
    // Add style element to set fill color for all paths
    svgContent = svgContent.replace(
      /<svg([^>]*)>/,
      `<svg$1><style>path{fill:#${color} !important;}</style>`
    );
  }
  return svgContent;
}

async function extractAndConvert() {
  console.log('Extracting and converting icons WITH COLORS...\n');
  
  for (const [ourName, config] of Object.entries(iconMap)) {
    const svgPath = path.join(simpleIconsPath, `${config.name}.svg`);
    const pngPath = path.join(iconsDir, `${ourName}.png`);
    
    if (!fs.existsSync(svgPath)) {
      console.log(`⚠ ${ourName}: SVG not found in simple-icons (${config.name})`);
      continue;
    }
    
    try {
      // Read SVG
      let svgContent = fs.readFileSync(svgPath, 'utf8');
      
      // Inject brand color into SVG
      svgContent = injectColorIntoSvg(svgContent, config.color);
      console.log(`  ${ourName}: Using brand color #${config.color}`);
      
      // Convert to PNG with color preserved
      await sharp(Buffer.from(svgContent))
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
  
  // Handle NIST separately (custom icon) - use a dark blue color
  const nistSvgPath = path.join(iconsDir, 'nist.svg');
  const nistPngPath = path.join(iconsDir, 'nist.png');
  if (fs.existsSync(nistSvgPath)) {
    try {
      let svgContent = fs.readFileSync(nistSvgPath, 'utf8');
      // Inject a dark blue color for NIST
      svgContent = injectColorIntoSvg(svgContent, '003366');
      await sharp(Buffer.from(svgContent))
        .resize(256, 256, { 
          fit: 'contain', 
          background: { r: 0, g: 0, b: 0, alpha: 0 } 
        })
        .png()
        .toFile(nistPngPath);
      console.log(`✓ Converted nist.png with color #003366`);
    } catch (error) {
      console.error(`✗ Error converting nist:`, error.message);
    }
  }
  
  console.log('\nConversion complete! All icons now have their brand colors.');
}

extractAndConvert().catch(console.error);
