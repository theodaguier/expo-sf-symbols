
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
<g clip-path="url(#clip0_2207_33988)">
<path d="M23.1975 23.5683L24.51 22.2675L14.3498 12.1191L13.0374 13.4316L23.1975 23.5683ZM4.75219 24.166H23.1154C24.51 24.166 25.1428 23.5332 25.1428 22.1386V3.77539C25.1428 2.75586 24.4865 2.12305 23.5022 2.12305C22.8811 2.12305 22.4358 2.4043 21.9787 2.86133L3.82642 21.0136C3.3811 21.4707 3.08813 21.9042 3.08813 22.5371C3.08813 23.5214 3.72095 24.166 4.75219 24.166ZM5.76001 22.2558C5.66625 22.2558 5.59594 22.2089 5.59594 22.1269C5.59594 22.0918 5.60766 22.0449 5.67797 21.9863L22.9514 4.70117C23.01 4.64258 23.0569 4.61914 23.1037 4.61914C23.1858 4.61914 23.2209 4.68946 23.2209 4.78321V21.9042C23.2209 22.1738 23.1506 22.2558 22.8693 22.2558H5.76001Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33988">
<rect width="22.0547" height="24.4805" fill="currentColor" transform="translate(3.08813 2.12305)"/>
</clipPath>
</defs>
</svg>

`;

export const RighttriangleSplitDiagonal = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
