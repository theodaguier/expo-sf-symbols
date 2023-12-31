
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
<g clip-path="url(#clip0_2207_33985)">
<path d="M5.3606 23.5319C5.72388 23.8952 6.33325 23.8952 6.69653 23.5319L18.3332 11.9187L20.5129 14.1101C20.9699 14.5554 21.5676 14.2976 21.7434 13.6413L23.7942 6.04756C23.9465 5.4499 23.4309 4.95771 22.8567 5.12178L15.2746 7.16083C14.6184 7.33662 14.3489 7.92255 14.8059 8.37958L17.009 10.5827L5.3606 22.196C4.99731 22.5592 4.99731 23.1686 5.3606 23.5319Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33985">
<rect width="18.7331" height="18.9896" fill="currentColor" transform="translate(5.08813 5.08984)"/>
</clipPath>
</defs>
</svg>

`;

export const LineDiagonalArrow = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
