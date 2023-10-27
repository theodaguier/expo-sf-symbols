
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
<g clip-path="url(#clip0_2207_37310)">
<path d="M14.0454 25.9511C20.5845 25.9511 25.9985 20.5254 25.9985 13.998C25.9985 7.45898 20.5728 2.04492 14.0337 2.04492C7.50634 2.04492 2.09229 7.45898 2.09229 13.998C2.09229 20.5254 7.51807 25.9511 14.0454 25.9511ZM14.0454 23.959C8.51417 23.959 4.0962 19.5293 4.0962 13.998C4.0962 8.4668 8.50244 4.03711 14.0337 4.03711C19.565 4.03711 24.0064 8.4668 24.0064 13.998C24.0064 19.5293 19.5767 23.959 14.0454 23.959Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.2564 16.7168C8.60796 17.0918 9.18218 17.0918 9.51031 16.7402L14.0454 11.9355L18.5806 16.7402C18.9204 17.0918 19.4946 17.0918 19.8345 16.7168C20.1626 16.4004 20.1509 15.8496 19.7993 15.4863L15.2056 10.5996C14.4673 9.82617 13.6235 9.82617 12.897 10.5996L8.29156 15.4863C7.94 15.8496 7.92828 16.4004 8.2564 16.7168Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37310">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.09229 2.04492)"/>
</clipPath>
</defs>
</svg>

`;

export const ChevronUpCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
