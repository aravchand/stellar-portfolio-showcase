// Download PNG versions of icons using online conversion service
const fs = require('fs');
const path = require('path');
const https = require('https');

const iconsDir = __dirname;

// Map of icon names to their Simple Icons identifiers and colors
const iconConfig = {
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
  // 'nist': { name: 'nist', color: '000000' }, // May need custom
  // 'tensorflow': { name: 'tensorflow', color: 'FF6F00' },
  // 'mediapipe': { name: 'mediapipe', color: '000000' },
  // 'arduino': { name: 'arduino', color: '00979D' },
  // 'fusion360': { name: 'autodesk', color: '0696D2' }
};

// Use Iconify API to get PNG - they provide data URIs or we can use their CDN
function downloadPNGFromIconify(iconName, config, outputPath) {
  return new Promise((resolve, reject) => {
    // Iconify provides SVG, but we can use a conversion service
    // Alternative: Use shields.io which provides PNG badges
    const url = `https://img.shields.io/static/v1?logo=${config.name}&logoColor=${config.color}&label=&message=${config.name}&color=${config.color}&style=for-the-badge`;
    
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        const fileStream = fs.createWriteStream(outputPath);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          resolve();
        });
      } else {
        reject(new Error(`Failed to download: ${res.statusCode}`));
      }
    }).on('error', reject);
  });
}

// Alternative: Use a simpler approach - download SVG and note that user needs to convert
// Or use an online API that converts
async function main() {
  console.log('Downloading PNG icons...\n');
  
  // For now, let's create a note that these need to be converted
  // The best approach is to use an online converter or install sharp
  console.log('Note: PNG conversion requires additional tools.');
  console.log('Options:');
  console.log('1. Install sharp: npm install sharp');
  console.log('2. Use online converter: https://cloudconvert.com/svg-to-png');
  console.log('3. Use ImageMagick: brew install imagemagick');
  console.log('\nFor now, creating placeholder note...\n');
  
  // Create a simple script that users can run after installing sharp
  const sharpScript = `const sharp = require('sharp');
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
      console.log(\`Converted \${svg}\`);
    } catch (e) {
      console.error(\`Error converting \${svg}:\`, e.message);
    }
  }
}

convert();`;
  
  fs.writeFileSync(path.join(iconsDir, 'convert-with-sharp.cjs'), sharpScript);
  console.log('Created convert-with-sharp.cjs - run after installing sharp');
}

main().catch(console.error);
