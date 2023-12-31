
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
<g clip-path="url(#clip0_2207_37104)">
<path d="M2.94409 5.91113H24.7761C25.2683 5.91113 25.6785 5.52441 25.6785 5.02051C25.6785 4.52832 25.2683 4.1416 24.7761 4.1416H2.94409C2.4519 4.1416 2.06519 4.52832 2.06519 5.02051C2.06519 5.52441 2.4519 5.91113 2.94409 5.91113ZM2.94409 12.0518H24.7761C25.2683 12.0518 25.6785 11.665 25.6785 11.1611C25.6785 10.6689 25.2683 10.2822 24.7761 10.2822H2.94409C2.4519 10.2822 2.06519 10.6689 2.06519 11.1611C2.06519 11.665 2.4519 12.0518 2.94409 12.0518ZM2.94409 18.1924H24.7761C25.2683 18.1924 25.6785 17.7939 25.6785 17.3018C25.6785 16.8096 25.2683 16.4228 24.7761 16.4228H2.94409C2.4519 16.4228 2.06519 16.8096 2.06519 17.3018C2.06519 17.7939 2.4519 18.1924 2.94409 18.1924ZM2.94409 24.3213H15.4832C15.9754 24.3213 16.3738 23.9346 16.3738 23.4424C16.3738 22.9502 15.9754 22.5518 15.4832 22.5518H2.94409C2.4519 22.5518 2.06519 22.9502 2.06519 23.4424C2.06519 23.9346 2.4519 24.3213 2.94409 24.3213Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37104">
<rect width="23.6133" height="20.2617" fill="currentColor" transform="translate(2.06519 4.1416)"/>
</clipPath>
</defs>
</svg>

`;

export const TextJustifyLeading = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
