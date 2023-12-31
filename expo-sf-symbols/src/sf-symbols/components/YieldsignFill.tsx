
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
<g clip-path="url(#clip0_2207_35965)">
<path d="M5.21607 3.1543C3.22388 3.1543 2.01685 4.54883 2.01685 6.3418C2.01685 6.88086 2.15747 7.44336 2.47388 7.98242L11.5676 23.8262C12.1652 24.8809 13.2199 25.4199 14.298 25.4199C15.3762 25.4199 16.4191 24.8809 17.0285 23.8262L26.1223 7.98242C26.4152 7.45508 26.5793 6.88086 26.5793 6.3418C26.5793 4.54883 25.3723 3.1543 23.3801 3.1543H5.21607Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M6.68091 6.51758H21.9035C22.3957 6.51758 22.6652 6.98633 22.4191 7.43164L14.8137 20.709C14.5676 21.166 14.0168 21.166 13.7707 20.709L6.16529 7.43164C5.90747 6.97461 6.18873 6.51758 6.68091 6.51758Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_35965">
<rect width="24.5625" height="22.3945" fill="currentColor" transform="translate(2.01685 3.1543)"/>
</clipPath>
</defs>
</svg>

`;

export const YieldsignFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
