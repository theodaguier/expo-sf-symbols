
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
<g clip-path="url(#clip0_2207_34950)">
<path d="M10.6868 24.2929H16.4524C16.8274 24.2929 17.1321 24 17.1321 23.6132C17.1321 23.2265 16.8274 22.9336 16.4524 22.9336H10.6868C10.3001 22.9336 9.99536 23.2265 9.99536 23.6132C9.99536 24 10.3001 24.2929 10.6868 24.2929ZM13.5696 27.6328C15.1516 27.6328 16.2766 26.789 16.5227 25.4531H10.6047C10.8274 26.789 11.9524 27.6328 13.5696 27.6328Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.9446 21.7031H16.1829C16.6047 21.7031 16.8274 21.4804 16.8274 21.0703V20.121C16.8274 14.3789 20.929 11.2968 22.511 8.10938H4.63989C6.23364 11.2734 10.3 14.4257 10.3 20.121V21.0703C10.3 21.4804 10.5227 21.7031 10.9446 21.7031Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M4.11255 6.57422H23.0149C23.0735 6.3164 23.1086 6.04687 23.1086 5.77734C23.1086 2.76562 19.6047 1.08984 13.5696 1.08984C7.52271 1.08984 4.0188 2.76562 4.0188 5.77734C4.0188 6.04687 4.05396 6.30468 4.11255 6.57422Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34950">
<rect width="19.0898" height="26.543" fill="currentColor" transform="translate(4.0188 1.08984)"/>
</clipPath>
</defs>
</svg>

`;

export const LightbulbLedWideFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
