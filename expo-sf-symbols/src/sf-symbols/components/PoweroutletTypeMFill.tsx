
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
<g clip-path="url(#clip0_2207_35057)">
<path d="M6.73633 24.7124H21.6894C24.1386 24.7124 25.3691 23.4936 25.3691 21.0795V6.771C25.3691 4.35694 24.1386 3.13818 21.6894 3.13818H6.73633C4.28711 3.13818 3.05664 4.34522 3.05664 6.771V21.0795C3.05664 23.5053 4.28711 24.7124 6.73633 24.7124Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.0762 19.6616C9.06836 19.6616 8.24805 18.8413 8.24805 17.8335C8.24805 16.8491 9.06836 16.017 10.0762 16.017C11.0723 16.017 11.8809 16.8491 11.8809 17.8335C11.8809 18.8413 11.0723 19.6616 10.0762 19.6616ZM18.3613 19.6616C17.3535 19.6616 16.5449 18.8413 16.5449 17.8335C16.5449 16.8491 17.3535 16.017 18.3613 16.017C19.3457 16.017 20.1777 16.8491 20.1777 17.8335C20.1777 18.8413 19.3457 19.6616 18.3613 19.6616ZM14.2128 11.7866C13.205 11.7866 12.3848 10.9663 12.3848 9.9585C12.3848 8.96241 13.205 8.15381 14.2128 8.15381C15.2089 8.15381 16.0293 8.96241 16.0293 9.9585C16.0293 10.9663 15.2089 11.7866 14.2128 11.7866Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_35057">
<rect width="22.3125" height="21.5977" fill="currentColor" transform="translate(3.05664 3.11475)"/>
</clipPath>
</defs>
</svg>

`;

export const PoweroutletTypeMFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
