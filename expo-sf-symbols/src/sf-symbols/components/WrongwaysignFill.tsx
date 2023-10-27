
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
<g clip-path="url(#clip0_2207_35967)">
<path d="M13.9782 26.0703C20.5173 26.0703 25.9313 20.6562 25.9313 14.1171C25.9313 7.58984 20.5056 2.16406 13.9665 2.16406C7.43921 2.16406 2.02515 7.58984 2.02515 14.1171C2.02515 20.6562 7.45093 26.0703 13.9782 26.0703Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M7.89624 16.8711C7.26343 16.8711 6.78296 16.4023 6.78296 15.7578V12.4414C6.78296 11.7969 7.26343 11.3281 7.89624 11.3281H20.0837C20.7165 11.3281 21.1853 11.7969 21.1853 12.4414V15.7461C21.1853 16.3906 20.7165 16.8711 20.0837 16.8711H7.89624Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_35967">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.02515 2.15234)"/>
</clipPath>
</defs>
</svg>

`;

export const WrongwaysignFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
