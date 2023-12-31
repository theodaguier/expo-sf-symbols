
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
<g clip-path="url(#clip0_2207_37318)">
<path d="M6.71961 24.6426H20.9344C23.3954 24.6426 24.6141 23.4238 24.6141 21.0097V6.70117C24.6141 4.28711 23.3954 3.06836 20.9344 3.06836H6.71961C4.27039 3.06836 3.03992 4.27539 3.03992 6.70117V21.0097C3.03992 23.4355 4.27039 24.6426 6.71961 24.6426Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M15.0516 17.7051C14.2899 18.5137 13.411 18.5137 12.6493 17.7051L7.91491 12.6777C7.53991 12.291 7.53991 11.7402 7.86803 11.3887C8.24303 11.0019 8.82897 11.0019 9.16882 11.3652L13.8563 16.3222L18.5321 11.3652C18.8719 11.0019 19.4461 11.0137 19.8329 11.3887C20.1727 11.7285 20.161 12.291 19.786 12.6777L15.0516 17.7051Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37318">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.03992 3.04492)"/>
</clipPath>
</defs>
</svg>

`;

export const ChevronDownSquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
