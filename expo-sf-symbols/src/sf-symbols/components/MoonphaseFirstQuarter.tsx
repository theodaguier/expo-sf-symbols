
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
<g clip-path="url(#clip0_2207_33651)">
<path d="M14.0518 24.1172V4.19531C19.5714 4.19531 24.001 8.62499 24.0128 14.1563C24.0245 19.6875 19.5831 24.1172 14.0518 24.1172Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M14.0517 26.1094C20.5908 26.1094 26.0048 20.6836 26.0048 14.1563C26.0048 7.61719 20.5791 2.20312 14.0517 2.20312C7.51269 2.20312 2.09863 7.61719 2.09863 14.1563C2.09863 20.6836 7.52441 26.1094 14.0517 26.1094ZM14.0517 24.1172V4.19532C19.5713 4.19532 24.0009 8.625 24.0127 14.1563C24.0244 19.6875 19.583 24.1172 14.0517 24.1172Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33651">
<rect width="23.9062" height="24.0117" fill="currentColor" transform="translate(2.09863 2.09766)"/>
</clipPath>
</defs>
</svg>

`;

export const MoonphaseFirstQuarter = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
