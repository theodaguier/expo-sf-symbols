
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
<g clip-path="url(#clip0_2207_34002)">
<path d="M14.0202 25.9523C20.5593 25.9523 25.9733 20.5266 25.9733 13.9992C25.9733 7.4602 20.5476 2.04614 14.0085 2.04614C7.4812 2.04614 2.06714 7.4602 2.06714 13.9992C2.06714 20.5266 7.49292 25.9523 14.0202 25.9523Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34002">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.06714 2.04614)"/>
</clipPath>
</defs>
</svg>

`;

export const CircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
