
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
<g clip-path="url(#clip0_2207_34160)">
<path d="M0.0651855 21.0747C0.0651855 23.4888 1.29566 24.6958 3.74488 24.6958H24.0183C26.4793 24.6958 27.698 23.4888 27.698 21.0747V6.75439C27.698 4.34033 26.4793 3.12158 24.0183 3.12158H3.74488C1.29566 3.12158 0.0651855 4.34033 0.0651855 6.75439V21.0747ZM1.95191 20.9693V6.85986C1.95191 5.64111 2.59644 5.0083 3.76831 5.0083H13.905V22.8091H3.76831C2.59644 22.8091 1.95191 22.188 1.95191 20.9693Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34160">
<rect width="27.6328" height="21.5742" fill="currentColor" transform="translate(0.0651855 3.12158)"/>
</clipPath>
</defs>
</svg>

`;

export const RectangleRighthalfFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
