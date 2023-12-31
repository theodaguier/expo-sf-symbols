
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
<g clip-path="url(#clip0_2207_34059)">
<path d="M3.06714 21.0976C3.06714 23.5234 4.29761 24.7305 6.74683 24.7305H20.9616C23.4226 24.7305 24.6413 23.5117 24.6413 21.0976V6.78906C24.6413 4.375 23.4226 3.15625 20.9616 3.15625H6.74683C4.29761 3.15625 3.06714 4.36328 3.06714 6.78906V21.0976ZM13.8601 22.8437V5.04297H20.9382C22.0983 5.04297 22.7546 5.66406 22.7546 6.88281V21.0039C22.7546 22.2226 22.0983 22.8437 20.9382 22.8437H13.8601Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34059">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.06714 3.13281)"/>
</clipPath>
</defs>
</svg>

`;

export const SquareLefthalfFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
