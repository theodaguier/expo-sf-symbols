
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
<g clip-path="url(#clip0_2207_37481)">
<path d="M6.11036 21.8566V6.0481C6.11036 5.43872 5.67676 5.01685 5.05567 5.01685C4.44629 5.01685 4.0127 5.43872 4.0127 6.0481V21.8566C4.0127 22.4543 4.44629 22.8645 5.05567 22.8645C5.67676 22.8645 6.11036 22.4543 6.11036 21.8566ZM24.6611 13.9465C24.6611 13.3254 24.2393 12.8918 23.6299 12.8918H11.7939L9.28614 12.9856L13.1299 9.45826L15.7197 6.82154C15.9189 6.63404 16.0244 6.35279 16.0244 6.07154C16.0244 5.4856 15.5674 5.052 14.9932 5.052C14.7002 5.052 14.4541 5.16919 14.208 5.40356L6.43848 13.1497C6.20411 13.384 6.0752 13.6536 6.0752 13.9465C6.0752 14.2278 6.20411 14.509 6.43848 14.7317L14.208 22.4777C14.4541 22.7121 14.7002 22.8176 14.9932 22.8176C15.5674 22.8176 16.0244 22.3957 16.0244 21.8098C16.0244 21.5285 15.9189 21.2473 15.7197 21.048L13.1299 18.423L9.27442 14.9075L11.7939 14.9895H23.6299C24.2393 14.9895 24.6611 14.5559 24.6611 13.9465Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37481">
<rect width="20.6484" height="18.293" fill="currentColor" transform="translate(4.0127 5.01685)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowLeftToLineCompact = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
