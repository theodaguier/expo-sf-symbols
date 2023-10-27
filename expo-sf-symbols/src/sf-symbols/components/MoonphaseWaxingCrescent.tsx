
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
<g clip-path="url(#clip0_2207_33650)">
<path d="M23.9373 14.0527C23.949 19.584 19.5076 24.0137 13.9763 24.0137C13.613 24.0137 13.2498 23.9902 12.8865 23.9434C16.1677 21.9394 18.0076 18.459 18.0076 14.0527C18.0076 9.63477 16.156 6.14258 12.8513 4.16211C13.2263 4.11523 13.5896 4.0918 13.9646 4.0918C19.4959 4.0918 23.9255 8.52149 23.9373 14.0527Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M2.02319 14.0527C2.02319 20.5801 7.44897 26.0058 13.9763 26.0058C20.5154 26.0058 25.9294 20.5801 25.9294 14.0527C25.9294 7.51367 20.5037 2.09961 13.9646 2.09961C7.43725 2.09961 2.02319 7.51367 2.02319 14.0527ZM23.9373 14.0527C23.949 19.584 19.5076 24.0137 13.9763 24.0137C13.613 24.0137 13.2498 23.9902 12.8865 23.9434C16.1677 21.9394 18.0076 18.459 18.0076 14.0527C18.0076 9.63477 16.156 6.14258 12.8513 4.16211C13.2263 4.11523 13.5896 4.0918 13.9646 4.0918C19.4959 4.0918 23.9255 8.52149 23.9373 14.0527Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33650">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.02319 2.09961)"/>
</clipPath>
</defs>
</svg>

`;

export const MoonphaseWaxingCrescent = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
