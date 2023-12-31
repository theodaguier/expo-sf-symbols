
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
<g clip-path="url(#clip0_2207_34617)">
<path d="M8.04492 26.9287C8.50195 26.9287 8.84179 26.6943 9.39257 26.1787L13.6231 22.3115H21.5449C25.0371 22.3115 26.9121 20.3897 26.9121 16.9561V7.97949C26.9121 4.5459 25.0371 2.6123 21.5449 2.6123H6.45117C2.95898 2.6123 1.08398 4.53418 1.08398 7.97949V16.9561C1.08398 20.4014 2.95898 22.3115 6.45117 22.3115H7.00195V25.7217C7.00195 26.4482 7.37695 26.9287 8.04492 26.9287Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.0371 18.1162C9.48633 18.1162 9.13477 17.7764 9.13477 17.2842C9.13477 17.0967 9.15821 16.9209 9.26368 16.6514L12.6504 7.53418C12.8848 6.90137 13.3418 6.58496 13.9981 6.58496C14.6543 6.58496 15.1231 6.90137 15.3574 7.53418L18.7442 16.6514C18.8496 16.9209 18.8731 17.0967 18.8731 17.2842C18.8731 17.7764 18.5215 18.1162 17.9824 18.1162C17.5371 18.1162 17.2324 17.917 17.0332 17.3428L16.1543 14.7764H11.8535L10.9746 17.3428C10.7754 17.917 10.4707 18.1162 10.0371 18.1162ZM12.334 13.3115H15.6738L14.0684 8.64746H13.9395L12.334 13.3115Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_34617">
<rect width="25.8281" height="25.8867" fill="currentColor" transform="translate(1.08398 1.04199)"/>
</clipPath>
</defs>
</svg>

`;

export const CharacterBubbleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
