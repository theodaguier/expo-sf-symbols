
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
<g clip-path="url(#clip0_2207_37305)">
<path d="M23.1566 24.084C23.3558 24.2832 23.6253 24.4004 23.9183 24.4004C24.5277 24.4004 24.9964 23.9433 24.9964 23.334C24.9964 23.041 24.8675 22.7715 24.68 22.5722L15.5159 13.5957V14.8496L24.68 5.88476C24.8675 5.68554 24.9964 5.4043 24.9964 5.12304C24.9964 4.51367 24.5277 4.04492 23.9183 4.04492C23.6253 4.04492 23.3675 4.16211 23.1566 4.36133L13.8753 13.4434C13.6527 13.6309 13.5237 13.9238 13.5237 14.2285C13.5237 14.5215 13.6527 14.791 13.8753 15.0137L23.1566 24.084Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M12.6916 24.084C12.8909 24.2832 13.1486 24.4004 13.4533 24.4004C14.0627 24.4004 14.5197 23.9433 14.5197 23.334C14.5197 23.041 14.4026 22.7715 14.215 22.5722L5.03931 13.5957V14.8496L14.215 5.88476C14.4026 5.68554 14.5197 5.4043 14.5197 5.12304C14.5197 4.51367 14.0627 4.04492 13.4533 4.04492C13.1486 4.04492 12.8909 4.16211 12.6916 4.36133L3.4104 13.4434C3.18774 13.6309 3.05884 13.9238 3.05884 14.2285C3.05884 14.5215 3.17603 14.791 3.39868 15.0137L12.6916 24.084Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37305">
<rect width="21.9375" height="20.3789" fill="currentColor" transform="translate(3.05884 4.04492)"/>
</clipPath>
</defs>
</svg>

`;

export const ChevronLeft2 = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
