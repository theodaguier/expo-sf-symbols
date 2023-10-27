
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
<g clip-path="url(#clip0_2207_34350)">
<path d="M3.75342 21.2388L11.769 25.8559C13.1518 26.6528 14.4995 26.6645 15.9057 25.8559L23.9214 21.2388C25.0112 20.6059 25.5971 19.9848 25.5971 18.2856V9.16849C25.5971 7.51615 24.9995 6.91849 24.0034 6.34427L15.9643 1.70364C14.5112 0.859894 13.1284 0.883332 11.7104 1.70364L3.68311 6.34427C2.67529 6.91849 2.07764 7.51615 2.07764 9.16849V18.2856C2.07764 19.9848 2.67529 20.6059 3.75342 21.2388ZM13.8432 24.4497V3.08646C14.2768 3.08646 14.7104 3.22708 15.1792 3.49662L22.9487 8.02005C23.5112 8.33646 23.7104 8.62943 23.7104 9.21537V18.2388C23.7104 18.8833 23.5112 19.1997 22.8667 19.563L15.1206 24.0513C14.6635 24.3091 14.2534 24.438 13.8432 24.4497Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34350">
<rect width="23.5195" height="25.3799" fill="currentColor" transform="translate(2.07764 1.07812)"/>
</clipPath>
</defs>
</svg>

`;

export const HexagonLefthalfFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
