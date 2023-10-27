
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
<g clip-path="url(#clip0_2207_33834)">
<path d="M3.76367 24.6846H24.0371C26.4981 24.6846 27.7168 23.4776 27.7168 21.0635V6.74316C27.7168 4.3291 26.4981 3.11035 24.0371 3.11035H3.76367C1.31445 3.11035 0.0839844 4.3291 0.0839844 6.74316V21.0635C0.0839844 23.4776 1.31445 24.6846 3.76367 24.6846ZM3.7871 22.7979C2.61523 22.7979 1.9707 22.1768 1.9707 20.9581V6.84863C1.9707 5.62988 2.61523 4.99707 3.7871 4.99707H24.0137C25.1738 4.99707 25.8301 5.62988 25.8301 6.84863V20.9581C25.8301 22.1768 25.1738 22.7979 24.0137 22.7979H3.7871Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.7207 18.4736L18.4004 14.5244C18.8926 14.2431 18.8809 13.5634 18.4004 13.2705L11.7207 9.32127C11.2285 9.0283 10.5488 9.25095 10.5488 9.82517V17.9697C10.5488 18.5322 11.1817 18.8017 11.7207 18.4736Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33834">
<rect width="27.6328" height="21.5742" fill="currentColor" transform="translate(0.0839844 3.11035)"/>
</clipPath>
</defs>
</svg>

`;

export const PlayRectangle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
