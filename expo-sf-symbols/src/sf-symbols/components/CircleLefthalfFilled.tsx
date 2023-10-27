
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
<g clip-path="url(#clip0_2207_34017)">
<path d="M13.9846 25.9538C20.5237 25.9538 25.9377 20.5281 25.9377 14.0007C25.9377 7.46167 20.512 2.04761 13.9846 2.04761C7.44555 2.04761 2.03149 7.46167 2.03149 14.0007C2.03149 20.5281 7.45727 25.9538 13.9846 25.9538ZM13.9846 23.9617V4.0398C19.5042 4.0398 23.9338 8.46949 23.9456 14.0007C23.9573 19.532 19.5159 23.9617 13.9846 23.9617Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34017">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.03149 2.04761)"/>
</clipPath>
</defs>
</svg>

`;

export const CircleLefthalfFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
