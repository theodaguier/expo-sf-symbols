
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
<g clip-path="url(#clip0_2207_37025)">
<path d="M0.0126953 11.2869V9.61109H18.165C20.0752 9.61109 21.083 10.6072 21.083 12.4822V24.6228H19.4072V12.6697C19.4072 11.8025 18.9033 11.2869 18.0479 11.2869H14.3916V24.6228H12.7158V11.2869H0.0126953ZM3.69239 24.611H23.9658C26.4268 24.611 27.6455 23.404 27.6455 20.9899V6.66968C27.6455 4.25562 26.4268 3.03687 23.9658 3.03687H3.69239C1.24317 3.03687 0.0126953 4.25562 0.0126953 6.66968V20.9899C0.0126953 23.404 1.24317 24.611 3.69239 24.611Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37025">
<rect width="27.6328" height="21.5977" fill="currentColor" transform="translate(0.0126953 3.02515)"/>
</clipPath>
</defs>
</svg>

`;

export const AspectratioFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
