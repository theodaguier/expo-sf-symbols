
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
<g clip-path="url(#clip0_2207_37391)">
<path d="M22.3401 9.43213C22.3401 8.7876 21.8362 8.31885 21.2737 8.31885C20.6995 8.31885 20.219 8.82275 20.219 9.38525V13.7095L20.4299 19.1822L18.4963 17.0025L6.85961 5.36572C6.64868 5.15479 6.39087 5.04932 6.12133 5.04932C5.5354 5.04932 5.03149 5.58838 5.03149 6.15088C5.03149 6.39697 5.14868 6.67822 5.35962 6.88916L16.9729 18.5142L19.1526 20.4361L13.4338 20.2486H9.35571C8.80493 20.2486 8.30102 20.729 8.30102 21.2915C8.30102 21.854 8.74633 22.3462 9.40258 22.3462H21.1917C21.8948 22.3462 22.3284 21.8892 22.3284 21.2212L22.3401 9.43213Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37391">
<rect width="17.3086" height="17.332" fill="currentColor" transform="translate(5.03149 5.01416)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowDownForward = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
