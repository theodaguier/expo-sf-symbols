
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
<g clip-path="url(#clip0_2207_34181)">
<path d="M3.76782 24.6933H24.0412C26.5022 24.6933 27.7209 23.4863 27.7209 21.0722V6.75195C27.7209 4.33789 26.5022 3.11914 24.0412 3.11914H3.76782C1.3186 3.11914 0.0881348 4.33789 0.0881348 6.75195V21.0722C0.0881348 23.4863 1.3186 24.6933 3.76782 24.6933ZM3.79125 22.8066C2.61938 22.8066 1.97485 22.1855 1.97485 20.9668V6.85742C1.97485 5.63867 2.61938 5.00586 3.79125 5.00586H24.0178C25.1779 5.00586 25.8342 5.63867 25.8342 6.85742V20.9668C25.8342 22.1855 25.1779 22.8066 24.0178 22.8066H3.79125Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M4.59985 21.2129H23.2092C23.8654 21.2129 24.2404 20.8261 24.2404 20.1582V7.66602C24.2404 6.99805 23.8654 6.61133 23.2092 6.61133H4.59985C3.9436 6.61133 3.58032 6.99805 3.58032 7.66602V20.1582C3.58032 20.8261 3.9436 21.2129 4.59985 21.2129Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34181">
<rect width="27.6328" height="21.5742" fill="currentColor" transform="translate(0.0881348 3.11914)"/>
</clipPath>
</defs>
</svg>

`;

export const RectangleInsetFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
