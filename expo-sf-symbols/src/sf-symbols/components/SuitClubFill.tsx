
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
<g clip-path="url(#clip0_2207_34391)">
<path d="M3.01685 16.3437C3.01685 19.1445 5.23169 21.3125 8.02076 21.3125C9.57935 21.3125 11.1848 20.7969 11.8645 19.4258H11.9817C11.9934 20.9844 10.2825 22.2734 9.57935 23C8.7356 23.8789 9.25123 25.0976 10.3411 25.0976H17.7824C18.8723 25.0976 19.3762 23.8789 18.5441 23C17.841 22.2734 16.1301 20.9844 16.1418 19.4258H16.259C16.9387 20.7969 18.5441 21.3125 20.091 21.3125C22.8918 21.3125 25.1066 19.1445 25.1066 16.3437C25.1066 13.5312 22.9856 11.1523 20.1848 11.1523C19.1066 11.1523 18.0051 11.5156 17.1496 12.1953C18.6027 11.0117 19.1066 9.52344 19.1066 8.1875C19.1066 5.38672 16.8449 3.13672 14.0559 3.13672C11.2786 3.13672 9.01685 5.38672 9.01685 8.1875C9.01685 9.52344 9.52076 11.0117 10.9739 12.1953C10.1184 11.5156 9.01685 11.1523 7.93873 11.1523C5.13794 11.1523 3.01685 13.5312 3.01685 16.3437Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34391">
<rect width="22.0898" height="22.043" fill="currentColor" transform="translate(3.01685 3.13672)"/>
</clipPath>
</defs>
</svg>

`;

export const SuitClubFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
