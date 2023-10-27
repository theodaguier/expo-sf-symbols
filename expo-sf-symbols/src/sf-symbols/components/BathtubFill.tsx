
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="31" height="29" viewBox="0 0 31 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_35157)">
<path d="M0.0168457 6.55152C0.0168457 7.39527 0.696534 8.07496 1.54029 8.07496H28.5051C29.3488 8.07496 30.0402 7.39527 30.0402 6.55152C30.0402 5.70776 29.3488 5.02808 28.5051 5.02808H1.54029C0.696534 5.02808 0.0168457 5.70776 0.0168457 6.55152ZM8.25513 20.7195H21.7902C26.2082 20.7195 28.4934 18.5633 28.4934 14.3679V9.6687H1.56373V14.3679C1.56373 18.5633 3.83716 20.7195 8.25513 20.7195ZM4.9856 23.3328C5.47779 23.5203 6.02857 23.2508 6.20435 22.7703L7.20044 20.0164L5.43091 19.3719L4.43482 22.1258C4.25904 22.6062 4.50513 23.1687 4.9856 23.3328ZM25.0598 23.3328C25.5402 23.1687 25.798 22.6062 25.6223 22.1258L24.6262 19.3719L22.8449 20.0164L23.841 22.7703C24.0285 23.2508 24.5793 23.5203 25.0598 23.3328Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35157">
<rect width="30.0234" height="18.5039" fill="currentColor" transform="translate(0.0168457 5.02808)"/>
</clipPath>
</defs>
</svg>

`;

export const BathtubFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
