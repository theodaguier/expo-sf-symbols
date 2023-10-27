
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
<g clip-path="url(#clip0_2207_34086)">
<path d="M6.77002 24.6551H20.9848C23.4458 24.6551 24.6645 23.4363 24.6645 21.0222V6.71362C24.6645 4.29956 23.4458 3.08081 20.9848 3.08081H6.77002C4.3208 3.08081 3.09033 4.28784 3.09033 6.71362V21.0222C3.09033 23.448 4.3208 24.6551 6.77002 24.6551Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.9067 17.6121C11.8442 17.6121 10.1333 15.9129 10.1333 13.8269C10.1333 11.7761 11.8442 10.0769 13.9067 10.0769C15.9692 10.0769 17.6801 11.7761 17.6801 13.8269C17.6801 15.9129 15.9692 17.6121 13.9067 17.6121Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_34086">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.09033 3.05737)"/>
</clipPath>
</defs>
</svg>

`;

export const DotSquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
