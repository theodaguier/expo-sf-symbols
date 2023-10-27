
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
<g clip-path="url(#clip0_2207_37145)">
<path d="M9.15039 22.4395C9.81836 22.4395 10.252 22.0176 10.252 21.3496V16.4863L12.2441 14.3652L18.6192 21.8535C18.9942 22.2871 19.252 22.4395 19.6504 22.4395C20.2715 22.4395 20.7168 22.0176 20.7168 21.4434C20.7168 21.1504 20.5762 20.8574 20.2949 20.5293L13.7793 12.8301L19.6621 6.7832C19.8965 6.5371 20.002 6.31445 20.002 6.05664C20.002 5.5293 19.5684 5.11914 19.0293 5.11914C18.7129 5.11914 18.4668 5.21289 18.1621 5.5293L10.3574 13.709H10.252V6.19726C10.252 5.54102 9.81836 5.11914 9.15039 5.11914C8.49414 5.11914 8.08398 5.54102 8.08398 6.19726V21.3496C8.08398 22.0176 8.49414 22.4395 9.15039 22.4395Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37145">
<rect width="12.6328" height="17.3555" fill="currentColor" transform="translate(8.08398 5.08398)"/>
</clipPath>
</defs>
</svg>

`;

export const K = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
