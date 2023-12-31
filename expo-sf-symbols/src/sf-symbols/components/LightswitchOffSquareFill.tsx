
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
<g clip-path="url(#clip0_2207_35000)">
<path d="M6.7301 24.6875H20.9449C23.4059 24.6875 24.6246 23.4687 24.6246 21.0546V6.74609C24.6246 4.33203 23.4059 3.11328 20.9449 3.11328H6.7301C4.28088 3.11328 3.05042 4.32031 3.05042 6.74609V21.0546C3.05042 23.4804 4.28088 24.6875 6.7301 24.6875Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.6207 7.58984H17.0543C17.5699 7.58984 17.9449 7.96484 17.9449 8.49218V19.3086C17.9449 19.8242 17.5699 20.1992 17.0543 20.1992H10.6207C10.1051 20.1992 9.7301 19.8242 9.7301 19.3086V8.49218C9.7301 7.96484 10.1051 7.58984 10.6207 7.58984ZM11.4996 15.0195C11.2653 15.0195 11.1012 15.1836 11.1012 15.4296V18.4179C11.1012 18.664 11.2653 18.8281 11.4996 18.8281H16.1754C16.4098 18.8281 16.5738 18.664 16.5738 18.4179V15.4296C16.5738 15.1836 16.4098 15.0195 16.1754 15.0195H11.4996Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_35000">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.05042 3.08984)"/>
</clipPath>
</defs>
</svg>

`;

export const LightswitchOffSquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
