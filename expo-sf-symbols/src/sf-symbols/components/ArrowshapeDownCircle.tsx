
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
<g clip-path="url(#clip0_2207_33115)">
<path d="M13.9699 25.9287C20.509 25.9287 25.923 20.503 25.923 13.9756C25.923 7.43652 20.4973 2.02246 13.9582 2.02246C7.43091 2.02246 2.01685 7.43652 2.01685 13.9756C2.01685 20.503 7.44263 25.9287 13.9699 25.9287ZM13.9699 23.9366C8.43873 23.9366 4.02076 19.5069 4.02076 13.9756C4.02076 8.44434 8.42701 4.01465 13.9582 4.01465C19.4895 4.01465 23.9309 8.44434 23.9309 13.9756C23.9309 19.5069 19.5012 23.9366 13.9699 23.9366Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.9699 20.8428C14.1809 20.8428 14.427 20.7608 14.6613 20.5264L19.3606 15.4756C19.677 15.1475 19.8059 14.9366 19.8059 14.6319C19.8059 14.1866 19.466 13.8702 19.0441 13.8702H16.4777V8.57324C16.4777 7.64746 15.9504 7.1084 15.048 7.1084H12.8801C11.9778 7.1084 11.4622 7.64746 11.4622 8.57324V13.8702H8.87232C8.43873 13.8702 8.13404 14.1866 8.13404 14.6084C8.13404 14.9248 8.26294 15.1827 8.53247 15.4756L13.2902 20.5264C13.5129 20.7608 13.7707 20.8428 13.9699 20.8428Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33115">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.01685 2.02246)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowshapeDownCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
