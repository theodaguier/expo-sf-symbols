
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
<g clip-path="url(#clip0_2207_34986)">
<path d="M13.7446 26.7441C20.7758 26.7441 25.4399 24.3418 25.4399 20.6152V8.66211C25.4399 4.66601 20.7641 2.08789 13.7446 2.08789C6.73682 2.08789 2.06104 4.66601 2.06104 8.66211V20.6152C2.06104 24.3418 6.7251 26.7441 13.7446 26.7441ZM3.94776 20.6152C3.94776 18.1543 7.9087 16.3731 13.7446 16.3731C19.5805 16.3731 23.5532 18.1543 23.5532 20.6152C23.5532 23.0762 19.5805 24.8574 13.7446 24.8574C7.9087 24.8574 3.94776 23.0762 3.94776 20.6152ZM8.86963 18.0371C8.93995 19.7598 11.0845 21.1777 13.7446 21.1777C16.4048 21.1777 18.561 19.7598 18.6313 18.0371C17.2602 17.6973 15.5962 17.4981 13.7446 17.4981C11.9048 17.4981 10.229 17.6973 8.86963 18.0371Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34986">
<rect width="23.3789" height="24.668" fill="currentColor" transform="translate(2.06104 2.08789)"/>
</clipPath>
</defs>
</svg>

`;

export const LightCylindricalCeilingInverse = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
