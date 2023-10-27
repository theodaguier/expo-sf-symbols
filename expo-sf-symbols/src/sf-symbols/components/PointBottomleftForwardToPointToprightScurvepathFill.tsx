
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
<g clip-path="url(#clip0_2207_36643)">
<path d="M10.8789 14.7539L17.582 15.4571C21.0977 15.8203 22.8789 17.168 22.8789 19.1602C22.8789 21.1172 21.2266 22.3594 18.5898 22.3594H11.0195V24.2461H18.5898C22.375 24.2461 24.7656 22.2774 24.7656 19.1602C24.7656 15.9727 22.4102 13.8867 17.8633 13.4297L11.1836 12.7266C7.65625 12.3633 5.88672 11.0156 5.88672 9.02344C5.88672 7.0664 7.53906 5.82422 10.1758 5.82422H17.7344V3.9375H10.1758C6.39062 3.9375 4 5.90625 4 9.02344C4 12.211 6.34375 14.2969 10.8789 14.7539Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M7.78516 27.0703C9.87109 27.0703 11.5586 25.3711 11.5586 23.2852C11.5586 21.211 9.87109 19.5117 7.78516 19.5117C5.69922 19.5117 4.01172 21.211 4.01172 23.2852C4.01172 25.3711 5.69922 27.0703 7.78516 27.0703ZM20.9805 8.67187C23.0781 8.67187 24.7656 6.97266 24.7656 4.88672C24.7656 2.8125 23.0781 1.11328 20.9805 1.11328C18.9062 1.11328 17.207 2.8125 17.207 4.88672C17.207 6.97266 18.9062 8.67187 20.9805 8.67187Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36643">
<rect width="20.7656" height="25.957" fill="currentColor" transform="translate(4 1.11328)"/>
</clipPath>
</defs>
</svg>

`;

export const PointBottomleftForwardToPointToprightScurvepathFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
