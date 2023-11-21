#!/bin/bash
svgFolder=$PWD/src/ui/0_assets/svg
iconsFile=$svgFolder/icons.ts

rm -f $iconsFile

echo "export const iconNames = [" >> $iconsFile

for file in $svgFolder/icons/*.svg; do
  name=$(basename $file .svg)
  echo "  '$name'," >> $iconsFile
done

echo "] as const;" >> $iconsFile
echo "" >> $iconsFile
echo "export type IconNames = (typeof iconNames)[number];" >> $iconsFile