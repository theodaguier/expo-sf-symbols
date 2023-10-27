
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="30" height="29" viewBox="0 0 30 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_35127)">
<path d="M0.0146484 3.05713C0.0146484 4.06494 0.83496 4.88525 1.83106 4.88525C2.47559 4.88525 3.06153 4.53369 3.36621 4.00634H26.206C26.5107 4.53369 27.0966 4.88525 27.7412 4.88525C28.7373 4.88525 29.5576 4.06494 29.5576 3.05713C29.5576 2.06103 28.7373 1.24072 27.7412 1.24072C27.0966 1.24072 26.5107 1.604 26.206 2.11963H3.36621C3.06153 1.604 2.47559 1.24072 1.83106 1.24072C0.83496 1.24072 0.0146484 2.06103 0.0146484 3.05713Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M5.18262 25.8618H13.1514C13.6319 25.8618 13.9834 25.5102 13.9834 25.018V1.90869C13.9834 1.4165 13.6319 1.05322 13.1514 1.05322H5.18262C4.70215 1.05322 4.35059 1.4165 4.35059 1.90869V25.018C4.35059 25.5102 4.70215 25.8618 5.18262 25.8618ZM16.4209 25.8618H24.3897C24.8701 25.8618 25.2217 25.5102 25.2217 25.018V1.90869C25.2217 1.4165 24.8701 1.05322 24.3897 1.05322H16.4209C15.9405 1.05322 15.5889 1.4165 15.5889 1.90869V25.018C15.5889 25.5102 15.9405 25.8618 16.4209 25.8618Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35127">
<rect width="29.543" height="25.6992" fill="currentColor" transform="translate(0.0146484 1.05322)"/>
</clipPath>
</defs>
</svg>

`;

export const CurtainsClosed = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
