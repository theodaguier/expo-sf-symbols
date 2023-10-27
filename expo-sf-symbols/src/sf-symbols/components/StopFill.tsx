
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
<g clip-path="url(#clip0_2207_33847)">
<path d="M4.08813 20.6474C4.08813 22.2763 5.07251 23.2373 6.71313 23.2373H20.5529C22.2053 23.2373 23.1779 22.2763 23.1779 20.6474V6.72558C23.1779 5.09668 22.2053 4.13574 20.5529 4.13574H6.71313C5.07251 4.13574 4.08813 5.09668 4.08813 6.72558V20.6474Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33847">
<rect width="19.0898" height="19.1133" fill="currentColor" transform="translate(4.08813 4.13574)"/>
</clipPath>
</defs>
</svg>

`;

export const StopFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
