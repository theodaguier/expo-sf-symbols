
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
<g clip-path="url(#clip0_2207_33904)">
<path d="M6.74268 24.7281H20.9575C23.4185 24.7281 24.6372 23.5093 24.6372 21.0952V6.78662C24.6372 4.37256 23.4185 3.15381 20.9575 3.15381H6.74268C4.29346 3.15381 3.06299 4.36084 3.06299 6.78662V21.0952C3.06299 23.521 4.29346 24.7281 6.74268 24.7281ZM6.76611 22.8413C5.59424 22.8413 4.94971 22.2202 4.94971 21.0015V6.88037C4.94971 5.66162 5.59424 5.04053 6.76611 5.04053H20.9341C22.0942 5.04053 22.7505 5.66162 22.7505 6.88037V21.0015C22.7505 22.2202 22.0942 22.8413 20.9341 22.8413H6.76611Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M16.0122 19.5366C16.4224 19.5366 16.7153 19.2437 16.7153 18.8218V9.06006C16.7153 8.66162 16.4224 8.32178 16.0005 8.32178C15.6958 8.32178 15.4966 8.45068 15.1568 8.75537L12.4614 11.2983C12.4263 11.3452 12.3442 11.3569 12.2857 11.3569H10.4692C9.60205 11.3569 9.1333 11.8374 9.1333 12.7515V15.1187C9.1333 16.0327 9.60205 16.5132 10.4692 16.5132H12.2857C12.3442 16.5132 12.4263 16.5366 12.4614 16.5718L15.1568 19.1382C15.4614 19.4195 15.7075 19.5366 16.0122 19.5366Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33904">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.06299 3.13037)"/>
</clipPath>
</defs>
</svg>

`;

export const SpeakerSquare = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
