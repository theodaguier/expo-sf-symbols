
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
<g clip-path="url(#clip0_2207_33657)">
<path d="M13.9658 24.0137C8.43457 24.0137 4.0166 19.584 4.0166 14.0527C4.0166 8.52149 8.42285 4.0918 13.9541 4.0918C19.4854 4.0918 23.9268 8.52149 23.9268 14.0527C23.9268 19.584 19.4971 24.0137 13.9658 24.0137Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.9658 26.0058C20.5049 26.0058 25.9189 20.5801 25.9189 14.0527C25.9189 7.51367 20.4932 2.09961 13.9541 2.09961C7.42675 2.09961 2.0127 7.51367 2.0127 14.0527C2.0127 20.5801 7.43848 26.0058 13.9658 26.0058ZM13.9658 24.0137C8.43458 24.0137 4.01661 19.584 4.01661 14.0527C4.01661 8.52149 8.42285 4.0918 13.9541 4.0918C19.4854 4.0918 23.9268 8.52149 23.9268 14.0527C23.9268 19.584 19.4971 24.0137 13.9658 24.0137Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33657">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.0127 2.09961)"/>
</clipPath>
</defs>
</svg>

`;

export const MoonphaseNewMoonInverse = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
