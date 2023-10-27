
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
<g clip-path="url(#clip0_2207_33522)">
<path d="M14.0097 26.0292C20.5488 26.0292 25.9628 20.6035 25.9628 14.0761C25.9628 7.53711 20.5371 2.12305 13.998 2.12305C7.4707 2.12305 2.05664 7.53711 2.05664 14.0761C2.05664 20.6035 7.48242 26.0292 14.0097 26.0292ZM14.0097 24.0371C8.47852 24.0371 4.06055 19.6074 4.06055 14.0761C4.06055 8.54493 8.4668 4.11524 13.998 4.11524C19.5293 4.11524 23.9707 8.54493 23.9707 14.0761C23.9707 19.6074 19.541 24.0371 14.0097 24.0371Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.64258 12.8573C7.68164 13.4315 7.70508 14.7557 8.61914 15.2948L15.6504 19.4549C16.5175 19.9706 17.7363 19.6307 17.7363 18.3768V9.76352C17.7363 8.50962 16.5175 8.15806 15.6504 8.6854L8.64258 12.8573ZM10.459 13.9706L15.6269 10.9002C15.7675 10.8182 15.8496 10.8768 15.8496 10.9823V17.1581C15.8496 17.2635 15.7675 17.3104 15.6269 17.2401L10.4707 14.1932C10.3535 14.1346 10.3769 14.0291 10.459 13.9706Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33522">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.05664 2.12305)"/>
</clipPath>
</defs>
</svg>

`;

export const RestartCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
