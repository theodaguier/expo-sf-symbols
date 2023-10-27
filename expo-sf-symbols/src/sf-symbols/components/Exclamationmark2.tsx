
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
<g clip-path="url(#clip0_2207_37179)">
<path d="M18.3935 19.0459C19.0146 19.0459 19.4365 18.6357 19.4482 18.0029L19.5537 4.35058C19.5537 3.68262 19.0146 3.22559 18.3818 3.22559C17.7607 3.22559 17.21 3.68262 17.21 4.35058L17.3389 18.0029C17.3506 18.6357 17.7842 19.0459 18.3935 19.0459ZM18.3818 25.5029C19.3193 25.5029 20.0576 24.7529 20.0576 23.8388C20.0576 22.9131 19.3193 22.1748 18.3818 22.1748C17.4678 22.1748 16.7178 22.9131 16.7178 23.8388C16.7178 24.7529 17.4678 25.5029 18.3818 25.5029Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.74512 19.0459C10.3662 19.0459 10.7881 18.6357 10.7998 18.0029L10.9053 4.35058C10.9053 3.68262 10.3662 3.22559 9.7334 3.22559C9.10059 3.22559 8.56152 3.68262 8.56152 4.35058L8.69043 18.0029C8.70215 18.6357 9.12403 19.0459 9.74512 19.0459ZM9.7334 25.5029C10.6592 25.5029 11.3975 24.7529 11.3975 23.8388C11.3975 22.9131 10.6592 22.1748 9.7334 22.1748C8.81934 22.1748 8.06934 22.9131 8.06934 23.8388C8.06934 24.7529 8.81934 25.5029 9.7334 25.5029Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37179">
<rect width="11.9883" height="22.4414" fill="currentColor" transform="translate(8.06934 3.06152)"/>
</clipPath>
</defs>
</svg>

`;

export const Exclamationmark2 = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
