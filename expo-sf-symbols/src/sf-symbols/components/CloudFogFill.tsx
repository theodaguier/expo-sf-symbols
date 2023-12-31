
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
<g clip-path="url(#clip0_2207_33711)">
<path d="M22.1719 25.4944H6.92578C6.51563 25.4944 6.1875 25.8108 6.1875 26.2327C6.1875 26.6546 6.51563 26.9827 6.92578 26.9827H22.1719C22.582 26.9827 22.9102 26.6546 22.9102 26.2327C22.9102 25.8108 22.582 25.4944 22.1719 25.4944Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M22.1719 21.5218H6.92578C6.51563 21.5218 6.1875 21.8382 6.1875 22.26C6.1875 22.6819 6.51563 22.9983 6.92578 22.9983H22.1719C22.582 22.9983 22.9102 22.6819 22.9102 22.26C22.9102 21.8382 22.582 21.5218 22.1719 21.5218Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M6.5625 18.803H21.1055C24.9492 18.803 27.8086 15.885 27.8086 12.2757C27.8086 8.53735 24.7617 5.80688 20.7891 5.80688C19.3242 2.91235 16.6055 1.04907 13.2188 1.04907C8.8125 1.04907 5.17969 4.5061 4.79297 8.85376C2.67188 9.47485 1.05469 11.3147 1.05469 13.7874C1.05469 16.5647 3.07031 18.803 6.5625 18.803Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33711">
<rect width="26.7539" height="26.8477" fill="currentColor" transform="translate(1.05469 1.04907)"/>
</clipPath>
</defs>
</svg>

`;

export const CloudFogFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
