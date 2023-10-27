
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
<g clip-path="url(#clip0_2207_34018)">
<path d="M13.9867 26.0593C20.5258 26.0593 25.9398 20.6335 25.9398 14.1062C25.9398 7.56714 20.5375 2.15308 13.9867 2.15308C7.47107 2.15308 2.03357 7.56714 2.03357 14.1062C2.03357 20.6335 7.45935 26.0593 13.9867 26.0593ZM13.9867 24.0671C8.45545 24.0671 4.01404 19.6374 4.02576 14.1062C4.03748 8.57495 8.46716 4.14527 13.9867 4.14527V24.0671Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34018">
<rect width="23.9062" height="24.0117" fill="currentColor" transform="translate(2.03357 2.04761)"/>
</clipPath>
</defs>
</svg>

`;

export const CircleLefthalfFilledInverse = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
