
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
<g clip-path="url(#clip0_2207_37031)">
<path d="M9.73438 24.7193H18.5703C21.0195 24.7193 22.2383 23.5005 22.2383 21.0864V6.77783C22.2383 4.36377 21.0195 3.14502 18.5703 3.14502H9.73438C7.28516 3.14502 6.05469 4.35205 6.05469 6.77783V21.0864C6.05469 23.5122 7.28516 24.7193 9.73438 24.7193Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37031">
<rect width="16.1836" height="21.5977" fill="currentColor" transform="translate(6.05469 3.12158)"/>
</clipPath>
</defs>
</svg>

`;

export const RectangleRatio3To4Fill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
