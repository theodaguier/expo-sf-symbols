
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
<g clip-path="url(#clip0_2207_36675)">
<path d="M2.30706 20.3325C1.768 21.27 1.96721 22.313 2.96331 22.7466L13.264 27.1763C13.7797 27.3989 14.2953 27.3989 14.8461 27.1646L25.1351 22.7466C26.1312 22.313 26.3304 21.27 25.7914 20.3325L15.1508 1.7583C14.8226 1.18408 14.4242 1.07861 14.0492 1.07861C13.6625 1.07861 13.264 1.18408 12.9359 1.7583L2.30706 20.3325ZM4.2055 20.6841L13.8265 3.98486C13.8851 3.89111 13.9554 3.84424 14.0492 3.84424C14.1429 3.84424 14.2133 3.87939 14.2601 3.98486L23.8929 20.6841C24.0687 21.0005 23.9633 21.2583 23.682 21.3872L14.4711 25.5474C14.1429 25.6997 13.9554 25.6997 13.6508 25.5708L4.40472 21.3872C4.13519 21.2583 4.02972 21.0005 4.2055 20.6841ZM13.1586 26.4497H14.9281V2.85986H13.1586V26.4497Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36675">
<rect width="24.0692" height="27.2256" fill="currentColor" transform="translate(2.01465 0.116211)"/>
</clipPath>
</defs>
</svg>

`;

export const Pyramid = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
