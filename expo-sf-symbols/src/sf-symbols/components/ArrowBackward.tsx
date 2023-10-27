
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
<g clip-path="url(#clip0_2207_37329)">
<path d="M3.02942 13.8955C3.02942 14.1885 3.15832 14.458 3.3927 14.6807L11.1739 22.4502C11.4083 22.6729 11.6544 22.7783 11.9357 22.7783C12.5099 22.7783 12.9669 22.3565 12.9669 21.7705C12.9669 21.4893 12.8614 21.208 12.6739 21.0322L10.0489 18.3604L5.40833 14.1299L5.16223 14.7041L8.93567 14.9385H23.7599C24.3692 14.9385 24.7911 14.5049 24.7911 13.8955C24.7911 13.2861 24.3692 12.8525 23.7599 12.8525H8.93567L5.16223 13.0869L5.40833 13.6729L10.0489 9.43067L12.6739 6.75879C12.8614 6.57129 12.9669 6.30176 12.9669 6.02051C12.9669 5.43457 12.5099 5.0127 11.9357 5.0127C11.6544 5.0127 11.4083 5.10645 11.1505 5.36426L3.3927 13.1104C3.15832 13.333 3.02942 13.6025 3.02942 13.8955Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37329">
<rect width="21.7617" height="17.7773" fill="currentColor" transform="translate(3.02942 5.0127)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowBackward = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
