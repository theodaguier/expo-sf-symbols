
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
<g clip-path="url(#clip0_2207_33829)">
<path d="M6.48193 23.9737C6.95068 23.9737 7.34912 23.7862 7.81787 23.5166L21.4819 15.6182C22.4546 15.044 22.7945 14.669 22.7945 14.0479C22.7945 13.4268 22.4546 13.0518 21.4819 12.4893L7.81787 4.5791C7.34912 4.30957 6.95068 4.13379 6.48193 4.13379C5.61475 4.13379 5.07568 4.79004 5.07568 5.80957V22.2862C5.07568 23.3057 5.61475 23.9737 6.48193 23.9737Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33829">
<rect width="17.7188" height="19.8633" fill="currentColor" transform="translate(5.07568 4.11035)"/>
</clipPath>
</defs>
</svg>

`;

export const PlayFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
