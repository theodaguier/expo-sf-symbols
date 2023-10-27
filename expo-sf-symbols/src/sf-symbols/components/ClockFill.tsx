
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
<g clip-path="url(#clip0_2207_36698)">
<path d="M7.83692 15.2679C7.36817 15.2679 7.01661 14.9163 7.01661 14.4475C7.01661 13.9905 7.36817 13.6389 7.83692 13.6389H13.1455V6.54907C13.1455 6.09204 13.4971 5.74048 13.9541 5.74048C14.4111 5.74048 14.7744 6.09204 14.7744 6.54907V14.4475C14.7744 14.9163 14.4111 15.2679 13.9541 15.2679H7.83692ZM13.9658 25.9553C20.5049 25.9553 25.9189 20.5296 25.9189 14.0022C25.9189 7.46313 20.4932 2.04907 13.9541 2.04907C7.42675 2.04907 2.0127 7.46313 2.0127 14.0022C2.0127 20.5296 7.43848 25.9553 13.9658 25.9553Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36698">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.0127 2.04907)"/>
</clipPath>
</defs>
</svg>

`;

export const ClockFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
