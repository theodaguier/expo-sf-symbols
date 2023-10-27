
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
<g clip-path="url(#clip0_2207_37100)">
<path d="M2.9104 5.91113H24.7424C25.2346 5.91113 25.6448 5.52441 25.6448 5.02051C25.6448 4.52832 25.2346 4.1416 24.7424 4.1416H2.9104C2.41821 4.1416 2.03149 4.52832 2.03149 5.02051C2.03149 5.52441 2.41821 5.91113 2.9104 5.91113ZM2.9104 18.1924H24.7424C25.2346 18.1924 25.6448 17.7939 25.6448 17.3018C25.6448 16.8096 25.2346 16.4228 24.7424 16.4228H2.9104C2.41821 16.4228 2.03149 16.8096 2.03149 17.3018C2.03149 17.7939 2.41821 18.1924 2.9104 18.1924ZM11.5706 12.0518H24.7424C25.2346 12.0518 25.6448 11.665 25.6448 11.1611C25.6448 10.6689 25.2346 10.2822 24.7424 10.2822H11.5706C11.0667 10.2822 10.6799 10.6689 10.6799 11.1611C10.6799 11.665 11.0667 12.0518 11.5706 12.0518ZM11.5706 24.3213H24.7424C25.2346 24.3213 25.6448 23.9346 25.6448 23.4424C25.6448 22.9502 25.2346 22.5518 24.7424 22.5518H11.5706C11.0667 22.5518 10.6799 22.9502 10.6799 23.4424C10.6799 23.9346 11.0667 24.3213 11.5706 24.3213Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37100">
<rect width="23.6133" height="20.2617" fill="currentColor" transform="translate(2.03149 4.1416)"/>
</clipPath>
</defs>
</svg>

`;

export const TextAlignright = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
