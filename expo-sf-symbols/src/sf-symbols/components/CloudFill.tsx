
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
<g clip-path="url(#clip0_2207_33695)">
<path d="M5.78833 23.5882H21.0578C25.007 23.5882 28.0539 20.5999 28.0539 16.7796C28.0539 12.9006 24.8899 10.0295 20.6828 10.0413C19.1359 6.93579 16.2649 5.04907 12.7727 5.04907C8.19067 5.04907 4.37036 8.63501 3.98364 13.2405C1.65161 13.8967 0.0461426 15.8889 0.0461426 18.3733C0.0461426 21.4319 2.3313 23.5882 5.78833 23.5882Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33695">
<rect width="28.0078" height="18.7148" fill="currentColor" transform="translate(0.0461426 5.04907)"/>
</clipPath>
</defs>
</svg>

`;

export const CloudFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
