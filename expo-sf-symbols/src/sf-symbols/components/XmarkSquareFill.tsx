
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
<g clip-path="url(#clip0_2207_37256)">
<path d="M6.77002 24.75H20.9848C23.4458 24.75 24.6645 23.5312 24.6645 21.1171V6.80859C24.6645 4.39453 23.4458 3.17578 20.9848 3.17578H6.77002C4.3208 3.17578 3.09033 4.38281 3.09033 6.80859V21.1171C3.09033 23.5429 4.3208 24.75 6.77002 24.75Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.9458 18.8671C9.40674 18.8671 8.98486 18.4335 8.98486 17.8945C8.98486 17.6367 9.07861 17.3906 9.26611 17.2148L12.5122 13.957L9.26611 10.7109C9.07861 10.5234 8.98486 10.2891 8.98486 10.0313C8.98486 9.48047 9.40674 9.07032 9.9458 9.07032C10.2153 9.07032 10.4263 9.16407 10.6138 9.33985L13.8833 12.5977L17.1762 9.32812C17.3755 9.1289 17.5981 9.04688 17.8442 9.04688C18.3833 9.04688 18.8169 9.46876 18.8169 10.0078C18.8169 10.2773 18.7348 10.4883 18.5356 10.6992L15.2661 13.957L18.5239 17.2031C18.7114 17.3789 18.8051 17.625 18.8051 17.8945C18.8051 18.4335 18.3715 18.8671 17.8208 18.8671C17.563 18.8671 17.3051 18.7734 17.1294 18.5859L13.8833 15.3281L10.6489 18.5859C10.4614 18.7734 10.2153 18.8671 9.9458 18.8671Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37256">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.09033 3.15234)"/>
</clipPath>
</defs>
</svg>

`;

export const XmarkSquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
