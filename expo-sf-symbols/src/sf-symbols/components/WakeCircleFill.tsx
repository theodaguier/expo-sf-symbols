
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
<g clip-path="url(#clip0_2207_33529)">
<path d="M14.0517 26.0664C20.5908 26.0664 26.0048 20.6523 26.0048 14.1132C26.0048 7.58594 20.5791 2.16016 14.04 2.16016C7.51269 2.16016 2.09863 7.58594 2.09863 14.1132C2.09863 20.6523 7.52441 26.0664 14.0517 26.0664Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M6.59863 14.1132C6.59863 10.0352 9.98535 6.64844 14.0634 6.64844C18.1533 6.64844 21.5283 10.0352 21.5283 14.1132C21.5283 18.2031 18.1416 21.5781 14.0517 21.5781C9.98535 21.5781 6.59863 18.2031 6.59863 14.1132ZM8.35644 14.1132C8.35644 17.3007 10.876 19.832 14.0517 19.832C17.2275 19.832 19.7705 17.3007 19.7822 14.1132C19.7822 13.4336 19.665 12.789 19.4424 12.1796H8.69629C8.47363 12.789 8.35644 13.4336 8.35644 14.1132ZM9.58691 10.5742H18.5634C17.5205 9.25 15.8916 8.39453 14.0634 8.39453C12.2353 8.39453 10.6182 9.25 9.58691 10.5742Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_33529">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.09863 2.14844)"/>
</clipPath>
</defs>
</svg>

`;

export const WakeCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
