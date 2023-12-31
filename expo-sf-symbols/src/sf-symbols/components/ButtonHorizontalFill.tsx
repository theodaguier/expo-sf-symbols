
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
<g clip-path="url(#clip0_2207_36808)">
<path d="M9.31202 24.0688H18.476C25.2729 24.0688 27.7104 21.5492 27.7104 15.2797V11.8343C27.7104 5.56482 25.2729 3.03357 18.476 3.03357H9.31202C2.51514 3.03357 0.0776367 5.56482 0.0776367 11.8343V15.2797C0.0776367 21.5492 2.51514 24.0688 9.31202 24.0688Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36808">
<rect width="27.6328" height="21.0586" fill="currentColor" transform="translate(0.0776367 3.03357)"/>
</clipPath>
</defs>
</svg>

`;

export const ButtonHorizontalFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
