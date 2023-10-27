
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
<g clip-path="url(#clip0_2207_33514)">
<path d="M4.41089 12.6714C4.21167 12.8823 4.09448 13.1401 4.09448 13.4331C4.09448 14.0425 4.55151 14.5112 5.16089 14.5112C5.46557 14.5112 5.7351 14.3823 5.9226 14.1948L14.8992 5.03076H13.6453L22.6218 14.1948C22.8211 14.3823 23.0906 14.5112 23.3836 14.5112C23.9929 14.5112 24.45 14.0425 24.45 13.4331C24.45 13.1401 24.3328 12.8823 24.1336 12.6714L15.0633 3.39014C14.864 3.16748 14.5711 3.05029 14.2781 3.05029C13.9734 3.05029 13.7039 3.16748 13.4812 3.39014L4.41089 12.6714Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33514">
<rect width="20.3555" height="22.043" fill="currentColor" transform="translate(4.09448 3.05029)"/>
</clipPath>
</defs>
</svg>

`;

export const Control = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
