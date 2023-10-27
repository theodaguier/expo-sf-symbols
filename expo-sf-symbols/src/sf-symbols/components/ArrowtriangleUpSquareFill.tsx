
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
<g clip-path="url(#clip0_2207_37605)">
<path d="M6.68799 24.6228H20.9028C23.3638 24.6228 24.5825 23.404 24.5825 20.9899V6.6814C24.5825 4.26734 23.3638 3.04858 20.9028 3.04858H6.68799C4.23877 3.04858 3.0083 4.25562 3.0083 6.6814V20.9899C3.0083 23.4157 4.23877 24.6228 6.68799 24.6228Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.59425 17.5563C9.02003 17.5563 8.77393 16.8649 9.07862 16.3493L13.145 9.45873C13.4497 8.96655 14.1528 8.93139 14.4575 9.45873L18.5122 16.3493C18.8403 16.9118 18.5825 17.5563 18.0083 17.5563H9.59425Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37605">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.0083 3.02515)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowtriangleUpSquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
