
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
<g clip-path="url(#clip0_2207_36850)">
<path d="M9.90137 24.5229H17.2724C24.0693 24.5229 27.1045 21.394 27.1045 14.9956V7.63623C27.1045 5.28076 25.8857 4.08545 23.5068 4.08545H3.667C1.28809 4.08545 0.0693359 5.28076 0.0693359 7.63623V14.9956C0.0693359 21.394 3.1045 24.5229 9.90137 24.5229Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.6709 19.2964C11.0498 19.2964 10.6982 18.8628 10.6982 18.2183V10.2378C10.6982 9.59326 11.0498 9.13623 11.6709 9.13623C12.292 9.13623 12.6904 9.58154 12.6904 10.2378V17.6324H16.4052C16.8623 17.6324 17.2724 17.9839 17.2724 18.4761C17.2724 18.9683 16.874 19.2964 16.4052 19.2964H11.6709Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_36850">
<rect width="27.0352" height="20.4492" fill="currentColor" transform="translate(0.0693359 4.08545)"/>
</clipPath>
</defs>
</svg>

`;

export const LButtonRoundedbottomHorizontalFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
