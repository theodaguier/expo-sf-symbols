
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
<g clip-path="url(#clip0_2207_34056)">
<path d="M6.68384 24.7305H20.8987C23.3597 24.7305 24.5784 23.5117 24.5784 21.0976V6.78906C24.5784 4.375 23.3597 3.15625 20.8987 3.15625H6.68384C4.23462 3.15625 3.00415 4.36328 3.00415 6.78906V21.0976C3.00415 23.5234 4.23462 24.7305 6.68384 24.7305Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34056">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.00415 3.13281)"/>
</clipPath>
</defs>
</svg>

`;

export const SquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
