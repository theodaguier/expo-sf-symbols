
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
<g clip-path="url(#clip0_2207_36953)">
<path d="M17.978 9.46533V16.977C17.978 17.5746 18.5405 17.7739 19.0796 17.4575L25.1382 13.8246C25.6304 13.5317 25.6069 12.9106 25.1265 12.6177L19.0679 8.98486C18.5288 8.68017 17.978 8.87939 17.978 9.46533ZM1.45459 14.2231H19.7124V12.2192H1.45459V14.2231Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M1.021 23.9263C1.021 24.4888 1.396 24.8521 1.9585 24.8521H25.2671C25.7827 24.8521 26.2163 24.4419 26.2163 23.9146C26.2163 23.399 25.7827 22.9771 25.2671 22.9771H3.23584C2.98975 22.9771 2.90772 22.8951 2.90772 22.649V4.12158C2.90772 3.61768 2.48584 3.18408 1.97022 3.18408C1.44287 3.18408 1.021 3.61768 1.021 4.12158V23.9263Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36953">
<rect width="25.1953" height="21.8086" fill="currentColor" transform="translate(1.021 3.04346)"/>
</clipPath>
</defs>
</svg>

`;

export const ChartLineFlattrendXyaxis = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
