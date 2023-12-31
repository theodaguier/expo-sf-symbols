
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
<g clip-path="url(#clip0_2207_33184)">
<path d="M13.9719 25.9502C20.511 25.9502 25.925 20.5361 25.925 13.997C25.925 7.46973 20.4993 2.04395 13.9602 2.04395C7.43286 2.04395 2.0188 7.46973 2.0188 13.997C2.0188 20.5361 7.44458 25.9502 13.9719 25.9502Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.3977 20.4072C9.99927 20.4072 9.74146 20.1142 9.74146 19.6338V9.4502C9.74146 8.27832 10.3508 7.65723 11.5227 7.65723H16.4211C17.593 7.65723 18.2024 8.27832 18.2024 9.4502V19.6338C18.2024 20.1142 17.9446 20.4072 17.5461 20.4072C17.2297 20.4072 17.054 20.2197 16.5032 19.6806L14.0305 17.2549C13.9954 17.2197 13.9485 17.2197 13.9133 17.2549L11.4524 19.6806C10.8899 20.2197 10.7141 20.4072 10.3977 20.4072Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_33184">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.0188 2.03223)"/>
</clipPath>
</defs>
</svg>

`;

export const BookmarkCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
