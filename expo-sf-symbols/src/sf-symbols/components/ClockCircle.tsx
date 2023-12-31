
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="28" height="29" viewBox="0 0 28 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_36699)">
<path d="M13.9614 25.9553C20.5005 25.9553 25.9145 20.5296 25.9145 14.0022C25.9145 7.46313 20.4888 2.04907 13.9497 2.04907C7.42236 2.04907 2.0083 7.46313 2.0083 14.0022C2.0083 20.5296 7.43408 25.9553 13.9614 25.9553ZM13.9614 23.9632C8.43018 23.9632 4.01221 19.5335 4.01221 14.0022C4.01221 8.47095 8.41846 4.04126 13.9497 4.04126C19.481 4.04126 23.9224 8.47095 23.9224 14.0022C23.9224 19.5335 19.4927 23.9632 13.9614 23.9632Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.7622 14.7991C10.4341 14.7991 10.188 14.5647 10.188 14.2366C10.188 13.9085 10.4341 13.6741 10.7622 13.6741H13.3872V10.0999C13.3872 9.78345 13.6333 9.53735 13.9497 9.53735C14.2778 9.53735 14.5356 9.78345 14.5356 10.0999V14.2366C14.5356 14.553 14.2661 14.7991 13.9497 14.7991H10.7622ZM13.9614 20.2952C17.395 20.2952 20.2544 17.4358 20.2544 14.0022C20.2544 10.5686 17.395 7.70923 13.9497 7.70923C10.5161 7.70923 7.66846 10.5686 7.66846 14.0022C7.66846 17.4358 10.5278 20.2952 13.9614 20.2952Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36699">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.0083 2.04907)"/>
</clipPath>
</defs>
</svg>

`;

export const ClockCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
