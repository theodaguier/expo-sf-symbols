
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
<g clip-path="url(#clip0_2207_37593)">
<path d="M6.77198 24.6215H20.9868C23.4478 24.6215 24.6665 23.4027 24.6665 20.9886V6.68005C24.6665 4.26599 23.4478 3.04724 20.9868 3.04724H6.77198C4.32276 3.04724 3.09229 4.25427 3.09229 6.68005V20.9886C3.09229 23.4144 4.32276 24.6215 6.77198 24.6215Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.6587 18.5394C11.0962 18.8793 10.4517 18.6097 10.4517 18.0238V9.62144C10.4517 9.04722 11.1431 8.80112 11.6587 9.10581L18.5376 13.184C19.0298 13.4769 19.0415 14.18 18.5376 14.4847L11.6587 18.5394Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37593">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.09229 3.0238)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowtriangleRightSquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
