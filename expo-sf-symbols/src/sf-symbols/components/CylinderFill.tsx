
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
<g clip-path="url(#clip0_2207_36936)">
<path d="M4.021 21.2251C4.021 24.4594 8.08741 26.7446 14.0991 26.7446C20.1108 26.7446 24.1772 24.4594 24.1772 21.2251V7.04541C24.1772 4.09228 20.146 2.05322 14.0991 2.05322C8.05225 2.05322 4.021 4.09228 4.021 7.04541V21.2251ZM5.90772 7.04541C5.90772 5.07666 9.18897 3.70556 14.0991 3.70556C19.0093 3.70556 22.2905 5.07666 22.2905 7.04541C22.2905 8.93213 18.9858 10.2563 14.0991 10.2563C9.21241 10.2563 5.90772 8.93213 5.90772 7.04541Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36936">
<rect width="20.1562" height="24.7148" fill="currentColor" transform="translate(4.021 2.05322)"/>
</clipPath>
</defs>
</svg>

`;

export const CylinderFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
