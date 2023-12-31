
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
<g clip-path="url(#clip0_2207_34074)">
<path d="M6.74488 24.732H20.9597C23.4207 24.732 24.6394 23.5132 24.6394 21.0991V6.79053C24.6394 4.37647 23.4207 3.15771 20.9597 3.15771H6.74488C4.29566 3.15771 3.06519 4.36475 3.06519 6.79053V21.0991C3.06519 23.5249 4.29566 24.732 6.74488 24.732ZM6.76831 22.8452C5.59644 22.8452 4.95191 22.2241 4.95191 21.0054V6.88428C4.95191 5.66553 5.59644 5.04444 6.76831 5.04444H20.9363C22.0964 5.04444 22.7527 5.66553 22.7527 6.88428V21.0054C22.7527 22.2241 22.0964 22.8452 20.9363 22.8452H6.76831Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M7.5769 11.3022H20.1277C20.866 11.3022 21.159 10.9976 21.159 10.2476V7.69286C21.159 6.94286 20.866 6.63818 20.1277 6.63818H7.5769C6.85034 6.63818 6.55737 6.94286 6.55737 7.69286V10.2476C6.55737 10.9976 6.85034 11.3022 7.5769 11.3022Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34074">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.06519 3.13428)"/>
</clipPath>
</defs>
</svg>

`;

export const SquareTopthirdInsetFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
