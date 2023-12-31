
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
<g clip-path="url(#clip0_2207_37035)">
<path d="M10.7427 24.7193H17.481C19.9419 24.7193 21.1607 23.5005 21.1607 21.0864V6.77783C21.1607 4.36377 19.9419 3.14502 17.481 3.14502H10.7427C8.29346 3.14502 7.06299 4.35205 7.06299 6.77783V21.0864C7.06299 23.5122 8.29346 24.7193 10.7427 24.7193Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37035">
<rect width="14.0977" height="21.5977" fill="currentColor" transform="translate(7.06299 3.12158)"/>
</clipPath>
</defs>
</svg>

`;

export const RectangleRatio9To16Fill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
