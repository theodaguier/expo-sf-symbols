
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
<g clip-path="url(#clip0_2207_33538)">
<path d="M14.0444 25.4844C14.6069 25.4844 15.0522 25.0508 15.0522 24.5V4.10938C15.0522 3.55859 14.6069 3.13672 14.0444 3.13672C13.4937 3.13672 13.0483 3.55859 13.0483 4.10938V24.5C13.0483 25.0508 13.4937 25.4844 14.0444 25.4844Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33538">
<rect width="2.00391" height="22.3711" fill="currentColor" transform="translate(13.0483 3.11328)"/>
</clipPath>
</defs>
</svg>

`;

export const Poweron = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
