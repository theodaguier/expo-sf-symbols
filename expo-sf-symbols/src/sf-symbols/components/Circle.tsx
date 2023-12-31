
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
<g clip-path="url(#clip0_2207_34001)">
<path d="M13.9636 25.9523C20.5027 25.9523 25.9167 20.5266 25.9167 13.9992C25.9167 7.4602 20.491 2.04614 13.9519 2.04614C7.42456 2.04614 2.0105 7.4602 2.0105 13.9992C2.0105 20.5266 7.43628 25.9523 13.9636 25.9523ZM13.9636 23.9602C8.43238 23.9602 4.01441 19.5305 4.01441 13.9992C4.01441 8.46802 8.42066 4.03833 13.9519 4.03833C19.4832 4.03833 23.9246 8.46802 23.9246 13.9992C23.9246 19.5305 19.4949 23.9602 13.9636 23.9602Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34001">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.0105 2.04614)"/>
</clipPath>
</defs>
</svg>

`;

export const Circle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
