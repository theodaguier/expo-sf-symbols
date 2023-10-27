
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="29" height="28" viewBox="0 0 29 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_37932)">
<path d="M14.0498 25.9062C20.5889 25.9062 26.0029 20.4805 26.0029 13.9531C26.0029 7.41406 20.5772 2 14.0381 2C7.51074 2 2.09668 7.41406 2.09668 13.9531C2.09668 20.4805 7.52246 25.9062 14.0498 25.9062Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M14.7061 19.707C14.0967 19.707 13.7451 19.2969 13.7451 18.6172V10.3086H13.6631L12.1045 11.3398C11.8232 11.5273 11.6943 11.5508 11.5068 11.5508C11.1201 11.5508 10.8154 11.1992 10.8154 10.8242C10.8154 10.5195 10.9326 10.3437 11.1904 10.1445L13.3701 8.66797C13.8858 8.31641 14.2022 8.19922 14.6592 8.19922C15.3037 8.19922 15.6787 8.58594 15.6787 9.28906V18.6172C15.6787 19.2969 15.3272 19.707 14.7061 19.707Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37932">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.09668 2)"/>
</clipPath>
</defs>
</svg>

`;

export const 1CircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
