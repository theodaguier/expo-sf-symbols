
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
<g clip-path="url(#clip0_2207_34062)">
<path d="M3.09033 21.331C3.09033 23.7802 4.29736 25.0107 6.72314 25.0107H21.0317C23.4575 25.0107 24.6645 23.7802 24.6645 21.331V7.11622C24.6645 4.65528 23.4458 3.43652 21.0317 3.43652H6.72314C4.30908 3.43652 3.09033 4.65528 3.09033 7.11622V21.331ZM4.97705 14.2295V7.13965C4.97705 5.99122 5.59814 5.32325 6.81689 5.32325H20.938C22.1567 5.32325 22.7778 5.99122 22.7778 7.13965V14.2295H4.97705Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34062">
<rect width="21.5742" height="21.8789" fill="currentColor" transform="translate(3.09033 3.13184)"/>
</clipPath>
</defs>
</svg>

`;

export const SquareBottomhalfFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
