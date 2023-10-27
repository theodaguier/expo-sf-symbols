
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
<g clip-path="url(#clip0_2207_37086)">
<path d="M11.5722 24.9717C12.0644 24.9717 12.4511 24.5615 12.4511 24.0693V4.00684C12.4511 3.51465 12.0644 3.11621 11.5722 3.11621C11.08 3.11621 10.6816 3.51465 10.6816 4.00684V24.0693C10.6816 24.5615 11.08 24.9717 11.5722 24.9717ZM17.4199 24.9717C17.9121 24.9717 18.2988 24.5615 18.2988 24.0693V4.00684C18.2988 3.51465 17.9121 3.11621 17.4199 3.11621C16.9277 3.11621 16.5292 3.51465 16.5292 4.00684V24.0693C16.5292 24.5615 16.9277 24.9717 17.4199 24.9717Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M4.45907 17.6357C5.32626 18.1982 6.31063 17.8818 6.29892 16.8389V11.2842C6.31063 10.2061 5.36142 9.86621 4.45907 10.4756L0.591881 13.1123C-0.0760875 13.581 -0.111244 14.5771 0.591881 15.0459L4.45907 17.6357ZM24.5215 17.6357L28.4004 15.0459C29.0918 14.5771 29.0684 13.5693 28.4004 13.1123L24.5215 10.4756C23.6192 9.86621 22.6934 10.2061 22.6934 11.2842V16.8389C22.6934 17.8818 23.6661 18.21 24.5215 17.6357Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37086">
<rect width="28.8326" height="21.9258" fill="currentColor" transform="translate(0.0776367 3.11621)"/>
</clipPath>
</defs>
</svg>

`;

export const Quotelevel = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
