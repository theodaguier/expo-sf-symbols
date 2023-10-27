
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
<g clip-path="url(#clip0_2207_34185)">
<path d="M3.74683 24.6958H24.0202C26.4812 24.6958 27.6999 23.4888 27.6999 21.0747V6.75439C27.6999 4.34033 26.4812 3.12158 24.0202 3.12158H3.74683C1.29761 3.12158 0.0671387 4.34033 0.0671387 6.75439V21.0747C0.0671387 23.4888 1.29761 24.6958 3.74683 24.6958ZM3.77026 22.8091C2.59839 22.8091 1.95386 22.188 1.95386 20.9693V6.85986C1.95386 5.64111 2.59839 5.0083 3.77026 5.0083H23.9968C25.1569 5.0083 25.8132 5.64111 25.8132 6.85986V20.9693C25.8132 22.188 25.1569 22.8091 23.9968 22.8091H3.77026Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M14.8913 21.2154H23.1882C23.9265 21.2154 24.2194 20.9107 24.2194 20.1607V7.66846C24.2194 6.91846 23.9265 6.61377 23.1882 6.61377H14.8913C14.153 6.61377 13.8601 6.91846 13.8601 7.66846V20.1607C13.8601 20.9107 14.153 21.2154 14.8913 21.2154Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34185">
<rect width="27.6328" height="21.5742" fill="currentColor" transform="translate(0.0671387 3.12158)"/>
</clipPath>
</defs>
</svg>

`;

export const RectangleRighthalfInsetFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
