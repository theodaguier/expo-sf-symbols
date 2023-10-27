
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
<g clip-path="url(#clip0_2207_34194)">
<path d="M3.69849 24.6948H23.9719C26.4329 24.6948 27.6516 23.4878 27.6516 21.0737V6.75342C27.6516 4.33936 26.4329 3.12061 23.9719 3.12061H3.69849C1.24927 3.12061 0.0187988 4.33936 0.0187988 6.75342V21.0737C0.0187988 23.4878 1.24927 24.6948 3.69849 24.6948ZM3.72192 22.8081C2.55005 22.8081 1.90552 22.187 1.90552 20.9683V6.85889C1.90552 5.64014 2.55005 5.00733 3.72192 5.00733H23.9485C25.1086 5.00733 25.7649 5.64014 25.7649 6.85889V20.9683C25.7649 22.187 25.1086 22.8081 23.9485 22.8081H3.72192Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M4.53052 21.2144H7.84692C8.57349 21.2144 8.86646 20.9097 8.86646 20.1597V7.66748C8.86646 6.91748 8.57349 6.61279 7.84692 6.61279H4.53052C3.80396 6.61279 3.51099 6.91748 3.51099 7.66748V20.1597C3.51099 20.9097 3.80396 21.2144 4.53052 21.2144Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34194">
<rect width="27.6328" height="21.5742" fill="currentColor" transform="translate(0.0187988 3.12061)"/>
</clipPath>
</defs>
</svg>

`;

export const RectangleLeftthirdInsetFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
