
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
<g clip-path="url(#clip0_2207_37706)">
<path d="M6.73633 24.7442H20.9511C23.4121 24.7442 24.6308 23.5254 24.6308 21.1113V6.80273C24.6308 4.38867 23.4121 3.16992 20.9511 3.16992H6.73633C4.28711 3.16992 3.05664 4.37695 3.05664 6.80273V21.1113C3.05664 23.5371 4.28711 24.7442 6.73633 24.7442Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.8496 19.6113C11.0137 19.6113 9.11523 17.9824 9.11523 15.4395V9.26368C9.11523 8.58399 9.4668 8.17383 10.0762 8.17383C10.6973 8.17383 11.0488 8.58399 11.0488 9.26368V15.252C11.0488 16.9512 12.1621 18.0059 13.8496 18.0059C15.5371 18.0059 16.6386 16.9512 16.6386 15.252V9.26368C16.6386 8.58399 17.0019 8.17383 17.5996 8.17383C18.2324 8.17383 18.5839 8.58399 18.5839 9.26368V15.4395C18.5839 17.9824 16.6855 19.6113 13.8496 19.6113Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37706">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.05664 3.14648)"/>
</clipPath>
</defs>
</svg>

`;

export const USquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
