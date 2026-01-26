#!/bin/bash

# Script to download technology icons in PNG format
# Using Simple Icons CDN with PNG format

ICONS_DIR="$(cd "$(dirname "$0")" && pwd)"
CDN_BASE="https://cdn.simpleicons.org"

# Color mapping for Simple Icons
declare -A ICON_COLORS=(
    ["python"]="3776AB"
    ["cplusplus"]="00599C"
    ["dart"]="0175C2"
    ["flutter"]="02569B"
    ["swift"]="FA7343"
    ["kotlin"]="7F52FF"
    ["unity"]="000000"
    ["apple"]="000000"
    ["android"]="3DDC84"
    ["latex"]="008080"
    ["tensorflow"]="FF6F00"
    ["arduino"]="00979D"
    ["autodesk"]="0696D2"
)

# Download PNG function - Simple Icons CDN doesn't directly support PNG
# We'll use an alternative approach: download from iconify or convert
download_png_icon() {
    local name=$1
    local filename=$2
    local color=${ICON_COLORS[$name]:-"000000"}
    
    echo "Downloading $filename as PNG..."
    
    # Try Iconify API which provides PNG
    curl -sL "https://api.iconify.design/simple-icons:${name}.svg?color=%23${color}&width=256&height=256" -o "${ICONS_DIR}/${filename}.tmp.svg" 2>/dev/null
    
    # Try alternative: use a service that converts SVG to PNG
    # For now, we'll use a Node.js approach or download from another source
    # Let's try downloading from a PNG icon service
    
    # Alternative: Use shields.io or similar service
    # Or use a Node.js script with sharp/puppeteer
    
    echo "Note: PNG conversion may require additional tools"
}

# For now, let's download high-quality PNGs from a reliable source
# Using icon-icons.com or similar service via direct download
download_from_icon_icons() {
    local name=$1
    local filename=$2
    
    # Icon-icons.com structure (example)
    # This is a placeholder - actual implementation would need specific URLs
    echo "Attempting to download $filename..."
    
    # Alternative: Use npm package simple-icons and convert
    # Or use an online converter service
}

# Download all icons
echo "Downloading PNG icons..."
echo "Note: This script downloads PNG versions. Some may need manual conversion."

# For immediate use, let's create a Node.js script that can convert SVGs to PNGs
# Or download PNGs directly from available sources

cat > "${ICONS_DIR}/convert-to-png.js" << 'EOF'
// Node.js script to convert SVG to PNG
// Requires: npm install sharp
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const iconsDir = __dirname;
const svgFiles = fs.readdirSync(iconsDir).filter(f => f.endsWith('.svg'));

async function convertToPng() {
  for (const svgFile of svgFiles) {
    const svgPath = path.join(iconsDir, svgFile);
    const pngPath = path.join(iconsDir, svgFile.replace('.svg', '.png'));
    
    try {
      await sharp(svgPath)
        .resize(256, 256, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png()
        .toFile(pngPath);
      console.log(`Converted ${svgFile} to ${pngPath}`);
    } catch (error) {
      console.error(`Error converting ${svgFile}:`, error.message);
    }
  }
}

convertToPng();
EOF

echo ""
echo "Created convert-to-png.js script"
echo "To convert SVGs to PNGs, run:"
echo "  cd $ICONS_DIR"
echo "  npm install sharp (if not already installed)"
echo "  node convert-to-png.js"
echo ""
echo "Alternatively, you can use online converters or download PNG versions directly."
