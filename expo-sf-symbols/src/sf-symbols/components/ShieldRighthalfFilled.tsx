
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
<g clip-path="url(#clip0_2207_34413)">
<path d="M23.5669 16.5869V7.62207C23.5669 6.3916 23.0395 5.99317 22.0434 5.58301C20.6606 5.02051 16.1958 3.32129 14.813 2.92285C14.4965 2.84082 14.1567 2.74707 13.8286 2.74707C13.5005 2.74707 13.1606 2.81738 12.856 2.92285C11.4614 3.40332 6.99658 5.00879 5.61377 5.58301C4.62939 6.00489 4.09033 6.3916 4.09033 7.62207V16.5869C4.09033 20.8643 6.37549 22.4463 13.0435 26.1846C13.3481 26.3487 13.6411 26.419 13.8286 26.419C14.0161 26.419 14.3208 26.3487 14.6137 26.1846C21.27 22.4346 23.5669 20.8643 23.5669 16.5869ZM13.5825 24.251C13.4419 24.2158 13.2896 24.1338 13.1021 24.0166C7.69971 20.7237 5.95361 19.7744 5.95361 16.1533V7.98536C5.95361 7.58692 6.02392 7.42286 6.35205 7.30567C8.16845 6.68457 11.5903 5.44239 13.3599 4.73926C13.4536 4.7041 13.5239 4.68067 13.5825 4.66895V24.251Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34413">
<rect width="19.4766" height="24.293" fill="currentColor" transform="translate(4.09033 2.12598)"/>
</clipPath>
</defs>
</svg>

`;

export const ShieldRighthalfFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
