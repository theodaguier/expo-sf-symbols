
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
<g clip-path="url(#clip0_2207_34256)">
<path d="M4.42994 23.2774C4.42994 25.7266 5.63697 26.9453 8.06275 26.9453H20.508C22.9338 26.9453 24.1408 25.7266 24.1408 23.2774V5.5C24.1408 3.0625 22.9338 1.82031 20.508 1.82031H8.06275C5.63697 1.82031 4.42994 3.0625 4.42994 5.5V23.2774ZM6.31665 23.2422V5.53515C6.31665 4.36328 6.93775 3.70703 8.1565 3.70703H20.4143C21.633 3.70703 22.2541 4.36328 22.2541 5.53515V23.2422C22.2541 24.4141 21.633 25.0586 20.4143 25.0586H8.1565C6.93775 25.0586 6.31665 24.4141 6.31665 23.2422Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M23.6721 26.9805C24.551 27.836 26.0041 27.8711 26.883 26.9571C27.7619 26.0664 27.7502 24.6367 26.8713 23.7461L4.89869 1.78516C4.01978 0.906257 2.57837 0.894538 1.67603 1.78516C0.797119 2.65235 0.797119 4.12891 1.67603 4.9961L23.6721 26.9805Z" fill="currentColor"/>
<path d="M24.633 26.0078C24.9963 26.3594 25.5705 26.3594 25.9104 26.0078C26.2619 25.6446 26.2619 25.0703 25.9104 24.7188L3.93775 2.75783C3.58619 2.40627 3.00025 2.39455 2.64869 2.75783C2.29712 3.09767 2.29712 3.69533 2.64869 4.03517L24.633 26.0078Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34256">
<rect width="26.5196" height="26.5342" fill="currentColor" transform="translate(1.01685 1.12158)"/>
</clipPath>
</defs>
</svg>

`;

export const RectanglePortraitSlash = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
