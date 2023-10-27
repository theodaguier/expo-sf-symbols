
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
<g clip-path="url(#clip0_2207_37597)">
<path d="M14.0056 25.93C20.5447 25.93 25.9587 20.5043 25.9587 13.9769C25.9587 7.43786 20.533 2.0238 13.9939 2.0238C7.46655 2.0238 2.05249 7.43786 2.05249 13.9769C2.05249 20.5043 7.47827 25.93 14.0056 25.93Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.7791 18.6996C11.2166 19.0394 10.572 18.7699 10.572 18.184V9.78159C10.572 9.20737 11.2634 8.96128 11.7791 9.26597L18.658 13.3441C19.1502 13.6371 19.1619 14.3402 18.658 14.6449L11.7791 18.6996Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37597">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.05249 2.0238)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowtriangleForwardCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
