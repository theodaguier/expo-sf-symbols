
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
<g clip-path="url(#clip0_2207_37101)">
<path d="M2.94189 5.91113H24.7739C25.2661 5.91113 25.6763 5.52441 25.6763 5.02051C25.6763 4.52832 25.2661 4.1416 24.7739 4.1416H2.94189C2.44971 4.1416 2.06299 4.52832 2.06299 5.02051C2.06299 5.52441 2.44971 5.91113 2.94189 5.91113ZM2.94189 12.0518H24.7739C25.2661 12.0518 25.6763 11.665 25.6763 11.1611C25.6763 10.6689 25.2661 10.2822 24.7739 10.2822H2.94189C2.44971 10.2822 2.06299 10.6689 2.06299 11.1611C2.06299 11.665 2.44971 12.0518 2.94189 12.0518ZM2.94189 18.1924H24.7739C25.2661 18.1924 25.6763 17.7939 25.6763 17.3018C25.6763 16.8096 25.2661 16.4228 24.7739 16.4228H2.94189C2.44971 16.4228 2.06299 16.8096 2.06299 17.3018C2.06299 17.7939 2.44971 18.1924 2.94189 18.1924ZM2.94189 24.3213H24.7739C25.2661 24.3213 25.6763 23.9346 25.6763 23.4424C25.6763 22.9502 25.2661 22.5518 24.7739 22.5518H2.94189C2.44971 22.5518 2.06299 22.9502 2.06299 23.4424C2.06299 23.9346 2.44971 24.3213 2.94189 24.3213Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37101">
<rect width="23.6133" height="20.2617" fill="currentColor" transform="translate(2.06299 4.1416)"/>
</clipPath>
</defs>
</svg>

`;

export const TextJustify = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
