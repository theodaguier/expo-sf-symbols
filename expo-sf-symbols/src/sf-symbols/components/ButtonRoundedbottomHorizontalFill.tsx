
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
<g clip-path="url(#clip0_2207_36848)">
<path d="M9.92432 24.4711H17.2954C24.0923 24.4711 27.1275 21.3422 27.1275 14.9438V7.58435C27.1275 5.22888 25.9087 4.03357 23.5298 4.03357H3.68995C1.31104 4.03357 0.0922852 5.22888 0.0922852 7.58435V14.9438C0.0922852 21.3422 3.12745 24.4711 9.92432 24.4711Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36848">
<rect width="27.0352" height="20.4492" fill="currentColor" transform="translate(0.0922852 4.03357)"/>
</clipPath>
</defs>
</svg>

`;

export const ButtonRoundedbottomHorizontalFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
