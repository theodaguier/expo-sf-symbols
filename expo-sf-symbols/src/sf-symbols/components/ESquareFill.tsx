
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
<g clip-path="url(#clip0_2207_37642)">
<path d="M6.74268 24.6565H20.9575C23.4185 24.6565 24.6372 23.4377 24.6372 21.0236V6.71509C24.6372 4.30103 23.4185 3.08228 20.9575 3.08228H6.74268C4.29346 3.08228 3.06299 4.28931 3.06299 6.71509V21.0236C3.06299 23.4494 4.29346 24.6565 6.74268 24.6565Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.0786 19.2424C10.4458 19.2424 10.1294 18.8088 10.1294 18.1526V9.32837C10.1294 8.67212 10.4458 8.23853 11.0786 8.23853H16.7974C17.2661 8.23853 17.5942 8.51978 17.5942 9.02368C17.5942 9.50415 17.2661 9.82056 16.7974 9.82056H12.063V12.9026H16.481C16.9497 12.9026 17.2778 13.1721 17.2778 13.676C17.2778 14.1447 16.9497 14.4143 16.481 14.4143H12.063V17.6604H16.7974C17.2661 17.6604 17.5942 17.9533 17.5942 18.4572C17.5942 18.9377 17.2661 19.2424 16.7974 19.2424H11.0786Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37642">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.06299 3.05884)"/>
</clipPath>
</defs>
</svg>

`;

export const ESquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
