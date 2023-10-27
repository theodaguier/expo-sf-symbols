
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
<g clip-path="url(#clip0_2207_35963)">
<path d="M5.2959 25.3427H23.46C25.4522 25.3427 26.6592 23.9599 26.6592 22.1669C26.6592 21.6162 26.4951 21.0419 26.2022 20.5263L17.1084 4.68262C16.499 3.61621 15.4561 3.07715 14.3779 3.07715C13.2998 3.07715 12.2451 3.61621 11.6475 4.68262L2.55371 20.5263C2.2373 21.0537 2.09668 21.6162 2.09668 22.1669C2.09668 23.9599 3.30371 25.3427 5.2959 25.3427Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M6.76062 21.9795C6.26844 21.9795 5.98718 21.5342 6.245 21.0655L13.8505 7.78809C14.0966 7.34277 14.6474 7.34277 14.8935 7.78809L22.4989 21.0655C22.745 21.5108 22.4755 21.9795 21.9833 21.9795H6.76062ZM9.29187 20.0811H19.4521C19.581 20.0811 19.663 19.9522 19.5927 19.8116L14.5185 10.9639C14.4599 10.835 14.2958 10.835 14.2372 10.9639L9.15125 19.7999C9.08094 19.9405 9.16297 20.0811 9.29187 20.0811Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_35963">
<rect width="24.5625" height="22.3945" fill="currentColor" transform="translate(2.09668 3.07715)"/>
</clipPath>
</defs>
</svg>

`;

export const HazardsignFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
