
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
<g clip-path="url(#clip0_2207_37037)">
<path d="M3.05042 10.8247V17.563C3.05042 20.0239 4.26917 21.2427 6.68323 21.2427H20.9918C23.4059 21.2427 24.6246 20.0239 24.6246 17.563V10.8247C24.6246 8.37549 23.4176 7.14502 20.9918 7.14502H6.68323C4.25745 7.14502 3.05042 8.37549 3.05042 10.8247Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37037">
<rect width="21.5742" height="14.1211" fill="currentColor" transform="translate(3.05042 7.12158)"/>
</clipPath>
</defs>
</svg>

`;

export const RectangleRatio16To9Fill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
