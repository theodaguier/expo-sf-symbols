
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
<g clip-path="url(#clip0_2207_37021)">
<path d="M4.64074 23.6523H23.379C25.3126 23.6523 26.3204 22.4922 25.8985 20.7343L22.5821 7.28125C22.1602 5.55859 21.0704 4.66797 19.3829 4.66797H8.64856C6.94934 4.66797 5.85949 5.55859 5.43762 7.28125L2.13293 20.7343C1.71106 22.4922 2.71887 23.6523 4.64074 23.6523ZM14.0274 28.1757C13.4766 28.1757 13.1368 27.8125 13.1368 27.2383V1.08203C13.1368 0.496093 13.4766 0.144531 14.0274 0.144531C14.5665 0.144531 14.9063 0.496093 14.9063 1.08203V27.2383C14.9063 27.8125 14.5665 28.1757 14.0274 28.1757Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37021">
<rect width="23.9558" height="28.1602" fill="currentColor" transform="translate(2.03784 0.144531)"/>
</clipPath>
</defs>
</svg>

`;

export const TrapezoidAndLineVerticalFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
