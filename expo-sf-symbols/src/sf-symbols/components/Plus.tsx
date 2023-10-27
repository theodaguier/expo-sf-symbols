
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
<g clip-path="url(#clip0_2207_37189)">
<path d="M4.02319 13.7798C4.02319 14.354 4.50366 14.8227 5.06616 14.8227H12.6482V22.4048C12.6482 22.9673 13.1169 23.4477 13.6912 23.4477C14.2654 23.4477 14.7459 22.9673 14.7459 22.4048V14.8227H22.3162C22.8787 14.8227 23.3591 14.354 23.3591 13.7798C23.3591 13.2056 22.8787 12.7251 22.3162 12.7251H14.7459V5.15479C14.7459 4.59229 14.2654 4.11182 13.6912 4.11182C13.1169 4.11182 12.6482 4.59229 12.6482 5.15479V12.7251H5.06616C4.50366 12.7251 4.02319 13.2056 4.02319 13.7798Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37189">
<rect width="19.3359" height="19.3477" fill="currentColor" transform="translate(4.02319 4.11182)"/>
</clipPath>
</defs>
</svg>

`;

export const Plus = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
