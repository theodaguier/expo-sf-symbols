
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="29" height="28" viewBox="0 0 29 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_37931)">
<path d="M14.0476 25.9062C20.5867 25.9062 26.0007 20.4805 26.0007 13.9531C26.0007 7.41406 20.575 2 14.0359 2C7.50854 2 2.09448 7.41406 2.09448 13.9531C2.09448 20.4805 7.52026 25.9062 14.0476 25.9062ZM14.0476 23.9141C8.51636 23.9141 4.09839 19.4844 4.09839 13.9531C4.09839 8.42188 8.50464 3.99219 14.0359 3.99219C19.5672 3.99219 24.0086 8.42188 24.0086 13.9531C24.0086 19.4844 19.5789 23.9141 14.0476 23.9141Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M14.6453 19.5312C15.2429 19.5312 15.5828 19.1328 15.5828 18.4766V9.42969C15.5828 8.75 15.2195 8.375 14.5984 8.375C14.1648 8.375 13.8601 8.49219 13.3562 8.83203L11.2468 10.2617C10.989 10.4375 10.8835 10.625 10.8835 10.918C10.8835 11.2812 11.1765 11.6211 11.5515 11.6211C11.7273 11.6211 11.8562 11.5859 12.1257 11.4102L13.6375 10.4141H13.7195V18.4766C13.7195 19.1328 14.0593 19.5312 14.6453 19.5312Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37931">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.09448 2)"/>
</clipPath>
</defs>
</svg>

`;

export const 1Circle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
