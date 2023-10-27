
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
<g clip-path="url(#clip0_2207_33841)">
<path d="M8.63427 23.1933H11.3062C12.3257 23.1933 12.8647 22.6543 12.8647 21.623V5.66211C12.8647 4.5957 12.3257 4.10352 11.3062 4.10352H8.63427C7.61475 4.10352 7.07568 4.64258 7.07568 5.66211V21.623C7.07568 22.6543 7.61475 23.1933 8.63427 23.1933ZM17.1538 23.1933H19.814C20.8452 23.1933 21.3726 22.6543 21.3726 21.623V5.66211C21.3726 4.5957 20.8452 4.10352 19.814 4.10352H17.1538C16.1226 4.10352 15.5835 4.64258 15.5835 5.66211V21.623C15.5835 22.6543 16.1226 23.1933 17.1538 23.1933Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33841">
<rect width="14.2969" height="19.0898" fill="currentColor" transform="translate(7.07568 4.10352)"/>
</clipPath>
</defs>
</svg>

`;

export const PauseFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
