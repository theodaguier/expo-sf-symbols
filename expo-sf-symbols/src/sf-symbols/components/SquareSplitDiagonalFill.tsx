
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
<g clip-path="url(#clip0_2207_34073)">
<path d="M20.9177 3.15771H6.70288C4.25366 3.15771 3.02319 4.36475 3.02319 6.79053V21.0991C3.02319 21.8609 3.1521 22.4937 3.40991 23.021L22.8865 3.54443C22.3591 3.2749 21.7029 3.15771 20.9177 3.15771ZM4.73413 24.3452C5.27319 24.6031 5.91772 24.732 6.70288 24.732H20.9177C23.3787 24.732 24.5974 23.5132 24.5974 21.0991V6.79053C24.5974 6.02881 24.4802 5.38428 24.2107 4.86866L4.73413 24.3452Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34073">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.02319 3.13428)"/>
</clipPath>
</defs>
</svg>

`;

export const SquareSplitDiagonalFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
