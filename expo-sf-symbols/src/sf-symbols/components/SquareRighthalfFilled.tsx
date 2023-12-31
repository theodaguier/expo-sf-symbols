
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
<g clip-path="url(#clip0_2207_34060)">
<path d="M3.09229 21.0976C3.09229 23.5117 4.31104 24.7305 6.77198 24.7305H20.9868C23.4361 24.7305 24.6665 23.5234 24.6665 21.0976V6.78906C24.6665 4.36328 23.4361 3.15625 20.9868 3.15625H6.77198C4.31104 3.15625 3.09229 4.375 3.09229 6.78906V21.0976ZM4.97901 21.0039V6.88281C4.97901 5.66406 5.64698 5.04297 6.79541 5.04297H13.8853V22.8437H6.79541C5.64698 22.8437 4.97901 22.2226 4.97901 21.0039Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34060">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.09229 3.13281)"/>
</clipPath>
</defs>
</svg>

`;

export const SquareRighthalfFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
