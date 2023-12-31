
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
<g clip-path="url(#clip0_2207_37030)">
<path d="M9.73218 24.7193H18.5681C21.0173 24.7193 22.2361 23.5005 22.2361 21.0864V6.77783C22.2361 4.36377 21.0173 3.14502 18.5681 3.14502H9.73218C7.28296 3.14502 6.05249 4.35205 6.05249 6.77783V21.0864C6.05249 23.5122 7.28296 24.7193 9.73218 24.7193ZM9.75561 22.8325C8.58374 22.8325 7.93921 22.2114 7.93921 20.9927V6.87158C7.93921 5.65283 8.58374 5.03174 9.75561 5.03174H18.533C19.6931 5.03174 20.3494 5.65283 20.3494 6.87158V20.9927C20.3494 22.2114 19.6931 22.8325 18.533 22.8325H9.75561Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37030">
<rect width="16.1836" height="21.5977" fill="currentColor" transform="translate(6.05249 3.12158)"/>
</clipPath>
</defs>
</svg>

`;

export const RectangleRatio3To4 = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
