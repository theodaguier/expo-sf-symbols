
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
<g clip-path="url(#clip0_2207_34093)">
<path d="M5.69654 21.2812H17.4621C19.8996 21.2812 21.1301 20.0625 21.1301 17.6484V5.78906C21.1301 3.375 19.8996 2.15625 17.4621 2.15625H5.69654C3.2356 2.15625 2.01685 3.375 2.01685 5.78906V17.6484C2.01685 20.0625 3.2356 21.2812 5.69654 21.2812ZM5.71997 19.3945C4.5481 19.3945 3.90357 18.7617 3.90357 17.543V5.89453C3.90357 4.67578 4.5481 4.04297 5.71997 4.04297H17.427C18.5871 4.04297 19.2434 4.67578 19.2434 5.89453V17.543C19.2434 18.7617 18.5871 19.3945 17.427 19.3945H5.71997Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.3801 26.707H23.1457C25.5832 26.707 26.8137 25.4883 26.8137 23.0742V11.2148C26.8137 8.80078 25.5832 7.58203 23.1457 7.58203H11.3801C8.91919 7.58203 7.70044 8.78906 7.70044 11.2148V23.0742C7.70044 25.4883 8.91919 26.707 11.3801 26.707Z" fill="currentColor"/>
<path d="M11.3801 26.707H23.1457C25.5832 26.707 26.8137 25.4883 26.8137 23.0742V11.2148C26.8137 8.80078 25.5832 7.58203 23.1457 7.58203H11.3801C8.91919 7.58203 7.70044 8.78906 7.70044 11.2148V23.0742C7.70044 25.4883 8.91919 26.707 11.3801 26.707Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34093">
<rect width="24.7969" height="24.5742" fill="currentColor" transform="translate(2.01685 2.13281)"/>
</clipPath>
</defs>
</svg>

`;

export const SquareFilledOnSquare = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
