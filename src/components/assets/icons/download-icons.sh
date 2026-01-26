#!/bin/bash

# Script to download technology icons from Simple Icons CDN
# Simple Icons: https://simpleicons.org/ (MIT License)

ICONS_DIR="$(cd "$(dirname "$0")" && pwd)"
CDN_BASE="https://cdn.simpleicons.org"

# Color mapping for Simple Icons (some icons have specific colors)
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

# Download function
download_icon() {
    local name=$1
    local filename=$2
    local color=${ICON_COLORS[$name]:-"000000"}
    
    echo "Downloading $filename..."
    curl -sL "${CDN_BASE}/${name}/${color}" -o "${ICONS_DIR}/${filename}" || {
        echo "Failed to download $filename"
        return 1
    }
}

# Download all icons
download_icon "python" "python.svg"
download_icon "cplusplus" "cpp.svg"
download_icon "dart" "dart.svg"
download_icon "flutter" "flutter.svg"
download_icon "swift" "swift.svg"
download_icon "kotlin" "kotlin.svg"
download_icon "unity" "unity.svg"
download_icon "apple" "ios.svg"
download_icon "android" "android.svg"
download_icon "latex" "latex.svg"
download_icon "tensorflow" "tensorflow.svg"
download_icon "arduino" "arduino.svg"
download_icon "autodesk" "fusion360.svg"

# Note: These may need manual download or alternative sources
echo ""
echo "Note: The following icons may need manual download:"
echo "  - meta-xr.svg (Meta XR logo)"
echo "  - nist.svg (NIST logo)"
echo "  - mediapipe.svg (MediaPipe logo)"
echo ""
echo "You can find these at:"
echo "  - Meta XR: Meta Brand Resources"
echo "  - NIST: https://www.nist.gov/ (brand guidelines)"
echo "  - MediaPipe: Google MediaPipe resources"
echo ""
echo "All icons downloaded to: $ICONS_DIR"
