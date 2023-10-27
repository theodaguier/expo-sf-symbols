
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
<g clip-path="url(#clip0_2207_33525)">
<path d="M13.9804 26.0351C20.5195 26.0351 25.9335 20.6094 25.9335 14.082C25.9335 7.54297 20.5078 2.12891 13.9687 2.12891C7.4414 2.12891 2.02734 7.54297 2.02734 14.082C2.02734 20.6094 7.45312 26.0351 13.9804 26.0351ZM13.9804 24.043C8.44922 24.043 4.03125 19.6133 4.03125 14.082C4.03125 8.55079 8.4375 4.1211 13.9687 4.1211C19.5 4.1211 23.9414 8.55079 23.9414 14.082C23.9414 19.6133 19.5117 24.043 13.9804 24.043Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M6.75 14.082C6.75 18.0312 10.0313 21.3125 13.9804 21.3125C17.9414 21.3125 21.2109 18.0312 21.2109 14.082C21.2109 10.1211 17.9296 6.85156 13.9687 6.85156C10.0312 6.85156 6.75 10.1211 6.75 14.082ZM8.4375 14.082C8.4375 10.9883 10.8867 8.52734 13.9687 8.52734C17.0507 8.52734 19.5234 10.9883 19.5351 14.082C19.5351 14.7383 19.4179 15.3711 19.207 15.9687H8.76562C8.55468 15.3711 8.4375 14.7383 8.4375 14.082ZM9.63281 17.5156H18.3515C17.332 18.8047 15.7617 19.6367 13.9804 19.6367C12.1992 19.6367 10.6289 18.8047 9.63281 17.5156Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33525">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.02734 2.12891)"/>
</clipPath>
</defs>
</svg>

`;

export const SleepCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
