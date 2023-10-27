
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
<g clip-path="url(#clip0_2207_37311)">
<path d="M14.0476 25.9511C20.5867 25.9511 26.0007 20.5254 26.0007 13.998C26.0007 7.45898 20.575 2.04492 14.0359 2.04492C7.50854 2.04492 2.09448 7.45898 2.09448 13.998C2.09448 20.5254 7.52026 25.9511 14.0476 25.9511Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.07102 16.8222C7.7429 16.4941 7.75462 15.9199 8.1179 15.5449L12.8523 10.5059C13.614 9.70898 14.4929 9.70898 15.2547 10.5059L19.989 15.5449C20.364 15.9199 20.3757 16.4941 20.0359 16.8222C19.6609 17.209 19.075 17.209 18.7351 16.8457L14.0593 11.8887L9.3718 16.8457C9.03196 17.209 8.44602 17.209 8.07102 16.8222Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37311">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.09448 2.04492)"/>
</clipPath>
</defs>
</svg>

`;

export const ChevronUpCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
