
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="29" height="29" viewBox="0 0 29 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_34574)">
<path d="M5.67626 26.5303C7.08252 26.5303 10.5864 24.9951 12.5786 23.5655C12.7778 23.4248 12.9418 23.3662 13.1059 23.3662C13.2583 23.3779 13.4106 23.3897 13.5629 23.3897C22.0122 23.3897 27.6137 18.585 27.6137 12.749C27.6137 6.85449 21.7075 2.09668 14.3247 2.09668C6.94189 2.09668 1.03564 6.85449 1.03564 12.749C1.03564 16.499 3.34423 19.792 7.10595 21.8076C7.28173 21.9014 7.34033 22.0772 7.24658 22.2529C6.59033 23.3311 5.41845 24.6201 4.97314 25.2061C4.51611 25.792 4.77392 26.5303 5.67626 26.5303Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34574">
<rect width="26.5781" height="24.4336" fill="currentColor" transform="translate(1.03564 2.09668)"/>
</clipPath>
</defs>
</svg>

`;

export const MessageFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
