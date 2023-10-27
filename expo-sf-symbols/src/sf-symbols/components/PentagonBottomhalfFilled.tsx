
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
<g clip-path="url(#clip0_2207_34359)">
<path d="M1.27448 12.8941L4.73151 23.6402C5.25885 25.3159 6.41901 26.1714 8.20026 26.1714H19.2862C21.0674 26.1714 22.2276 25.3159 22.7549 23.6402L26.1885 12.9409C26.751 11.2066 26.3174 9.83545 24.9112 8.8042L15.9346 2.20654C14.4698 1.1167 13.0167 1.1167 11.5518 2.20654L2.57527 8.8042C1.16901 9.83545 0.735421 11.1948 1.27448 12.8941ZM3.05574 12.3198C2.77449 11.4292 2.95027 10.8901 3.72371 10.3159L12.6885 3.70654C13.462 3.13232 14.0245 3.13232 14.7979 3.70654L23.7627 10.3159C24.5362 10.8901 24.712 11.4409 24.419 12.355L23.669 14.687H3.81746L3.05574 12.3198Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34359">
<rect width="25.3769" height="25.0664" fill="currentColor" transform="translate(1.05042 1.10498)"/>
</clipPath>
</defs>
</svg>

`;

export const PentagonBottomhalfFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
