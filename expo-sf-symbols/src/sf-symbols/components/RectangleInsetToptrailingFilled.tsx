
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="28" height="29" viewBox="0 0 28 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_34203)">
<path d="M3.67969 24.6948H23.9531C26.4141 24.6948 27.6328 23.4878 27.6328 21.0737V6.75342C27.6328 4.33936 26.4141 3.12061 23.9531 3.12061H3.67969C1.23047 3.12061 0 4.33936 0 6.75342V21.0737C0 23.4878 1.23047 24.6948 3.67969 24.6948ZM3.70312 22.8081C2.53125 22.8081 1.88672 22.187 1.88672 20.9683V6.85889C1.88672 5.64014 2.53125 5.00733 3.70312 5.00733H23.9297C25.0898 5.00733 25.7461 5.64014 25.7461 6.85889V20.9683C25.7461 22.187 25.0898 22.8081 23.9297 22.8081H3.70312Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M14.8477 13.9018H23.1211C23.8594 13.9018 24.1523 13.5972 24.1523 12.8472V7.66748C24.1523 6.91748 23.8594 6.61279 23.1211 6.61279H14.8477C14.1094 6.61279 13.8164 6.91748 13.8164 7.66748V12.8472C13.8164 13.5972 14.1094 13.9018 14.8477 13.9018Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34203">
<rect width="27.6328" height="21.5742" fill="currentColor" transform="translate(0 3.12061)"/>
</clipPath>
</defs>
</svg>

`;

export const RectangleInsetToptrailingFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
