
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
<g clip-path="url(#clip0_2207_33170)">
<path d="M7.22754 25.3597L20.0479 27.6214C22.3447 28.0316 23.7393 26.7542 23.7393 24.2347V10.0902C23.7393 7.79331 22.5674 6.96128 20.2822 6.56284L7.83692 4.35972C6.12598 4.06675 5.0127 4.99253 5.0127 6.68003V22.805C5.0127 24.2581 5.75098 25.1019 7.22754 25.3597ZM9.33692 10.8636C8.93848 10.7933 8.70411 10.4886 8.70411 10.0667C8.70411 9.56284 9.09082 9.23472 9.65332 9.32847L18.9111 10.9456C19.333 11.0394 19.5674 11.2737 19.5674 11.7425C19.5674 12.2464 19.2158 12.598 18.6416 12.5042L9.33692 10.8636ZM9.33692 15.5745C8.93848 15.5042 8.70411 15.1995 8.70411 14.7777C8.70411 14.2855 9.09082 13.9573 9.65332 14.0511L18.9111 15.6683C19.333 15.7503 19.5674 15.9964 19.5674 16.4534C19.5674 16.9691 19.2158 17.3206 18.6416 17.2269L9.33692 15.5745ZM10.4268 3.19956L20.5635 4.98081C21.5596 5.16831 22.3916 5.43784 23.0713 5.81284V4.89878C23.0713 2.43784 21.4189 1.25425 18.6416 1.74643L10.4268 3.19956Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33170">
<rect width="18.7266" height="26.6004" fill="currentColor" transform="translate(5.0127 1.09668)"/>
</clipPath>
</defs>
</svg>

`;

export const MenucardFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
