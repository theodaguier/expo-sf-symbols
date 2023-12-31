
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
<g clip-path="url(#clip0_2207_33539)">
<path d="M13.9992 26.0195C20.5383 26.0195 25.9523 20.5938 25.9523 14.0664C25.9523 7.52734 20.5266 2.11328 13.9875 2.11328C7.4602 2.11328 2.04614 7.52734 2.04614 14.0664C2.04614 20.5938 7.47192 26.0195 13.9992 26.0195ZM13.9992 24.0274C8.46802 24.0274 4.05005 19.5977 4.05005 14.0664C4.05005 8.53516 8.4563 4.10547 13.9875 4.10547C19.5188 4.10547 23.9602 8.53516 23.9602 14.0664C23.9602 19.5977 19.5305 24.0274 13.9992 24.0274Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33539">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.04614 2.11328)"/>
</clipPath>
</defs>
</svg>

`;

export const Poweroff = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
