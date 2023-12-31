
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
<g clip-path="url(#clip0_2207_37033)">
<path d="M3.05884 9.80127V18.7661C3.05884 21.2154 4.27759 22.4458 6.69165 22.4458H21.0002C23.4143 22.4458 24.633 21.2154 24.633 18.7661V9.80127C24.633 7.36377 23.426 6.12158 21.0002 6.12158H6.69165C4.26587 6.12158 3.05884 7.36377 3.05884 9.80127Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37033">
<rect width="21.5742" height="16.3242" fill="currentColor" transform="translate(3.05884 6.12158)"/>
</clipPath>
</defs>
</svg>

`;

export const RectangleRatio4To3Fill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
