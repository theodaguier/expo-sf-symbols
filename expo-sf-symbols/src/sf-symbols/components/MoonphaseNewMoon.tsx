
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
<g clip-path="url(#clip0_2207_33649)">
<path d="M13.9636 26.0058C20.5027 26.0058 25.9167 20.5801 25.9167 14.0527C25.9167 7.51367 20.491 2.09961 13.9519 2.09961C7.42456 2.09961 2.0105 7.51367 2.0105 14.0527C2.0105 20.5801 7.43628 26.0058 13.9636 26.0058Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33649">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.0105 2.09961)"/>
</clipPath>
</defs>
</svg>

`;

export const MoonphaseNewMoon = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
