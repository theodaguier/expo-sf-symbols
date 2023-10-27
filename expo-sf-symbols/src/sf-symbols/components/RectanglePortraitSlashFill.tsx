
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
<g clip-path="url(#clip0_2207_34257)">
<path d="M4.43189 23.2774C4.43189 25.7266 5.63892 26.9453 8.0647 26.9453H20.51C22.9358 26.9453 24.1428 25.7266 24.1428 23.2774V5.5C24.1428 3.0625 22.9358 1.82031 20.51 1.82031H8.0647C5.63892 1.82031 4.43189 3.0625 4.43189 5.5V23.2774Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M23.6741 26.9805C24.553 27.836 26.0061 27.8711 26.885 26.9571C27.7639 26.0664 27.7522 24.6367 26.8733 23.7461L4.90064 1.78516C4.02173 0.906257 2.58032 0.894538 1.67798 1.78516C0.799072 2.65235 0.799072 4.12891 1.67798 4.9961L23.6741 26.9805Z" fill="currentColor"/>
<path d="M24.635 26.0078C24.9983 26.3594 25.5725 26.3594 25.9124 26.0078C26.2639 25.6446 26.2639 25.0703 25.9124 24.7188L3.9397 2.75783C3.58814 2.40627 3.0022 2.39455 2.65064 2.75783C2.29907 3.09767 2.29907 3.69533 2.65064 4.03517L24.635 26.0078Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34257">
<rect width="26.5196" height="26.5342" fill="currentColor" transform="translate(1.0188 1.12158)"/>
</clipPath>
</defs>
</svg>

`;

export const RectanglePortraitSlashFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
