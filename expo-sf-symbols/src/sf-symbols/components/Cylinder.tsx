
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
<g clip-path="url(#clip0_2207_36935)">
<path d="M14.0969 26.7446C20.1438 26.7446 24.175 24.4594 24.175 21.2251V7.04541H22.2883V21.2251C22.2883 23.393 19.0071 24.9751 14.0969 24.9751C9.18677 24.9751 5.90552 23.393 5.90552 21.2251V7.04541H4.0188V21.2251C4.0188 24.4594 8.05005 26.7446 14.0969 26.7446ZM14.0969 12.0259C20.1438 12.0259 24.175 9.99853 24.175 7.04541C24.175 4.09228 20.1438 2.05322 14.0969 2.05322C8.05005 2.05322 4.0188 4.09228 4.0188 7.04541C4.0188 9.99853 8.05005 12.0259 14.0969 12.0259ZM14.0969 10.2563C9.18677 10.2563 5.90552 8.93213 5.90552 7.04541C5.90552 5.07666 9.18677 3.70556 14.0969 3.70556C19.0071 3.70556 22.2883 5.07666 22.2883 7.04541C22.2883 8.93213 19.0071 10.2563 14.0969 10.2563Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36935">
<rect width="20.1562" height="24.7148" fill="currentColor" transform="translate(4.0188 2.05322)"/>
</clipPath>
</defs>
</svg>

`;

export const Cylinder = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
