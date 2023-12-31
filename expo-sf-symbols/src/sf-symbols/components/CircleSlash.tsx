
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
<g clip-path="url(#clip0_2207_34003)">
<path d="M14.0882 26.0261C20.6155 26.0261 26.0413 20.6004 26.0413 14.073C26.0413 7.53397 20.6038 2.1199 14.0764 2.1199C7.53735 2.1199 2.13501 7.53397 2.13501 14.073C2.13501 20.6004 7.54907 26.0261 14.0882 26.0261ZM14.0882 24.034C8.55688 24.034 4.13891 19.6043 4.13891 14.073C4.13891 8.54178 8.54516 4.11209 14.0764 4.11209C19.596 4.11209 24.0491 8.54178 24.0491 14.073C24.0491 19.6043 19.6077 24.034 14.0882 24.034Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M23.2171 26.4363C24.1077 27.3269 25.5608 27.3152 26.4397 26.4129C27.3069 25.5105 27.2952 24.0926 26.428 23.2136L4.9358 1.72146C4.04517 0.83084 2.60377 0.819121 1.71314 1.70975C0.834236 2.58865 0.834236 4.0535 1.70142 4.9324L23.2171 26.4363Z" fill="currentColor"/>
<path d="M24.178 25.4754C24.5296 25.8269 25.1155 25.8152 25.4553 25.4636C25.8069 25.1004 25.8069 24.5379 25.4553 24.1863L3.96313 2.68239C3.61157 2.33083 3.03735 2.33083 2.67407 2.68239C2.33423 3.02224 2.33423 3.61989 2.67407 3.95974L24.178 25.4754Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34003">
<rect width="26.0318" height="26.0626" fill="currentColor" transform="translate(1.05249 1.04761)"/>
</clipPath>
</defs>
</svg>

`;

export const CircleSlash = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
