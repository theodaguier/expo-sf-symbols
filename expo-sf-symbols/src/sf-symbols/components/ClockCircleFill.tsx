
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
<g clip-path="url(#clip0_2207_36700)">
<path d="M13.9636 25.9553C20.5027 25.9553 25.9167 20.5296 25.9167 14.0022C25.9167 7.46313 20.491 2.04907 13.9519 2.04907C7.42456 2.04907 2.0105 7.46313 2.0105 14.0022C2.0105 20.5296 7.43628 25.9553 13.9636 25.9553Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.6707 14.8225H13.9519C14.28 14.8225 14.5613 14.5764 14.5613 14.2483V9.98266C14.5613 9.65454 14.2917 9.39673 13.9519 9.39673C13.6238 9.39673 13.366 9.65454 13.366 9.98266V13.6624H10.6707C10.3308 13.6624 10.073 13.9085 10.073 14.2483C10.073 14.5882 10.3308 14.8225 10.6707 14.8225ZM13.9636 20.4827C10.4246 20.4827 7.47144 17.5413 7.47144 14.0022C7.47144 10.4631 10.4128 7.51001 13.9519 7.51001C17.5027 7.51001 20.4558 10.4631 20.4558 14.0022C20.4558 17.5413 17.5027 20.4827 13.9636 20.4827Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_36700">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.0105 2.04907)"/>
</clipPath>
</defs>
</svg>

`;

export const ClockCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
