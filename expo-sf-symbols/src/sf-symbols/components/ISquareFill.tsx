
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
<g clip-path="url(#clip0_2207_37658)">
<path d="M6.71326 24.6788H20.9281C23.3891 24.6788 24.6078 23.46 24.6078 21.0459V6.7373C24.6078 4.32324 23.3891 3.10449 20.9281 3.10449H6.71326C4.26404 3.10449 3.03357 4.31152 3.03357 6.7373V21.0459C3.03357 23.4717 4.26404 24.6788 6.71326 24.6788Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.8148 19.417C13.1938 19.417 12.8539 18.96 12.8539 18.3155V9.20997C12.8539 8.56544 13.1938 8.1084 13.8148 8.1084C14.4477 8.1084 14.7992 8.53028 14.7992 9.20997V18.3155C14.7992 18.9952 14.4477 19.417 13.8148 19.417Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37658">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.03357 3.08105)"/>
</clipPath>
</defs>
</svg>

`;

export const ISquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
