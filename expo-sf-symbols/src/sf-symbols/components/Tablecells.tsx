
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
<g clip-path="url(#clip0_2207_34175)">
<path d="M0.570556 11.5898H27.2542V9.70312H0.570556V11.5898ZM0.570556 18.164H27.2542V16.2773H0.570556V18.164ZM12.9104 24.1875H14.7971V3.67969H12.9104V24.1875ZM3.71118 24.7148H23.9846C26.4456 24.7148 27.6643 23.5078 27.6643 21.0937V6.77344C27.6643 4.35938 26.4456 3.14062 23.9846 3.14062H3.71118C1.26196 3.14062 0.0314941 4.35938 0.0314941 6.77344V21.0937C0.0314941 23.5078 1.26196 24.7148 3.71118 24.7148ZM3.73461 22.8281C2.56274 22.8281 1.91821 22.207 1.91821 20.9883V6.87891C1.91821 5.66016 2.56274 5.02734 3.73461 5.02734H23.9612C25.1213 5.02734 25.7776 5.66016 25.7776 6.87891V20.9883C25.7776 22.207 25.1213 22.8281 23.9612 22.8281H3.73461Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34175">
<rect width="27.6328" height="21.5742" fill="currentColor" transform="translate(0.0314941 3.14062)"/>
</clipPath>
</defs>
</svg>

`;

export const Tablecells = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
