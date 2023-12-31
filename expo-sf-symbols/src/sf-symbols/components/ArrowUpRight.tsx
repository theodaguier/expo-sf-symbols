
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
<g clip-path="url(#clip0_2207_37366)">
<path d="M22.3738 17.9806L22.3621 6.19153C22.3621 5.52356 21.9285 5.05481 21.2254 5.05481H9.43628C8.78003 5.05481 8.33472 5.55872 8.33472 6.12121C8.33472 6.68371 8.83863 7.16418 9.38941 7.16418H13.4675L19.1863 6.97668L17.0066 8.88684L5.39331 20.5236C5.18237 20.7345 5.06519 21.0041 5.06519 21.2619C5.06519 21.8244 5.56909 22.3517 6.15503 22.3517C6.42457 22.3517 6.68238 22.258 6.89331 22.0353L18.53 10.4103L20.4636 8.21887L20.2527 13.6915V18.0275C20.2527 18.5783 20.7332 19.0939 21.3074 19.0939C21.8699 19.0939 22.3738 18.6135 22.3738 17.9806Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37366">
<rect width="17.3086" height="17.332" fill="currentColor" transform="translate(5.06519 5.01965)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowUpRight = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
