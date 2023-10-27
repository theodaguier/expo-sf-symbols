
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="28" height="29" viewBox="0 0 28 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_33655)">
<path d="M13.9594 24.0137C8.42822 24.0137 3.98681 19.584 3.99853 14.0527C4.01025 8.52149 8.43993 4.0918 13.9594 4.0918V24.0137Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.9594 26.0058C20.4985 26.0058 25.9125 20.5801 25.9125 14.0527C25.9125 7.51367 20.5102 2.09961 13.9594 2.09961C7.44385 2.09961 2.00635 7.51367 2.00635 14.0527C2.00635 20.5801 7.43213 26.0058 13.9594 26.0058ZM13.9594 24.0137C8.42823 24.0137 3.98682 19.584 3.99854 14.0527C4.01026 8.52149 8.43994 4.0918 13.9594 4.0918V24.0137Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33655">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.00635 2.09961)"/>
</clipPath>
</defs>
</svg>

`;

export const MoonphaseLastQuarter = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
