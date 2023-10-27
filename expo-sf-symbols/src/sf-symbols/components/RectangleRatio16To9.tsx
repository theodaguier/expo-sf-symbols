
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
<g clip-path="url(#clip0_2207_37036)">
<path d="M3.04834 10.8247V17.563C3.04834 20.0239 4.26709 21.2427 6.68115 21.2427H20.9897C23.4038 21.2427 24.6225 20.0239 24.6225 17.563V10.8247C24.6225 8.37549 23.4155 7.14502 20.9897 7.14502H6.68115C4.25537 7.14502 3.04834 8.37549 3.04834 10.8247ZM4.93506 10.8481C4.93506 9.67627 5.55615 9.03174 6.7749 9.03174H20.896C22.1147 9.03174 22.7358 9.67627 22.7358 10.8481V17.5396C22.7358 18.688 22.1147 19.356 20.896 19.356H6.7749C5.55615 19.356 4.93506 18.688 4.93506 17.5396V10.8481Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37036">
<rect width="21.5742" height="14.1211" fill="currentColor" transform="translate(3.04834 7.12158)"/>
</clipPath>
</defs>
</svg>

`;

export const RectangleRatio16To9 = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
