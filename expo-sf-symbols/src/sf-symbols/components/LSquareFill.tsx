
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="28" height="29" viewBox="0 0 28 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_37670)">
<path d="M6.68189 24.6846H20.8967C23.3577 24.6846 24.5764 23.4658 24.5764 21.0517V6.74316C24.5764 4.3291 23.3577 3.11035 20.8967 3.11035H6.68189C4.23267 3.11035 3.0022 4.31738 3.0022 6.74316V21.0517C3.0022 23.4775 4.23267 24.6846 6.68189 24.6846Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.5452 19.2705C10.9241 19.2705 10.5842 18.8252 10.5842 18.1807V9.20411C10.5842 8.55958 10.9241 8.10254 11.5452 8.10254C12.1897 8.10254 12.5295 8.53614 12.5295 9.20411V17.6767H17.1116C17.5803 17.6767 17.9202 17.9814 17.9202 18.4736C17.9202 18.9658 17.5803 19.2705 17.1116 19.2705H11.5452Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37670">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.0022 3.08691)"/>
</clipPath>
</defs>
</svg>

`;

export const LSquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
