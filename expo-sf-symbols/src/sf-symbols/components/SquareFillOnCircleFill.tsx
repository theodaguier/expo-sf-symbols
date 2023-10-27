
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
<g clip-path="url(#clip0_2207_34104)">
<path d="M9.61768 19.8437C14.9263 19.8437 19.2271 15.543 19.2271 10.2344C19.2271 4.92578 14.9263 0.625 9.61768 0.625C4.30908 0.625 0.00830078 4.92578 0.00830078 10.2344C0.00830078 15.543 4.30908 19.8437 9.61768 19.8437Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.2231 28.1523H22.9888C26.3169 28.1523 28.2622 26.2305 28.2622 22.9258V11.0664C28.2622 7.75 26.3169 5.83984 22.9888 5.83984H11.2231C7.89502 5.83984 5.94971 7.75 5.94971 11.0664V22.9258C5.94971 26.2305 7.89502 28.1523 11.2231 28.1523Z" fill="currentColor"/>
<path d="M11.2231 26.5586H22.9888C25.4263 26.5586 26.6685 25.3398 26.6685 22.9258V11.0664C26.6685 8.65234 25.4263 7.43359 22.9888 7.43359H11.2231C8.77392 7.43359 7.54346 8.65234 7.54346 11.0664V22.9258C7.54346 25.3398 8.77392 26.5586 11.2231 26.5586Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34104">
<rect width="28.2539" height="28.0195" fill="currentColor" transform="translate(0.00830078 0.132812)"/>
</clipPath>
</defs>
</svg>

`;

export const SquareFillOnCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
