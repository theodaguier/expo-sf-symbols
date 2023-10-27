
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
<g clip-path="url(#clip0_2207_37599)">
<path d="M6.73853 24.6215H20.9533C23.4143 24.6215 24.633 23.4027 24.633 20.9886V6.68005C24.633 4.26599 23.4143 3.04724 20.9533 3.04724H6.73853C4.28931 3.04724 3.05884 4.25427 3.05884 6.68005V20.9886C3.05884 23.4144 4.28931 24.6215 6.73853 24.6215Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.6252 18.5394C11.0627 18.8793 10.4182 18.6097 10.4182 18.0238V9.62144C10.4182 9.04722 11.1096 8.80112 11.6252 9.10581L18.5041 13.184C18.9963 13.4769 19.008 14.18 18.5041 14.4847L11.6252 18.5394Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37599">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.05884 3.0238)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowtriangleForwardSquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
