
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
<g clip-path="url(#clip0_2207_34024)">
<path d="M25.9503 13.9992C25.9503 7.4602 20.5363 2.04614 13.9972 2.04614C7.46985 2.04614 2.04407 7.44848 2.04407 13.9992C2.04407 20.5149 7.46985 25.9523 13.9972 25.9523C20.5363 25.9523 25.9503 20.5266 25.9503 13.9992ZM23.9582 13.9992C23.9582 19.5305 19.5285 23.9719 13.9972 23.9602C8.46595 23.9484 4.03626 19.5188 4.03626 13.9992H23.9582Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34024">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.04407 2.04614)"/>
</clipPath>
</defs>
</svg>

`;

export const CircleBottomhalfFilledInverse = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
