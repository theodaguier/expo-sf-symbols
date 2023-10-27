
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
<g clip-path="url(#clip0_2207_34485)">
<path d="M6.73438 24.7383H20.9492C23.4102 24.7383 24.6289 23.5195 24.6289 21.1054V6.79688C24.6289 4.38281 23.4102 3.16406 20.9492 3.16406H6.73438C4.28516 3.16406 3.05469 4.37109 3.05469 6.79688V21.1054C3.05469 23.5312 4.28516 24.7383 6.73438 24.7383Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.3516 20.2031L7.76563 16.5937C7.02735 15.8672 7.02735 15.1523 7.77735 14.4023L13.5547 8.55468C14.0117 8.08593 14.3399 7.74609 15.0664 7.74609H17.4336C17.9727 7.74609 18.2891 7.98046 18.6641 8.34374L19.707 9.375C20.082 9.75 20.2227 10.0664 20.2227 10.6172V12.8789C20.2227 13.6289 19.8711 13.9453 19.4141 14.4023L13.5664 20.1914C12.8164 20.9414 12.0899 20.9297 11.3516 20.2031ZM16.0039 11.9648C16.332 12.3047 16.8711 12.3047 17.2109 11.9531C17.5508 11.6133 17.5508 11.0742 17.2109 10.7461C16.8711 10.4062 16.332 10.4062 16.0039 10.7461C15.6641 11.0859 15.6641 11.6367 16.0039 11.9648Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_34485">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.05469 3.14062)"/>
</clipPath>
</defs>
</svg>

`;

export const TagSquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
