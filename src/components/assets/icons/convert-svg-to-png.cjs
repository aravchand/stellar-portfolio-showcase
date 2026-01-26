// Convert SVG files to PNG using Node.js
// This script converts all SVG files in the current directory to PNG format
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const iconsDir = __dirname;
const svgFiles = fs.readdirSync(iconsDir).filter(f => f.endsWith('.svg') && f !== 'nist.svg');

console.log('Converting SVG files to PNG...\n');

// Try using rsvg-convert (librsvg) if available
function convertWithRsvg(svgPath, pngPath) {
  try {
    execSync(`rsvg-convert -w 256 -h 256 "${svgPath}" -o "${pngPath}"`, { stdio: 'ignore' });
    return true;
  } catch (e) {
    return false;
  }
}

// Try using ImageMagick convert if available
function convertWithImageMagick(svgPath, pngPath) {
  try {
    execSync(`convert -background none -resize 256x256 "${svgPath}" "${pngPath}"`, { stdio: 'ignore' });
    return true;
  } catch (e) {
    return false;
  }
}

// Try using Inkscape if available
function convertWithInkscape(svgPath, pngPath) {
  try {
    execSync(`inkscape "${svgPath}" --export-filename="${pngPath}" --export-width=256 --export-height=256`, { stdio: 'ignore' });
    return true;
  } catch (e) {
    return false;
  }
}

// Download PNG from Iconify API as fallback
function downloadFromIconify(svgFile, pngPath) {
  const iconName = svgFile.replace('.svg', '').replace(/-/g, ':');
  const iconifyMap = {
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
  
  const iconifyName = iconifyMap[iconName] || iconName;
  
  try {
    // Iconify API provides PNG via data URI or direct download
    const url = `https://api.iconify.design/simple-icons:${iconifyName}.svg?download=true&color=%23000000&width=256`;
    execSync(`curl -sL "${url}" -o "${pngPath}.tmp"`, { stdio: 'ignore' });
    
    // If downloaded, try to convert or use as-is if it's already PNG
    if (fs.existsSync(`${pngPath}.tmp`)) {
      const content = fs.readFileSync(`${pngPath}.tmp`, 'utf8');
      if (content.includes('<svg')) {
        // It's still SVG, need conversion
        fs.unlinkSync(`${pngPath}.tmp`);
        return false;
      } else {
        // Might be PNG
        fs.renameSync(`${pngPath}.tmp`, pngPath);
        return true;
      }
    }
  } catch (e) {
    return false;
  }
  return false;
}

let converted = 0;
let failed = [];

for (const svgFile of svgFiles) {
  const svgPath = path.join(iconsDir, svgFile);
  const pngPath = path.join(iconsDir, svgFile.replace('.svg', '.png'));
  
  console.log(`Converting ${svgFile}...`);
  
  let success = false;
  
  // Try different conversion methods
  if (convertWithRsvg(svgPath, pngPath)) {
    success = true;
  } else if (convertWithImageMagick(svgPath, pngPath)) {
    success = true;
  } else if (convertWithInkscape(svgPath, pngPath)) {
    success = true;
  } else {
    // Fallback: try downloading PNG version
    success = downloadFromIconify(svgFile, pngPath);
  }
  
  if (success && fs.existsSync(pngPath)) {
    console.log(`  ✓ Created ${path.basename(pngPath)}`);
    converted++;
  } else {
    console.log(`  ✗ Failed to convert ${svgFile}`);
    failed.push(svgFile);
  }
}

console.log(`\nConversion complete: ${converted}/${svgFiles.length} converted`);

if (failed.length > 0) {
  console.log('\nFailed files (may need manual conversion):');
  failed.forEach(f => console.log(`  - ${f}`));
  console.log('\nYou can use online converters like:');
  console.log('  - https://cloudconvert.com/svg-to-png');
  console.log('  - https://convertio.co/svg-png/');
}
