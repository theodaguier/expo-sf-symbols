
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
<g clip-path="url(#clip0_2207_37230)">
<path d="M6.75537 24.6578H20.9702C23.4312 24.6578 24.6499 23.439 24.6499 21.0249V6.71631C24.6499 4.30225 23.4312 3.0835 20.9702 3.0835H6.75537C4.30615 3.0835 3.07568 4.29053 3.07568 6.71631V21.0249C3.07568 23.4507 4.30615 24.6578 6.75537 24.6578Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.32177 17.0289C8.70068 17.0289 8.25537 16.7242 8.25537 16.1148C8.25537 15.4937 8.67724 15.1656 9.32177 15.1656H18.4038C19.0484 15.1656 19.4585 15.4937 19.4585 16.1148C19.4585 16.7242 19.0249 17.0289 18.4038 17.0289H9.32177ZM9.32177 12.564C8.70068 12.564 8.25537 12.2593 8.25537 11.6382C8.25537 11.0171 8.67724 10.7007 9.32177 10.7007H18.4038C19.0484 10.7007 19.4585 11.0171 19.4585 11.6382C19.4585 12.2593 19.0249 12.564 18.4038 12.564H9.32177Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37230">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.07568 3.06006)"/>
</clipPath>
</defs>
</svg>

`;

export const EqualSquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
