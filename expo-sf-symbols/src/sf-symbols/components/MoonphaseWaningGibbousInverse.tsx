
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
<g clip-path="url(#clip0_2207_33662)">
<path d="M23.9351 14.0527C23.9468 19.584 19.5054 24.0137 13.9741 24.0137C13.6108 24.0137 13.2476 23.9902 12.8843 23.9434C16.1655 21.9394 18.0054 18.459 18.0054 14.0527C18.0054 9.63477 16.1538 6.14258 12.8491 4.16211C13.2241 4.11523 13.5874 4.0918 13.9624 4.0918C19.4937 4.0918 23.9233 8.52149 23.9351 14.0527Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M2.021 14.0527C2.021 20.5801 7.44678 26.0058 13.9741 26.0058C20.5132 26.0058 25.9272 20.5801 25.9272 14.0527C25.9272 7.51367 20.5015 2.09961 13.9624 2.09961C7.43506 2.09961 2.021 7.51367 2.021 14.0527ZM23.9351 14.0527C23.9468 19.584 19.5054 24.0137 13.9741 24.0137C13.6108 24.0137 13.2476 23.9902 12.8843 23.9434C16.1655 21.9394 18.0054 18.459 18.0054 14.0527C18.0054 9.63477 16.1538 6.14258 12.8491 4.16211C13.2241 4.11523 13.5874 4.0918 13.9624 4.0918C19.4937 4.0918 23.9233 8.52149 23.9351 14.0527Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33662">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.021 2.09961)"/>
</clipPath>
</defs>
</svg>

`;

export const MoonphaseWaningGibbousInverse = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
