
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
<g clip-path="url(#clip0_2207_37724)">
<path d="M13.9741 26.0605C20.5132 26.0605 25.9272 20.6348 25.9272 14.1074C25.9272 7.56836 20.5015 2.1543 13.9624 2.1543C7.43506 2.1543 2.021 7.56836 2.021 14.1074C2.021 20.6348 7.44678 26.0605 13.9741 26.0605Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.4937 19.4981C9.96631 19.4981 9.61475 19.1582 9.61475 18.6777C9.61475 18.4082 9.68506 18.2441 9.94288 17.8691L15.4976 10.1816V10.0762H10.3882C9.91944 10.0762 9.57959 9.78321 9.57959 9.2793C9.57959 8.79883 9.91944 8.49414 10.3882 8.49414H17.0913C17.6304 8.49414 17.9937 8.84571 17.9937 9.34961C17.9937 9.63086 17.9351 9.79492 17.7007 10.1231L12.1577 17.8105V17.916H17.5718C18.0405 17.916 18.3921 18.209 18.3921 18.7129C18.3921 19.1934 18.0405 19.4981 17.5718 19.4981H10.4937Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37724">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.021 2.1543)"/>
</clipPath>
</defs>
</svg>

`;

export const ZCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
