
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
<g clip-path="url(#clip0_2207_35346)">
<path d="M2.05042 24.3296C2.05042 25.185 2.5426 25.6772 3.38636 25.6772C3.69104 25.6772 3.98401 25.5835 4.37073 25.3725L9.2926 22.7124V3.29443C9.08167 3.3999 8.84729 3.51709 8.63635 3.63428L3.08167 6.82177C2.37854 7.2085 2.05042 7.77099 2.05042 8.55615V24.3296ZM10.8981 22.4897L16.8043 25.8061C16.9801 25.8999 17.1676 25.9819 17.3434 26.0288V6.9038L11.5543 3.36475C11.3551 3.23584 11.1207 3.14209 10.8981 3.09521V22.4897ZM18.9371 25.9936C19.0543 25.9585 19.1832 25.9116 19.2887 25.8413L25.3942 22.3725C26.0973 21.9858 26.4254 21.4233 26.4254 20.6382V4.85302C26.4254 3.98584 25.9332 3.50537 25.0895 3.50537C24.7848 3.50537 24.4918 3.59912 24.1051 3.81006L18.9371 6.68115V25.9936Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35346">
<rect width="24.375" height="22.9805" fill="currentColor" transform="translate(2.05042 3.09521)"/>
</clipPath>
</defs>
</svg>

`;

export const MapFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
