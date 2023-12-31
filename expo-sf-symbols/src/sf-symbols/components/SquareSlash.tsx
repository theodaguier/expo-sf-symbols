
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
<g clip-path="url(#clip0_2207_34057)">
<path d="M7.24023 25.187H21.4668C23.916 25.187 25.1465 23.9683 25.1465 21.5542V7.2456C25.1465 4.83154 23.916 3.61279 21.4668 3.61279H7.24023C4.80273 3.61279 3.57227 4.81982 3.57227 7.2456V21.5542C3.57227 23.98 4.80273 25.187 7.24023 25.187ZM7.27539 23.3003C6.10352 23.3003 5.45898 22.6792 5.45898 21.4604V7.33935C5.45898 6.1206 6.10352 5.49951 7.27539 5.49951H21.4317C22.5918 5.49951 23.2598 6.1206 23.2598 7.33935V21.4604C23.2598 22.6792 22.5918 23.3003 21.4317 23.3003H7.27539Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M23.7285 26.9683C24.6309 27.8472 26.084 27.8589 26.9512 26.9448C27.8301 26.0542 27.8184 24.6362 26.9395 23.7573L4.97852 1.79639C4.09961 0.917488 2.6582 0.905769 1.75586 1.79639C0.876953 2.66358 0.876953 4.14014 1.75586 5.00733L23.7285 26.9683Z" fill="currentColor"/>
<path d="M24.7012 25.9956C25.0528 26.3472 25.6387 26.3472 25.9785 25.9956C26.3301 25.644 26.3301 25.0698 25.9785 24.7183L4.01758 2.76906C3.66602 2.4175 3.08008 2.40578 2.72852 2.76906C2.37695 3.1089 2.37695 3.69484 2.72852 4.0464L24.7012 25.9956Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34057">
<rect width="26.5078" height="26.5108" fill="currentColor" transform="translate(1.09668 1.13281)"/>
</clipPath>
</defs>
</svg>

`;

export const SquareSlash = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
