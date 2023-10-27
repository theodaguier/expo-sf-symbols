
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
<g clip-path="url(#clip0_2207_35225)">
<path d="M6.03992 9.93555H22.329V3.57227C22.329 2.0957 21.3797 1.12305 19.9618 1.12305H8.39539C6.98914 1.12305 6.03992 2.0957 6.03992 3.57227V9.93555ZM9.28601 7.73243C8.94617 7.73243 8.68836 7.48633 8.68836 7.13477V4.46289C8.68836 4.12305 8.93445 3.87696 9.28601 3.87696C9.62586 3.87696 9.87195 4.11133 9.87195 4.46289V7.13477C9.87195 7.47461 9.63758 7.73243 9.28601 7.73243ZM6.03992 22.9433H22.329V11.3066H6.03992V22.9433ZM9.28601 16.9082C8.94617 16.9082 8.68836 16.6738 8.68836 16.3222V13.6503C8.68836 13.3105 8.93445 13.0644 9.28601 13.0644C9.62586 13.0644 9.87195 13.2988 9.87195 13.6503V16.3222C9.87195 16.6621 9.63758 16.9082 9.28601 16.9082ZM6.03992 24.3144V25.1933C6.03992 26.6699 6.98914 27.6425 8.39539 27.6425H19.9618C21.3797 27.6425 22.329 26.6699 22.329 25.1933V24.3144H6.03992Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35225">
<rect width="16.2891" height="26.5195" fill="currentColor" transform="translate(6.03992 1.12305)"/>
</clipPath>
</defs>
</svg>

`;

export const RefrigeratorFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
