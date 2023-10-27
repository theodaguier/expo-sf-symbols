
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
<g clip-path="url(#clip0_2207_33660)">
<path d="M4.02163 14.0527C4.03335 8.52149 8.46303 4.0918 13.9942 4.0918C14.3692 4.0918 14.7442 4.11523 15.1075 4.16211C11.8029 6.14258 9.95132 9.63477 9.95132 14.0527C9.95132 18.459 11.7912 21.9394 15.0724 23.9434C14.7091 23.9902 14.3458 24.0137 13.9825 24.0137C8.45132 24.0137 4.00991 19.584 4.02163 14.0527Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M25.9356 14.0527C25.9356 7.51367 20.5333 2.09961 13.9942 2.09961C7.46692 2.09961 2.02942 7.51367 2.02942 14.0527C2.02942 20.5801 7.4552 26.0058 13.9825 26.0058C20.5216 26.0058 25.9356 20.5801 25.9356 14.0527ZM4.02161 14.0527C4.03333 8.52149 8.46301 4.0918 13.9942 4.0918C14.3692 4.0918 14.7442 4.11523 15.1075 4.16211C11.8029 6.14258 9.9513 9.63477 9.9513 14.0527C9.9513 18.459 11.7911 21.9394 15.0724 23.9434C14.7091 23.9902 14.3458 24.0137 13.9825 24.0137C8.4513 24.0137 4.00989 19.584 4.02161 14.0527Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33660">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.02942 2.09961)"/>
</clipPath>
</defs>
</svg>

`;

export const MoonphaseWaxingGibbousInverse = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
