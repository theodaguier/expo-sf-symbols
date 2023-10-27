
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
<g clip-path="url(#clip0_2207_36587)">
<path d="M3.67969 24.6316H23.9531C26.4141 24.6316 27.6328 23.4246 27.6328 21.0105V6.69018C27.6328 4.27612 26.4141 3.05737 23.9531 3.05737H3.67969C1.23047 3.05737 0 4.27612 0 6.69018V21.0105C0 23.4246 1.23047 24.6316 3.67969 24.6316ZM3.70312 22.7449C2.53125 22.7449 1.88672 22.1238 1.88672 20.9051V6.79565C1.88672 5.5769 2.53125 4.94409 3.70312 4.94409H23.9297C25.0898 4.94409 25.7461 5.5769 25.7461 6.79565V20.9051C25.7461 22.1238 25.0898 22.7449 23.9297 22.7449H3.70312Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M5.03906 19.8738C5.03906 20.4832 5.46094 20.8816 6.08203 20.8816H21.5859C22.207 20.8816 22.6289 20.4832 22.6289 19.8738V18.116C22.6289 17.4949 22.207 17.0965 21.5859 17.0965H6.08203C5.46094 17.0965 5.03906 17.4949 5.03906 18.116V19.8738Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36587">
<rect width="27.6328" height="21.5742" fill="currentColor" transform="translate(0 3.05737)"/>
</clipPath>
</defs>
</svg>

`;

export const DockRectangle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
