
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
<g clip-path="url(#clip0_2207_33835)">
<path d="M3.76587 24.6846H24.0393C26.5003 24.6846 27.719 23.4776 27.719 21.0635V6.74316C27.719 4.3291 26.5003 3.11035 24.0393 3.11035H3.76587C1.31665 3.11035 0.0861816 4.3291 0.0861816 6.74316V21.0635C0.0861816 23.4776 1.31665 24.6846 3.76587 24.6846Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.676 18.6259C11.1253 18.9658 10.469 18.6962 10.469 18.1103V9.70799C10.469 9.13377 11.1721 8.88767 11.676 9.19236L18.5667 13.2705C19.0589 13.5634 19.0706 14.2665 18.5667 14.5712L11.676 18.6259Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_33835">
<rect width="27.6328" height="21.5742" fill="currentColor" transform="translate(0.0861816 3.11035)"/>
</clipPath>
</defs>
</svg>

`;

export const PlayRectangleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
