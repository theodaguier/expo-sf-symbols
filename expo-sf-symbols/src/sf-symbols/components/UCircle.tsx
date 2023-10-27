
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
<g clip-path="url(#clip0_2207_37703)">
<path d="M14.0035 26.0527C20.5426 26.0527 25.9566 20.627 25.9566 14.0996C25.9566 7.56054 20.5309 2.14648 13.9918 2.14648C7.46447 2.14648 2.05042 7.56054 2.05042 14.0996C2.05042 20.627 7.4762 26.0527 14.0035 26.0527ZM14.0035 24.0606C8.4723 24.0606 4.05433 19.6309 4.05433 14.0996C4.05433 8.56836 8.46057 4.13867 13.9918 4.13867C19.5231 4.13867 23.9645 8.56836 23.9645 14.0996C23.9645 19.6309 19.5348 24.0606 14.0035 24.0606Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.9918 19.5957C16.734 19.5957 18.5738 18.0137 18.5738 15.5527V9.56446C18.5738 8.90821 18.234 8.50977 17.6246 8.50977C17.0504 8.50977 16.6988 8.90821 16.6988 9.56446V15.377C16.6988 17.0176 15.6324 18.0488 13.9918 18.0488C12.3512 18.0488 11.2731 17.0176 11.2731 15.377V9.56446C11.2731 8.90821 10.9332 8.50977 10.3239 8.50977C9.74963 8.50977 9.40979 8.90821 9.40979 9.56446V15.5527C9.40979 18.0137 11.2496 19.5957 13.9918 19.5957Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37703">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.05042 2.14648)"/>
</clipPath>
</defs>
</svg>

`;

export const UCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
