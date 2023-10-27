
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="33" height="29" viewBox="0 0 33 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_32916)">
<path d="M0.267809 23.1933C1.31078 26.6152 6.49047 27.1659 12.092 24.5878L11.4827 23.2988C6.76 25.4902 2.36547 25.2089 1.6389 22.7831C-0.21266 16.7245 12.8186 16.0449 11.3186 10.9472C10.5686 8.43937 4.77953 8.84953 0.642809 11.6386C-0.189222 12.1777 0.607653 13.373 1.42797 12.8105C4.42797 10.8183 9.54906 10.0331 9.9475 11.3456C10.2405 12.33 9.42015 13.0566 6.18578 14.8613C3.03343 16.6074 -1.03297 18.9159 0.267809 23.1933Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M16.885 22.42L29.3537 9.96289L27.303 7.90039L14.8342 20.3575L13.7209 22.959C13.6037 23.2403 13.8967 23.5684 14.1897 23.4512L16.885 22.42ZM30.385 8.95508L31.5686 7.79492C32.1662 7.19727 32.2014 6.55273 31.6623 6.01367L31.2639 5.61523C30.7248 5.08789 30.0803 5.13477 29.4944 5.7207L28.2991 6.89258L30.385 8.95508Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_32916">
<rect width="32.0243" height="24.0945" fill="currentColor" transform="translate(0.0187988 2.10498)"/>
</clipPath>
</defs>
</svg>

`;

export const PencilAndScribble = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
