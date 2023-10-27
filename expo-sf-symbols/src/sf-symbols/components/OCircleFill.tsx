
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
<g clip-path="url(#clip0_2207_37680)">
<path d="M14.0498 26.0068C20.5889 26.0068 26.0029 20.5811 26.0029 14.0537C26.0029 7.51465 20.5772 2.10059 14.0381 2.10059C7.51074 2.10059 2.09668 7.51465 2.09668 14.0537C2.09668 20.5811 7.52246 26.0068 14.0498 26.0068Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M14.0498 19.7256C10.9678 19.7256 8.82324 17.3584 8.82324 13.9483C8.82324 10.5264 10.9678 8.15918 14.0498 8.15918C17.1436 8.15918 19.2881 10.5264 19.2881 13.9483C19.2881 17.3584 17.1436 19.7256 14.0498 19.7256ZM14.0498 18.2022C16.042 18.2022 17.3428 16.5147 17.3428 13.9483C17.3428 11.3701 16.042 9.68262 14.0498 9.68262C12.0576 9.68262 10.7568 11.3701 10.7568 13.9483C10.7568 16.5147 12.0576 18.2022 14.0498 18.2022Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37680">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.09668 2.10059)"/>
</clipPath>
</defs>
</svg>

`;

export const OCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
