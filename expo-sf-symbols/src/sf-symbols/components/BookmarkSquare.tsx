
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
<g clip-path="url(#clip0_2207_33185)">
<path d="M6.70703 24.8408H20.9218C23.3828 24.8408 24.6015 23.622 24.6015 21.208V6.89942C24.6015 4.48535 23.3828 3.2666 20.9218 3.2666H6.70703C4.25781 3.2666 3.02734 4.47364 3.02734 6.89942V21.208C3.02734 23.6338 4.25781 24.8408 6.70703 24.8408ZM6.73046 22.9541C5.55859 22.9541 4.91406 22.333 4.91406 21.1142V6.99317C4.91406 5.77442 5.55859 5.15332 6.73046 5.15332H20.8984C22.0585 5.15332 22.7148 5.77442 22.7148 6.99317V21.1142C22.7148 22.333 22.0585 22.9541 20.8984 22.9541H6.73046Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.3516 20.247C10.6563 20.247 10.832 20.0713 11.3711 19.5439L13.7617 17.1884C13.7968 17.1533 13.8437 17.1533 13.8789 17.1884L16.2812 19.5439C16.8085 20.0713 16.9843 20.247 17.289 20.247C17.6875 20.247 17.9335 19.9658 17.9335 19.497V9.62989C17.9335 8.49317 17.3476 7.89551 16.1992 7.89551H11.4414C10.3047 7.89551 9.71875 8.49317 9.71875 9.62989V19.497C9.71875 19.9658 9.96484 20.247 10.3516 20.247Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33185">
<rect width="21.5742" height="21.8086" fill="currentColor" transform="translate(3.02734 3.03223)"/>
</clipPath>
</defs>
</svg>

`;

export const BookmarkSquare = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
