
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
<g clip-path="url(#clip0_2207_32967)">
<path d="M13.9887 26.6308C20.5278 26.6308 25.9418 21.2051 25.9418 14.6777C25.9418 8.13868 20.5161 2.72461 13.977 2.72461C7.4497 2.72461 2.03564 8.13868 2.03564 14.6777C2.03564 21.2051 7.46142 26.6308 13.9887 26.6308Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M14.2583 22.2832C13.6372 22.2832 13.4497 21.791 13.2387 21.1113L12.1489 17.5605C12.0317 17.0918 12.0551 16.8691 12.3247 16.5996L19.2036 9.18164C19.2856 9.0879 19.2856 8.98243 19.2036 8.91211C19.1333 8.86524 19.0395 8.8418 18.9458 8.92383L11.563 15.8496C11.27 16.1074 11.0356 16.1074 10.602 15.9785L6.9458 14.8769C6.28955 14.6777 5.83252 14.4668 5.83252 13.8574C5.83252 13.3652 6.26611 13.0137 6.82861 12.8144L18.4418 8.36133C18.7583 8.24414 19.0161 8.17383 19.2504 8.17383C19.684 8.17383 19.9418 8.44336 19.9418 8.87696C19.9418 9.11133 19.8833 9.36914 19.7661 9.68555L15.3481 21.2402C15.102 21.8847 14.7504 22.2832 14.2583 22.2832Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_32967">
<rect width="23.9062" height="24.5273" fill="currentColor" transform="translate(2.03564 2.10352)"/>
</clipPath>
</defs>
</svg>

`;

export const PaperplaneCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
