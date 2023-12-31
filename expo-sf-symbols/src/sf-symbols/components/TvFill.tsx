
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="30" height="29" viewBox="0 0 30 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_35692)">
<path d="M3.05371 21.5996H26.3272C28.3311 21.5996 29.3389 20.627 29.3389 18.5879V5.1582C29.3389 3.11914 28.3311 2.14648 26.3272 2.14648H3.05371C1.06152 2.14648 0.0419922 3.11914 0.0419922 5.1582V18.5879C0.0419922 20.627 1.06152 21.5996 3.05371 21.5996ZM8.7959 25.5723H20.585C21.1006 25.5723 21.5342 25.1504 21.5342 24.6231C21.5342 24.0957 21.1006 23.6738 20.585 23.6738H8.7959C8.28027 23.6738 7.84668 24.0957 7.84668 24.6231C7.84668 25.1504 8.28027 25.5723 8.7959 25.5723Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35692">
<rect width="29.2969" height="23.4492" fill="currentColor" transform="translate(0.0419922 2.14648)"/>
</clipPath>
</defs>
</svg>

`;

export const TvFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
