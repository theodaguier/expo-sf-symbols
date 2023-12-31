
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
<g clip-path="url(#clip0_2207_37652)">
<path d="M14.0097 25.9819C20.5488 25.9819 25.9628 20.5562 25.9628 14.0288C25.9628 7.48974 20.5371 2.07568 13.998 2.07568C7.4707 2.07568 2.05664 7.48974 2.05664 14.0288C2.05664 20.5562 7.48242 25.9819 14.0097 25.9819Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.1895 19.5718C9.5918 19.5718 9.24023 19.1616 9.24023 18.4819V9.35302C9.24023 8.67334 9.5918 8.26318 10.1895 8.26318C10.8223 8.26318 11.1738 8.66162 11.1738 9.35302V12.9859H16.8222V9.35302C16.8222 8.67334 17.1855 8.26318 17.7832 8.26318C18.416 8.26318 18.7675 8.66162 18.7675 9.35302V18.4819C18.7675 19.1734 18.416 19.5718 17.7832 19.5718C17.1855 19.5718 16.8222 19.1616 16.8222 18.4819V14.5093H11.1738V18.4819C11.1738 19.1734 10.8223 19.5718 10.1895 19.5718Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37652">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.05664 2.07568)"/>
</clipPath>
</defs>
</svg>

`;

export const HCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
