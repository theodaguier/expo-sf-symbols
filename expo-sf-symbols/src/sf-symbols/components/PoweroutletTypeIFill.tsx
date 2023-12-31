
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
<g clip-path="url(#clip0_2207_35041)">
<path d="M6.70288 24.7124H21.656C24.1052 24.7124 25.3357 23.4936 25.3357 21.0795V6.771C25.3357 4.35694 24.1052 3.13818 21.656 3.13818H6.70288C4.25366 3.13818 3.02319 4.34522 3.02319 6.771V21.0795C3.02319 23.5053 4.25366 24.7124 6.70288 24.7124Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.6873 19.9546C13.2771 19.9546 13.0076 19.6851 13.0076 19.275V15.7476C13.0076 15.3375 13.2888 15.0562 13.6873 15.0562H14.6599C15.0701 15.0562 15.3396 15.3375 15.3396 15.7476V19.275C15.3396 19.6968 15.0701 19.9546 14.6599 19.9546H13.6873ZM7.94507 12.8179C7.66381 12.5249 7.66381 12.1382 7.95678 11.8452L10.7927 9.02102C11.0974 8.72805 11.4607 8.72805 11.7537 9.0093L12.4451 9.71243C12.738 10.0054 12.738 10.3804 12.4451 10.6851L9.60913 13.5093C9.31616 13.8023 8.92944 13.8023 8.64819 13.5093L7.94507 12.8179ZM19.7107 13.5093C19.4177 13.8023 19.0427 13.8023 18.7498 13.5093L15.9138 10.6851C15.6209 10.3804 15.6209 10.0054 15.9138 9.71243L16.6052 9.0093C16.8982 8.72805 17.2732 8.72805 17.5662 9.02102L20.3904 11.8452C20.6951 12.1499 20.6951 12.5249 20.4138 12.8062L19.7107 13.5093Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_35041">
<rect width="22.3125" height="21.5977" fill="currentColor" transform="translate(3.02319 3.11475)"/>
</clipPath>
</defs>
</svg>

`;

export const PoweroutletTypeIFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
