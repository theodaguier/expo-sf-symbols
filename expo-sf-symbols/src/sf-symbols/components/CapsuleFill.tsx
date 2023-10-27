
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="31" height="29" viewBox="0 0 31 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_34295)">
<path d="M0.0187988 14.263C0.0187988 21.0481 4.69458 25.4895 11.7493 25.4895H18.3704C25.425 25.4895 30.1126 21.0481 30.1126 14.263C30.1126 7.47779 25.425 3.03638 18.3704 3.03638H11.7493C4.69458 3.03638 0.0187988 7.47779 0.0187988 14.263Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34295">
<rect width="30.0938" height="22.4648" fill="currentColor" transform="translate(0.0187988 3.03638)"/>
</clipPath>
</defs>
</svg>

`;

export const CapsuleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
