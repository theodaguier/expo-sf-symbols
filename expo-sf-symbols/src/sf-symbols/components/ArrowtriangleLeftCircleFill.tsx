
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
<g clip-path="url(#clip0_2207_37579)">
<path d="M14.0224 25.93C20.5615 25.93 25.9755 20.5043 25.9755 13.9769C25.9755 7.43786 20.5498 2.0238 14.0107 2.0238C7.4834 2.0238 2.06934 7.43786 2.06934 13.9769C2.06934 20.5043 7.49512 25.93 14.0224 25.93Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.17091 14.6332C8.66701 14.3402 8.67873 13.6254 9.17091 13.3324L16.0615 9.26598C16.5771 8.94957 17.2685 9.19567 17.2685 9.7816V18.184C17.2685 18.7582 16.624 19.0394 16.0615 18.6996L9.17091 14.6332Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37579">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.06934 2.0238)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowtriangleLeftCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
