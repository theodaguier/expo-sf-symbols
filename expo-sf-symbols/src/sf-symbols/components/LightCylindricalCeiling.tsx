
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
<g clip-path="url(#clip0_2207_34984)">
<path d="M13.7402 26.7441C20.7714 26.7441 25.4355 24.3418 25.4355 20.6152V8.66211C25.4355 4.66601 20.7597 2.08789 13.7402 2.08789C6.73242 2.08789 2.05664 4.66601 2.05664 8.66211V20.6152C2.05664 24.3418 6.7207 26.7441 13.7402 26.7441ZM13.7402 24.8574C7.9043 24.8574 3.94336 23.0762 3.94336 20.6152V8.66211C3.94336 5.91992 7.88086 3.97461 13.7402 3.97461C19.6113 3.97461 23.5488 5.91992 23.5488 8.66211V20.6152C23.5488 23.0762 19.5761 24.8574 13.7402 24.8574ZM13.7402 16.3731C19.5761 16.3731 23.5488 18.1543 23.5488 20.6152H25.4355C25.4355 16.8887 20.7714 14.4863 13.7402 14.4863C6.7207 14.4863 2.05664 16.8887 2.05664 20.6152H3.94336C3.94336 18.1543 7.9043 16.3731 13.7402 16.3731ZM13.7402 21.1777C16.4004 21.1777 18.5566 19.7598 18.6269 18.0371C17.2558 17.6973 15.5918 17.4981 13.7402 17.4981C11.9004 17.4981 10.2246 17.6973 8.86523 18.0371C8.93555 19.7598 11.0801 21.1777 13.7402 21.1777Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34984">
<rect width="23.3789" height="24.668" fill="currentColor" transform="translate(2.05664 2.08789)"/>
</clipPath>
</defs>
</svg>

`;

export const LightCylindricalCeiling = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
