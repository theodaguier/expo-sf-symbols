
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
<g clip-path="url(#clip0_2207_34831)">
<path d="M6.70288 24.6524H20.9177C23.3787 24.6524 24.5974 23.4336 24.5974 21.0195V6.71094C24.5974 4.29688 23.3787 3.07812 20.9177 3.07812H6.70288C4.25366 3.07812 3.02319 4.28516 3.02319 6.71094V21.0195C3.02319 23.4453 4.25366 24.6524 6.70288 24.6524Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.8279 15.8164C12.738 15.8047 11.8591 14.9492 11.8591 13.8477C11.8591 12.7578 12.738 11.8906 13.8279 11.8906C14.8943 11.8906 15.7849 12.7578 15.7849 13.8477C15.7849 14.9492 14.8943 15.8281 13.8279 15.8164Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_34831">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.02319 3.05469)"/>
</clipPath>
</defs>
</svg>

`;

export const DieFace1Fill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
