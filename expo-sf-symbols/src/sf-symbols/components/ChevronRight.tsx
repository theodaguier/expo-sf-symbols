
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
<g clip-path="url(#clip0_2207_37295)">
<path d="M19.5344 14.2168C19.5344 13.9238 19.4173 13.6543 19.1946 13.4434L9.91333 4.34961C9.7024 4.15039 9.44458 4.04492 9.1399 4.04492C8.54224 4.04492 8.07349 4.50195 8.07349 5.11133C8.07349 5.4043 8.19067 5.67383 8.37817 5.87304L16.9094 14.2168L8.37817 22.5605C8.19067 22.7597 8.07349 23.0176 8.07349 23.3222C8.07349 23.9316 8.54224 24.3887 9.1399 24.3887C9.44458 24.3887 9.7024 24.2832 9.91333 24.0722L19.1946 14.9902C19.4173 14.7676 19.5344 14.5097 19.5344 14.2168Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37295">
<rect width="11.4609" height="20.3555" fill="currentColor" transform="translate(8.07349 4.04492)"/>
</clipPath>
</defs>
</svg>

`;

export const ChevronRight = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
