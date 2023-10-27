
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
<g clip-path="url(#clip0_2207_33182)">
<path d="M7.26319 26.1689C7.83741 26.1689 8.17725 25.8408 9.23194 24.8213L13.814 20.3095C13.8726 20.251 13.978 20.251 14.0249 20.3095L18.6069 24.8213C19.6616 25.8408 20.0015 26.1689 20.5757 26.1689C21.3608 26.1689 21.8179 25.6533 21.8179 24.7392V4.39551C21.8179 2.16895 20.7046 1.03223 18.5015 1.03223H9.33741C7.13428 1.03223 6.021 2.16895 6.021 4.39551V24.7392C6.021 25.6533 6.47803 26.1689 7.26319 26.1689Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33182">
<rect width="15.7969" height="25.1836" fill="currentColor" transform="translate(6.021 1.03223)"/>
</clipPath>
</defs>
</svg>

`;

export const BookmarkFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
