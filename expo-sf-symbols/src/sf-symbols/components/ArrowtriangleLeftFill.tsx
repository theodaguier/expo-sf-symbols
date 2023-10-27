
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
<g clip-path="url(#clip0_2207_37577)">
<path d="M21.7783 5.03552C21.3096 5.03552 20.9346 5.23474 20.4424 5.48083L5.38379 12.7933C4.3877 13.2855 4.07129 13.7308 4.07129 14.3519C4.07129 14.973 4.3877 15.43 5.38379 15.9222L20.4424 23.223C20.9463 23.4691 21.3213 23.6683 21.7901 23.6683C22.6572 23.6683 23.1846 23.0121 23.1846 21.9926V6.7113C23.1846 5.69177 22.6455 5.03552 21.7783 5.03552Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37577">
<rect width="19.1133" height="18.6445" fill="currentColor" transform="translate(4.07129 5.0238)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowtriangleLeftFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
