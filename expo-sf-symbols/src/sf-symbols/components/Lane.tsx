
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
<g clip-path="url(#clip0_2207_33439)">
<path d="M3.06104 21.8213C3.06104 22.3369 3.48291 22.7705 3.99854 22.7705C4.52588 22.7705 4.94776 22.3369 4.94776 21.8213V6.04785C4.94776 5.53223 4.52588 5.11035 3.99854 5.11035C3.48291 5.11035 3.06104 5.53223 3.06104 6.04785V21.8213ZM22.7485 21.8213C22.7485 22.3369 23.1821 22.7705 23.6977 22.7705C24.2133 22.7705 24.6352 22.3369 24.6352 21.8213V6.04785C24.6352 5.53223 24.2133 5.11035 23.6977 5.11035C23.1821 5.11035 22.7485 5.53223 22.7485 6.04785V21.8213Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33439">
<rect width="21.5742" height="17.6836" fill="currentColor" transform="translate(3.06104 5.08691)"/>
</clipPath>
</defs>
</svg>

`;

export const Lane = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
