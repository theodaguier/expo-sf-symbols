
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
<g clip-path="url(#clip0_2207_34020)">
<path d="M14.0035 25.9538C20.5426 25.9538 25.9566 20.5281 25.9566 14.0007C25.9566 7.46167 20.5309 2.04761 14.0035 2.04761C7.46448 2.04761 2.05042 7.46167 2.05042 14.0007C2.05042 20.5281 7.4762 25.9538 14.0035 25.9538ZM14.0035 23.9617V4.0398C19.5231 4.0398 23.9527 8.46949 23.9645 14.0007C23.9762 19.532 19.5348 23.9617 14.0035 23.9617Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34020">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.05042 2.04761)"/>
</clipPath>
</defs>
</svg>

`;

export const CircleRighthalfFilledInverse = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
