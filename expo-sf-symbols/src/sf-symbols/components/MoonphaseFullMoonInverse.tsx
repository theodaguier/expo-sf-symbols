
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="28" height="29" viewBox="0 0 28 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_33661)">
<path d="M13.9573 26.0058C20.4964 26.0058 25.9104 20.5801 25.9104 14.0527C25.9104 7.51367 20.4846 2.09961 13.9455 2.09961C7.41821 2.09961 2.00415 7.51367 2.00415 14.0527C2.00415 20.5801 7.42993 26.0058 13.9573 26.0058Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33661">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.00415 2.09961)"/>
</clipPath>
</defs>
</svg>

`;

export const MoonphaseFullMoonInverse = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
