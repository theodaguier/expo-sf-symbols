
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
<g clip-path="url(#clip0_2207_37112)">
<path d="M7.89233 21.0469H20.0329C20.5603 21.0469 20.9821 20.6368 20.9821 20.1094C20.9821 19.5821 20.5603 19.1602 20.0329 19.1602H7.89233C7.36499 19.1602 6.95483 19.5821 6.95483 20.1094C6.95483 20.6368 7.36499 21.0469 7.89233 21.0469Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M5.48999 15.0117H22.447C22.9743 15.0117 23.3845 14.6016 23.3845 14.0742C23.3845 13.5469 22.9743 13.125 22.447 13.125H5.48999C4.96264 13.125 4.54077 13.5469 4.54077 14.0742C4.54077 14.6016 4.96264 15.0117 5.48999 15.0117Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M3.01733 8.97656H24.8493C25.3767 8.97656 25.7868 8.5664 25.7868 8.03906C25.7868 7.51172 25.3767 7.08984 24.8493 7.08984H3.01733C2.48999 7.08984 2.07983 7.51172 2.07983 8.03906C2.07983 8.5664 2.48999 8.97656 3.01733 8.97656Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37112">
<rect width="23.707" height="13.9805" fill="currentColor" transform="translate(2.07983 7.08984)"/>
</clipPath>
</defs>
</svg>

`;

export const Line3HorizontalDecrease = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
