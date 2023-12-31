
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
<g clip-path="url(#clip0_2207_34970)">
<path d="M14.117 13.9385C16.6834 13.9385 19.2498 13.7744 21.3592 13.458C22.9881 13.2236 23.5858 11.9814 22.8826 10.3642L19.4022 2.52441C18.6756 0.87207 17.4686 0.0869141 15.6287 0.0869141H12.5936C10.7655 0.0869141 9.55845 0.87207 8.83189 2.52441L5.35142 10.3642C4.6483 11.9814 5.23423 13.2236 6.87486 13.458C8.97252 13.7744 11.5389 13.9385 14.117 13.9385ZM13.1327 15.6846H15.0897V13.4228H13.1327V15.6846ZM12.3124 28.4463H15.91C18.9334 28.4463 20.7147 26.8877 20.7147 24.251C20.7147 22.5986 20.199 20.1377 19.2967 17.6533C18.7694 16.2119 17.6326 15.3681 16.0154 15.3681H12.2069C10.5897 15.3681 9.45299 16.2119 8.92564 17.6533C8.03502 20.1377 7.50767 22.5986 7.50767 24.251C7.50767 26.8877 9.28892 28.4463 12.3124 28.4463Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34970">
<rect width="18.1144" height="28.3711" fill="currentColor" transform="translate(5.05884 0.0869141)"/>
</clipPath>
</defs>
</svg>

`;

export const LampTableFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
