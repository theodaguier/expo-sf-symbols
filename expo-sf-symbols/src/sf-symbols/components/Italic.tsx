
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
<g clip-path="url(#clip0_2207_37132)">
<path d="M9.00269 22.8418H16.4089C16.9597 22.8418 17.3582 22.502 17.3582 21.9512C17.3582 21.4238 16.9714 21.084 16.4207 21.084H13.7957L16.6433 7.84179H19.2683C19.8191 7.84179 20.2058 7.50195 20.2058 6.95117C20.2058 6.42383 19.8308 6.08398 19.28 6.08398H11.8386C11.2878 6.08398 10.9128 6.42383 10.9128 6.95117C10.9128 7.50195 11.2996 7.84179 11.8503 7.84179H14.4753L11.6277 21.084H8.99097C8.44019 21.084 8.06519 21.4238 8.06519 21.9512C8.06519 22.502 8.4519 22.8418 9.00269 22.8418Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37132">
<rect width="12.1406" height="16.7695" fill="currentColor" transform="translate(8.06519 6.08398)"/>
</clipPath>
</defs>
</svg>

`;

export const Italic = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
