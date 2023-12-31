
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
<g clip-path="url(#clip0_2207_36730)">
<path d="M13.9265 26.6674C17.7586 26.6674 20.7351 24.1479 20.7351 20.9135C20.7351 17.6674 17.7586 15.1479 13.9265 15.1479C10.071 15.1479 7.09448 17.6674 7.09448 20.9135C7.09448 24.1479 10.071 26.6674 13.9265 26.6674ZM13.9265 24.7808C11.1375 24.7808 8.9812 23.0932 8.9812 20.9135C8.9812 18.7221 11.1375 17.0346 13.9265 17.0346C16.7156 17.0346 18.8484 18.7221 18.8484 20.9135C18.8484 23.0932 16.7156 24.7808 13.9265 24.7808Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.8796 23.4096C15.3679 23.4096 16.5867 22.4956 16.5867 21.1948V7.72998H11.1843V21.1948C11.1843 22.4956 12.4148 23.4096 13.8796 23.4096Z" fill="currentColor"/>
<path d="M13.8796 22.0385C14.6179 22.0385 15.2273 21.687 15.2273 21.1948V9.10107H12.5554V21.1948C12.5554 21.687 13.1414 22.0385 13.8796 22.0385ZM13.8796 12.0776C16.657 12.0776 18.8953 9.81592 18.8953 7.02685C18.8953 4.26123 16.6335 2.01123 13.8796 2.01123C11.1023 2.01123 8.82886 4.28467 8.82886 7.02685C8.82886 9.83935 11.1023 12.0776 13.8796 12.0776Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36730">
<rect width="13.6406" height="24.668" fill="currentColor" transform="translate(7.09448 2.01123)"/>
</clipPath>
</defs>
</svg>

`;

export const ArcadeStick = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
