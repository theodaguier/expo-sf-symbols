
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
<g clip-path="url(#clip0_2207_34595)">
<path d="M8.04077 26.9189C8.4978 26.9189 8.83764 26.6845 9.38842 26.1689L13.6189 22.3017H21.5407C25.0329 22.3017 26.9079 20.3799 26.9079 16.9463V7.96973C26.9079 4.53614 25.0329 2.60254 21.5407 2.60254H6.44702C2.95483 2.60254 1.07983 4.52442 1.07983 7.96973V16.9463C1.07983 20.3916 2.95483 22.3017 6.44702 22.3017H6.9978V25.7119C6.9978 26.4384 7.3728 26.9189 8.04077 26.9189Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34595">
<rect width="25.8281" height="25.8867" fill="currentColor" transform="translate(1.07983 1.03223)"/>
</clipPath>
</defs>
</svg>

`;

export const BubbleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
