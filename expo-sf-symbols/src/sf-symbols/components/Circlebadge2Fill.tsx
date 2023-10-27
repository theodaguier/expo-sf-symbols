
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
<g clip-path="url(#clip0_2207_34037)">
<path d="M18.7998 22.6062C23.6865 22.6062 27.7763 18.5164 27.7763 13.6296C27.7763 8.7312 23.6865 4.65308 18.7881 4.65308C13.8896 4.65308 9.82324 8.7312 9.82324 13.6296C9.82324 18.5164 13.9131 22.6062 18.7998 22.6062Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.6513 24.1999C17.417 24.1999 22.2216 19.3953 22.2216 13.6296C22.2216 7.8523 17.417 3.04761 11.6279 3.04761C5.86231 3.04761 1.06934 7.8523 1.06934 13.6296C1.06934 19.3953 5.87403 24.1999 11.6513 24.1999Z" fill="currentColor"/>
<path d="M11.6513 22.6062C16.5381 22.6062 20.6162 18.5164 20.6162 13.6296C20.6162 8.7312 16.5381 4.65308 11.6279 4.65308C6.74122 4.65308 2.6748 8.7312 2.6748 13.6296C2.6748 18.5164 6.75292 22.6062 11.6513 22.6062Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34037">
<rect width="26.707" height="21.1758" fill="currentColor" transform="translate(1.06934 3.04761)"/>
</clipPath>
</defs>
</svg>

`;

export const Circlebadge2Fill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
