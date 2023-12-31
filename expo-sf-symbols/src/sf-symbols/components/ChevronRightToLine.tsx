
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
<g clip-path="url(#clip0_2207_33517)">
<path d="M7.08618 23.334C7.08618 23.9433 7.55493 24.4121 8.1643 24.4121C8.45727 24.4121 8.71509 24.3066 8.92602 24.084L18.2073 15.0137C18.43 14.791 18.5471 14.5332 18.5471 14.2285C18.5471 13.9238 18.43 13.6543 18.219 13.4434L8.92602 4.36133C8.70337 4.16211 8.45727 4.04492 8.15259 4.04492C7.55493 4.04492 7.08618 4.50195 7.08618 5.12304C7.08618 5.41601 7.19165 5.68554 7.40259 5.88476L16.6721 14.9433V13.502L7.40259 22.5722C7.19165 22.7832 7.08618 23.041 7.08618 23.334ZM18.5237 23.3926C18.5237 23.9902 18.9573 24.4121 19.5667 24.4121C20.176 24.4121 20.6214 23.9902 20.6214 23.3926V5.08789C20.6214 4.47852 20.176 4.04492 19.5667 4.04492C18.9573 4.04492 18.5237 4.47852 18.5237 5.08789V23.3926Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33517">
<rect width="13.5352" height="20.3789" fill="currentColor" transform="translate(7.08618 4.04492)"/>
</clipPath>
</defs>
</svg>

`;

export const ChevronRightToLine = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
