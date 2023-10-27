
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
<g clip-path="url(#clip0_2207_37386)">
<path d="M22.3127 9.43335C22.3127 8.78882 21.8089 8.32007 21.2464 8.32007C20.6722 8.32007 20.1917 8.82397 20.1917 9.38647V13.7107L20.4026 19.1834L18.469 17.0037L6.83227 5.36694C6.62134 5.15601 6.36353 5.05054 6.09399 5.05054C5.50806 5.05054 5.00415 5.5896 5.00415 6.1521C5.00415 6.39819 5.12134 6.67944 5.33228 6.89038L16.9455 18.5154L19.1253 20.4373L13.4065 20.2498H9.32837C8.77759 20.2498 8.27368 20.7302 8.27368 21.2927C8.27368 21.8552 8.71899 22.3474 9.37524 22.3474H21.1644C21.8675 22.3474 22.3011 21.8904 22.3011 21.2224L22.3127 9.43335Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37386">
<rect width="17.3086" height="17.332" fill="currentColor" transform="translate(5.00415 5.01538)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowDownRight = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
