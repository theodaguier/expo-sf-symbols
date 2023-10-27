
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
<g clip-path="url(#clip0_2207_36854)">
<path d="M9.91406 24.5537H17.2851C24.082 24.5537 27.1172 21.4248 27.1172 15.0264V7.66699C27.1172 5.31152 25.8984 4.11621 23.5195 4.11621H3.67969C1.30078 4.11621 0.0820312 5.31152 0.0820312 7.66699V15.0264C0.0820312 21.4248 3.11719 24.5537 9.91406 24.5537Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.8984 19.3271C10.2773 19.3271 9.92578 18.8935 9.92578 18.249V10.2803C9.92578 9.63574 10.2656 9.16699 10.8984 9.16699H13.957C16.207 9.16699 17.6718 10.4795 17.6718 12.4717C17.6718 13.7959 16.8632 14.9443 15.6679 15.4131L17.1679 17.7685C17.332 17.9795 17.414 18.2139 17.414 18.46C17.414 18.9639 17.0039 19.3271 16.4531 19.3271C16.0312 19.3271 15.7265 19.1514 15.457 18.7178L13.6875 15.7295H11.9414V18.249C11.9414 18.9053 11.5547 19.3271 10.8984 19.3271ZM11.9414 14.1709H13.7226C14.9531 14.1709 15.6797 13.6201 15.6797 12.5186C15.6797 11.4053 14.9179 10.7725 13.7578 10.7725H11.9414V14.1709Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_36854">
<rect width="27.0352" height="20.4492" fill="currentColor" transform="translate(0.0820312 4.11621)"/>
</clipPath>
</defs>
</svg>

`;

export const RButtonRoundedbottomHorizontalFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
