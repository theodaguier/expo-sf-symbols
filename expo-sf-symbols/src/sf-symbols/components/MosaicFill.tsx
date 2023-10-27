
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
<g clip-path="url(#clip0_2207_36600)">
<path d="M3.05042 18.7441V16.8574H16.7848V3.12305H18.6715V9.07617H24.6246V10.9629H18.6715V16.8574H24.6246V18.7441H18.6715V24.6973H16.7848V18.7441H10.8903V24.6973H9.00354V18.7441H3.05042ZM6.7301 24.6973H20.9449C23.4059 24.6973 24.6246 23.4785 24.6246 21.0644V6.75586C24.6246 4.3418 23.4059 3.12305 20.9449 3.12305H6.7301C4.28088 3.12305 3.05042 4.33008 3.05042 6.75586V21.0644C3.05042 23.4902 4.28088 24.6973 6.7301 24.6973Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36600">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.05042 3.09961)"/>
</clipPath>
</defs>
</svg>

`;

export const MosaicFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
