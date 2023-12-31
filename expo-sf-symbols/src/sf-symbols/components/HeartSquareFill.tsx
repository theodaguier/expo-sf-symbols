
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
<g clip-path="url(#clip0_2207_34371)">
<path d="M6.73438 24.6758H20.9492C23.4102 24.6758 24.6289 23.457 24.6289 21.0429V6.73438C24.6289 4.32031 23.4102 3.10156 20.9492 3.10156H6.73438C4.28516 3.10156 3.05469 4.30859 3.05469 6.73438V21.0429C3.05469 23.4687 4.28516 24.6758 6.73438 24.6758Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.9414 8.52734C12.2422 8.52734 13.2383 9.26562 13.8477 10.3672C14.457 9.26562 15.4649 8.52734 16.7539 8.52734C18.793 8.52734 20.2813 10.0742 20.2813 12.2187C20.2813 15.3828 16.9063 18.2773 14.4453 19.8828C14.2578 20.0234 14.0352 20.1758 13.8711 20.1758C13.7188 20.1758 13.4492 20.0117 13.2383 19.8828C10.7656 18.3125 7.41406 15.3828 7.41406 12.2187C7.41406 10.0742 8.89062 8.52734 10.9414 8.52734Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_34371">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.05469 3.07812)"/>
</clipPath>
</defs>
</svg>

`;

export const HeartSquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
