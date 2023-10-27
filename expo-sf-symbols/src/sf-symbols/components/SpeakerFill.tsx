
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
<g clip-path="url(#clip0_2207_33901)">
<path d="M19.6769 24.814C20.4503 24.814 21.0011 24.2632 21.0011 23.5015V5.5249C21.0011 4.76318 20.4503 4.14209 19.6535 4.14209C19.1144 4.14209 18.7394 4.37647 18.1418 4.95068L13.1495 9.63818C13.0675 9.70849 12.9738 9.74365 12.8566 9.74365H9.49329C7.91126 9.74365 7.04407 10.6226 7.04407 12.3101V16.6695C7.04407 18.3687 7.91126 19.2359 9.49329 19.2359H12.8566C12.9738 19.2359 13.0675 19.271 13.1495 19.3413L18.1418 24.0757C18.6808 24.5913 19.1379 24.814 19.6769 24.814Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33901">
<rect width="13.957" height="20.6836" fill="currentColor" transform="translate(7.04407 4.13037)"/>
</clipPath>
</defs>
</svg>

`;

export const SpeakerFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
