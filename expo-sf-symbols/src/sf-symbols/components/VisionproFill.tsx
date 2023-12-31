
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="34" height="29" viewBox="0 0 34 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_35526)">
<path d="M16.6824 19.8437C18.9207 19.8437 21.2527 23.6172 25.7058 23.6172C30.03 23.6172 33.2879 19.6914 33.2879 14.5352C33.2879 6.08594 25.8464 5.14844 16.6824 5.14844C7.5066 5.14844 0.0651855 6.09766 0.0651855 14.5352C0.0651855 19.6914 3.323 23.6172 7.64722 23.6172C12.1004 23.6172 14.4324 19.8437 16.6824 19.8437Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35526">
<rect width="33.2227" height="18.9023" fill="currentColor" transform="translate(0.0651855 5.14844)"/>
</clipPath>
</defs>
</svg>

`;

export const VisionproFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
