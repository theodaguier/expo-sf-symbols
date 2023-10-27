
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
<g clip-path="url(#clip0_2207_35516)">
<path d="M3.75537 24.6438H24.0288C26.4898 24.6438 27.7085 23.425 27.7085 21.0109V6.70239C27.7085 4.28833 26.4898 3.06958 24.0288 3.06958H3.75537C1.30615 3.06958 0.0756836 4.27661 0.0756836 6.70239V21.0109C0.0756836 23.4367 1.30615 24.6438 3.75537 24.6438Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.8921 19.8508C10.5874 19.8508 7.89209 17.1672 7.89209 13.8391C7.89209 10.5344 10.5874 7.85083 13.8921 7.85083C17.1968 7.85083 19.9038 10.5344 19.9038 13.8391C19.9038 17.1672 17.1968 19.8508 13.8921 19.8508Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_35516">
<rect width="27.6328" height="21.5977" fill="currentColor" transform="translate(0.0756836 3.04614)"/>
</clipPath>
</defs>
</svg>

`;

export const CircleFilledIpadLandscapeFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
