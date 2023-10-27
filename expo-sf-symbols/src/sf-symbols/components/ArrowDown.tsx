
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
<g clip-path="url(#clip0_2207_37350)">
<path d="M13.969 3.0127C13.3596 3.0127 12.926 3.43457 12.926 4.04395V19.4775L13.0432 22.9697L13.6995 22.7354L9.50415 18.1299L6.83227 15.5049C6.65649 15.3174 6.37524 15.2236 6.09399 15.2236C5.50806 15.2236 5.08618 15.6689 5.08618 16.2432C5.08618 16.5244 5.19165 16.7705 5.41431 17.0049L13.1838 24.7979C13.4065 25.0322 13.676 25.1494 13.969 25.1494C14.262 25.1494 14.5315 25.0322 14.7542 24.7979L22.5354 17.0049C22.7581 16.7705 22.8518 16.5244 22.8518 16.2432C22.8518 15.6689 22.43 15.2236 21.844 15.2236C21.5628 15.2236 21.2932 15.3174 21.1057 15.5049L18.4339 18.1299L14.2268 22.7354L14.8948 22.9697L15.012 19.4775V4.04395C15.012 3.43457 14.5784 3.0127 13.969 3.0127Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37350">
<rect width="17.7656" height="22.1367" fill="currentColor" transform="translate(5.08618 3.0127)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowDown = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
