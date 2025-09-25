#!/bin/bash

# Performance Testing Script
echo "🚀 Building optimized production bundle..."
npm run build

echo ""
echo "📊 Bundle size analysis:"
cd dist
find . -name "*.js" -exec ls -lh {} \; | awk '{print $5 "\t" $9}' | sort -hr
echo ""
find . -name "*.css" -exec ls -lh {} \; | awk '{print $5 "\t" $9}' | sort -hr

echo ""
echo "📦 Total dist size:"
du -sh .

cd ..

echo ""
echo "🔍 Bundle recommendations:"
echo "- JS chunks should be < 200KB each"
echo "- CSS should be < 50KB"  
echo "- Total initial load < 500KB"
echo "- Critical resources should load < 1.5s"

echo ""
echo "✅ To test locally:"
echo "npm run preview"
echo ""
echo "🌐 Then test with PageSpeed Insights:"
echo "https://pagespeed.web.dev/"