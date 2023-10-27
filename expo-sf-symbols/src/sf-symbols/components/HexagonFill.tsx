
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
<g clip-path="url(#clip0_2207_34349)">
<path d="M3.75146 21.2388L11.7671 25.8559C13.1499 26.6528 14.4976 26.6645 15.9038 25.8559L23.9195 21.2388C25.0093 20.6059 25.5952 19.9848 25.5952 18.2856V9.16849C25.5952 7.51615 24.9976 6.91849 24.0015 6.34427L15.9624 1.70364C14.5093 0.859894 13.1265 0.883332 11.7085 1.70364L3.68115 6.34427C2.67334 6.91849 2.07568 7.51615 2.07568 9.16849V18.2856C2.07568 19.9848 2.67334 20.6059 3.75146 21.2388Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34349">
<rect width="23.5195" height="25.3799" fill="currentColor" transform="translate(2.07568 1.07812)"/>
</clipPath>
</defs>
</svg>

`;

export const HexagonFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
