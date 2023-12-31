
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
<g clip-path="url(#clip0_2207_34063)">
<path d="M6.74268 24.7305H20.9575C23.4185 24.7305 24.6372 23.5117 24.6372 21.0976V6.78906C24.6372 4.375 23.4185 3.15625 20.9575 3.15625H6.74268C4.29346 3.15625 3.06299 4.36328 3.06299 6.78906V21.0976C3.06299 23.5234 4.29346 24.7305 6.74268 24.7305ZM6.76611 22.8437C5.59424 22.8437 4.94971 22.2226 4.94971 21.0039V6.88281C4.94971 5.66406 5.59424 5.04297 6.76611 5.04297H20.9341C22.0942 5.04297 22.7505 5.66406 22.7505 6.88281V21.0039C22.7505 22.2226 22.0942 22.8437 20.9341 22.8437H6.76611Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M7.66846 21.2266H20.0552C20.7818 21.2266 21.1568 20.8398 21.1568 20.0898V7.76172C21.1568 7.01172 20.7818 6.625 20.0552 6.625H7.66846C6.93018 6.625 6.55518 7.01172 6.55518 7.76172V20.0898C6.55518 20.8398 6.93018 21.2266 7.66846 21.2266Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34063">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.06299 3.13281)"/>
</clipPath>
</defs>
</svg>

`;

export const SquareInsetFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
