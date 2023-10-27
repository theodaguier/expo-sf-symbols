
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
<g clip-path="url(#clip0_2207_34077)">
<path d="M6.77417 24.7305H20.989C23.45 24.7305 24.6687 23.5117 24.6687 21.0976V6.78906C24.6687 4.375 23.45 3.15625 20.989 3.15625H6.77417C4.32495 3.15625 3.09448 4.36328 3.09448 6.78906V21.0976C3.09448 23.5234 4.32495 24.7305 6.77417 24.7305ZM6.7976 22.8437C5.62573 22.8437 4.9812 22.2226 4.9812 21.0039V6.88281C4.9812 5.66406 5.62573 5.04297 6.7976 5.04297H20.9656C22.1257 5.04297 22.782 5.66406 22.782 6.88281V21.0039C22.782 22.2226 22.1257 22.8437 20.9656 22.8437H6.7976Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M16.5242 7.66797V20.2187C16.5242 20.9453 16.8289 21.2383 17.5789 21.2383H20.1336C20.8836 21.2383 21.1883 20.9453 21.1883 20.2187V7.66797C21.1883 6.92969 20.8836 6.63672 20.1336 6.63672H17.5789C16.8289 6.63672 16.5242 6.92969 16.5242 7.66797Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34077">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.09448 3.13281)"/>
</clipPath>
</defs>
</svg>

`;

export const SquareRightthirdInsetFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
