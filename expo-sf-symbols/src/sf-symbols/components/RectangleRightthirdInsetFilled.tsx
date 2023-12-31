
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
<g clip-path="url(#clip0_2207_34195)">
<path d="M3.75098 24.6958H24.0244C26.4854 24.6958 27.7041 23.4888 27.7041 21.0747V6.75439C27.7041 4.34033 26.4854 3.12158 24.0244 3.12158H3.75098C1.30176 3.12158 0.0712891 4.34033 0.0712891 6.75439V21.0747C0.0712891 23.4888 1.30176 24.6958 3.75098 24.6958ZM3.77441 22.8091C2.60254 22.8091 1.95801 22.188 1.95801 20.9693V6.85986C1.95801 5.64111 2.60254 5.0083 3.77441 5.0083H24.001C25.1611 5.0083 25.8174 5.64111 25.8174 6.85986V20.9693C25.8174 22.188 25.1611 22.8091 24.001 22.8091H3.77441Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M19.8876 21.2154H23.1923C23.9306 21.2154 24.2235 20.9107 24.2235 20.1607V7.66846C24.2235 6.91846 23.9306 6.61377 23.1923 6.61377H19.8876C19.1493 6.61377 18.8564 6.91846 18.8564 7.66846V20.1607C18.8564 20.9107 19.1493 21.2154 19.8876 21.2154Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34195">
<rect width="27.6328" height="21.5742" fill="currentColor" transform="translate(0.0712891 3.12158)"/>
</clipPath>
</defs>
</svg>

`;

export const RectangleRightthirdInsetFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
