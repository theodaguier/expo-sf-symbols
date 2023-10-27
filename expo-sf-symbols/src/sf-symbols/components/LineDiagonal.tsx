
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
<g clip-path="url(#clip0_2207_33984)">
<path d="M5.35864 21.9912C4.99536 22.3544 4.99536 22.9521 5.35864 23.3271C5.72192 23.6904 6.3313 23.6904 6.69458 23.3271L23.3001 6.72168C23.6633 6.35839 23.6633 5.74902 23.3001 5.38574C22.9368 5.02246 22.3274 5.02246 21.9641 5.38574L5.35864 21.9912Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33984">
<rect width="18.4863" height="18.5098" fill="currentColor" transform="translate(5.08618 5.08984)"/>
</clipPath>
</defs>
</svg>

`;

export const LineDiagonal = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
