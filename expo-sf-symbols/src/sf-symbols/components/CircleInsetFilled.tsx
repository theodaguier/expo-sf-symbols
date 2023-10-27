
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
<g clip-path="url(#clip0_2207_34025)">
<path d="M13.9825 25.9538C20.5216 25.9538 25.9356 20.5281 25.9356 14.0007C25.9356 7.46167 20.5099 2.04761 13.9708 2.04761C7.44348 2.04761 2.02942 7.46167 2.02942 14.0007C2.02942 20.5281 7.4552 25.9538 13.9825 25.9538ZM13.9825 23.9617C8.4513 23.9617 4.03333 19.532 4.03333 14.0007C4.03333 8.46949 8.43958 4.0398 13.9708 4.0398C19.5021 4.0398 23.9435 8.46949 23.9435 14.0007C23.9435 19.532 19.5138 23.9617 13.9825 23.9617Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.9591 22.1804C18.5177 22.1804 22.1505 18.5359 22.1388 13.989C22.1271 9.45386 18.4942 5.80933 13.9474 5.80933C9.40051 5.80933 5.79114 9.44214 5.79114 13.989C5.79114 18.5476 9.41223 22.1804 13.9591 22.1804Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34025">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.02942 2.04761)"/>
</clipPath>
</defs>
</svg>

`;

export const CircleInsetFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
