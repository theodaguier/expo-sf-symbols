
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
<g clip-path="url(#clip0_2207_33106)">
<path d="M26.295 13.7686C26.295 13.3702 26.1544 12.9365 25.6974 12.5029L16.4513 3.85449C15.8302 3.26855 15.4435 3.02246 14.8692 3.02246C14.0489 3.02246 13.463 3.66699 13.463 4.45215V9.15137H3.72473C2.02551 9.15137 1.02942 10.1123 1.02942 11.7881V15.7608C1.02942 17.4366 2.02551 18.3975 3.72473 18.3975H13.463V23.1436C13.463 23.9287 14.0489 24.5147 14.8458 24.5147C15.42 24.5147 15.8888 24.2803 16.4513 23.753L25.6974 15.0225C26.1427 14.6006 26.295 14.1553 26.295 13.7686Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33106">
<rect width="25.2656" height="21.5039" fill="currentColor" transform="translate(1.02942 3.02246)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowshapeForwardFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
