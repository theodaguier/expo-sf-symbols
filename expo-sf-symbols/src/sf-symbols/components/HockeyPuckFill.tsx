
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
<g clip-path="url(#clip0_2207_33474)">
<path d="M14.052 16.002C20.8137 16.002 26.1106 13.5645 26.1106 10.459C26.1106 7.45899 20.8137 5.08008 14.052 5.08008C7.30201 5.08008 2.01685 7.45899 2.01685 10.459C2.01685 13.5645 7.30201 16.002 14.052 16.002ZM14.052 23.502C20.8606 23.502 26.1106 20.4551 26.1106 16.7168V13.9629C23.802 16.2481 19.1848 17.6074 14.052 17.6074C8.95435 17.6074 4.33716 16.2598 2.01685 13.9629V16.7168C2.01685 20.4551 7.25513 23.502 14.052 23.502Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33474">
<rect width="24.0938" height="18.4336" fill="currentColor" transform="translate(2.01685 5.08008)"/>
</clipPath>
</defs>
</svg>

`;

export const HockeyPuckFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
