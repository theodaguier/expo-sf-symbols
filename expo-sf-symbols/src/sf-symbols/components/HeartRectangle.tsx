
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
<g clip-path="url(#clip0_2207_34372)">
<path d="M3.71961 24.6523H23.993C26.454 24.6523 27.6727 23.4453 27.6727 21.0312V6.71094C27.6727 4.29688 26.454 3.07812 23.993 3.07812H3.71961C1.27039 3.07812 0.039917 4.29688 0.039917 6.71094V21.0312C0.039917 23.4453 1.27039 24.6523 3.71961 24.6523ZM3.74304 22.7656C2.57117 22.7656 1.92664 22.1445 1.92664 20.9258V6.81641C1.92664 5.59766 2.57117 4.96484 3.74304 4.96484H23.9696C25.1297 4.96484 25.786 5.59766 25.786 6.81641V20.9258C25.786 22.1445 25.1297 22.7656 23.9696 22.7656H3.74304Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.0672 8.69141C9.07508 8.69141 7.64539 10.1914 7.64539 12.2656C7.64539 15.3476 10.8915 18.1836 13.2938 19.707C13.493 19.8242 13.7508 19.9883 13.9032 19.9883C14.0438 19.9883 14.2782 19.8359 14.454 19.707C16.8446 18.1484 20.1141 15.3476 20.1141 12.2656C20.1141 10.1914 18.6727 8.69141 16.6922 8.69141C15.4501 8.69141 14.454 9.40625 13.8797 10.4727C13.2938 9.40625 12.3211 8.69141 11.0672 8.69141Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34372">
<rect width="27.6328" height="21.5742" fill="currentColor" transform="translate(0.039917 3.07812)"/>
</clipPath>
</defs>
</svg>

`;

export const HeartRectangle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
