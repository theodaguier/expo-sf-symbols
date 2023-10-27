
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
<g clip-path="url(#clip0_2207_37608)">
<path d="M13.9909 25.93C20.53 25.93 25.944 20.5043 25.944 13.9769C25.944 7.43786 20.5183 2.0238 13.9792 2.0238C7.4519 2.0238 2.03784 7.43786 2.03784 13.9769C2.03784 20.5043 7.46362 25.93 13.9909 25.93ZM13.9909 23.9379C8.45972 23.9379 4.04175 19.5082 4.04175 13.9769C4.04175 8.44568 8.448 4.01599 13.9792 4.01599C19.5105 4.01599 23.9519 8.44568 23.9519 13.9769C23.9519 19.5082 19.5222 23.9379 13.9909 23.9379Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.3582 18.3949C13.6395 18.8871 14.3191 18.9105 14.6238 18.3949L18.5496 11.7269C18.8777 11.1761 18.6317 10.5551 18.0691 10.5551H9.90115C9.33865 10.5551 9.10428 11.223 9.40896 11.7269L13.3582 18.3949Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37608">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.03784 2.0238)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowtriangleDownCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
