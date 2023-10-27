
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
<g clip-path="url(#clip0_2207_37636)">
<path d="M13.9825 25.9594C20.5216 25.9594 25.9356 20.5337 25.9356 14.0063C25.9356 7.46728 20.5099 2.05322 13.9708 2.05322C7.44348 2.05322 2.02942 7.46728 2.02942 14.0063C2.02942 20.5337 7.4552 25.9594 13.9825 25.9594Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.8185 19.397C10.1974 19.397 9.86926 18.9634 9.86926 18.3071V9.48292C9.86926 8.82667 10.1974 8.39307 10.8185 8.39307H13.9005C17.3692 8.39307 19.2794 10.3384 19.2794 13.8657C19.2794 17.4399 17.3341 19.397 13.9005 19.397H10.8185ZM11.7443 17.897H13.6896C16.0567 17.897 17.3341 16.561 17.3341 13.9009C17.3341 11.2993 16.045 9.89307 13.6896 9.89307H11.7443V17.897Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37636">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.02942 2.05322)"/>
</clipPath>
</defs>
</svg>

`;

export const DCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
