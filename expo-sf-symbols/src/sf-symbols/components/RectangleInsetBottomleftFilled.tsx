
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
<g clip-path="url(#clip0_2207_34204)">
<path d="M3.76172 24.6933H24.0351C26.4961 24.6933 27.7148 23.4863 27.7148 21.0722V6.75195C27.7148 4.33789 26.4961 3.11914 24.0351 3.11914H3.76172C1.3125 3.11914 0.0820312 4.33789 0.0820312 6.75195V21.0722C0.0820312 23.4863 1.3125 24.6933 3.76172 24.6933ZM3.78515 22.8066C2.61328 22.8066 1.96875 22.1855 1.96875 20.9668V6.85742C1.96875 5.63867 2.61328 5.00586 3.78515 5.00586H24.0117C25.1718 5.00586 25.8281 5.63867 25.8281 6.85742V20.9668C25.8281 22.1855 25.1718 22.8066 24.0117 22.8066H3.78515Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M4.59375 21.213H12.8672C13.6054 21.213 13.8984 20.9083 13.8984 20.1583V14.9551C13.8984 14.2051 13.6054 13.9004 12.8672 13.9004H4.59375C3.86719 13.9004 3.57422 14.2051 3.57422 14.9551V20.1583C3.57422 20.9083 3.86719 21.213 4.59375 21.213Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34204">
<rect width="27.6328" height="21.5742" fill="currentColor" transform="translate(0.0820312 3.11914)"/>
</clipPath>
</defs>
</svg>

`;

export const RectangleInsetBottomleftFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
