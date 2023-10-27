
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
<g clip-path="url(#clip0_2207_33654)">
<path d="M18.0618 14.0527C18.0618 18.459 16.1282 22.0449 12.8821 23.9434C7.87818 23.416 3.99927 19.209 4.01099 14.0527C4.02271 8.91992 7.85474 4.72461 12.8235 4.16211C16.1047 6.0957 18.0618 9.70508 18.0618 14.0527Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M25.925 14.0527C25.925 7.51367 20.5227 2.09961 13.9836 2.09961C7.4563 2.09961 2.0188 7.51367 2.0188 14.0527C2.0188 20.5801 7.44458 26.0058 13.9719 26.0058C20.511 26.0058 25.925 20.5801 25.925 14.0527ZM18.0618 14.0527C18.0618 18.459 16.1282 22.0449 12.8821 23.9434C7.87818 23.416 3.99927 19.209 4.01099 14.0527C4.02271 8.91992 7.85474 4.72461 12.8235 4.16211C16.1047 6.0957 18.0618 9.70508 18.0618 14.0527Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33654">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.0188 2.09961)"/>
</clipPath>
</defs>
</svg>

`;

export const MoonphaseWaningGibbous = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
