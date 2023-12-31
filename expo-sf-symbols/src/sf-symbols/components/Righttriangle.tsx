
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
<g clip-path="url(#clip0_2207_33986)">
<path d="M4.74804 24.166H23.1113C24.5059 24.166 25.1387 23.5332 25.1387 22.1386V3.77539C25.1387 2.75586 24.4824 2.12305 23.4981 2.12305C22.877 2.12305 22.4317 2.4043 21.9746 2.86133L3.82227 21.0136C3.37695 21.4707 3.08398 21.9042 3.08398 22.5371C3.08398 23.5214 3.7168 24.166 4.74804 24.166ZM5.75586 22.2558C5.6621 22.2558 5.59179 22.2089 5.59179 22.1269C5.59179 22.0918 5.60351 22.0449 5.67382 21.9863L22.9473 4.70117C23.0059 4.64258 23.0528 4.61914 23.0996 4.61914C23.1817 4.61914 23.2168 4.68946 23.2168 4.78321V21.9042C23.2168 22.1738 23.1465 22.2558 22.8652 22.2558H5.75586Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33986">
<rect width="22.0547" height="24.4805" fill="currentColor" transform="translate(3.08398 2.12305)"/>
</clipPath>
</defs>
</svg>

`;

export const Righttriangle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
