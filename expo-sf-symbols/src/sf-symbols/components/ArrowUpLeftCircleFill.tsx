
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
<g clip-path="url(#clip0_2207_37358)">
<path d="M14.0078 25.9259C20.5469 25.9259 25.9609 20.5002 25.9609 13.9728C25.9609 7.43371 20.5352 2.01965 13.9961 2.01965C7.46875 2.01965 2.05469 7.43371 2.05469 13.9728C2.05469 20.5002 7.48047 25.9259 14.0078 25.9259Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.2109 16.9728C9.6836 16.9728 9.32031 16.5627 9.32031 16.0002V10.3048C9.32031 9.58997 9.71875 9.30872 10.3399 9.30872H16.0586C16.6328 9.30872 16.9961 9.66028 16.9961 10.1993C16.9961 10.7267 16.6211 11.0782 16.0352 11.0782H13.8555L12.0625 10.8907L13.9492 12.6486L18.3906 17.0783C18.5664 17.2541 18.6836 17.5002 18.6836 17.7345C18.6836 18.2853 18.3203 18.6369 17.793 18.6369C17.5 18.6369 17.2656 18.5314 17.0899 18.3556L12.6719 13.9259L10.9258 12.0627L11.1016 13.9494V16.0236C11.1016 16.5978 10.75 16.9728 10.2109 16.9728Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37358">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.05469 2.01965)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowUpLeftCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
