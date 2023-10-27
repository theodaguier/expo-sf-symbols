
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
<g clip-path="url(#clip0_2207_34811)">
<path d="M21.2177 22.5029L22.4599 21.2608L6.83887 5.63965L5.59668 6.88184L21.2177 22.5029ZM14.0224 26.0068C20.5615 26.0068 25.9755 20.5811 25.9755 14.0537C25.9755 7.51465 20.5498 2.10059 14.0107 2.10059C7.4834 2.10059 2.06934 7.51465 2.06934 14.0537C2.06934 20.5811 7.49512 26.0068 14.0224 26.0068ZM14.0224 24.0147C8.49122 24.0147 4.07325 19.585 4.07325 14.0537C4.07325 8.52247 8.4795 4.09278 14.0107 4.09278C19.542 4.09278 23.9834 8.52247 23.9834 14.0537C23.9834 19.585 19.5537 24.0147 14.0224 24.0147Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34811">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.06934 2.10059)"/>
</clipPath>
</defs>
</svg>

`;

export const Nosign = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
