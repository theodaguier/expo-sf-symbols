
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="29" height="30" viewBox="0 0 29 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_36557)">
<path d="M8.4309 13.5996H19.927C20.9699 13.5996 21.5793 13.0136 21.5793 11.9824V3.60352C21.5793 2.57227 20.9699 1.97461 19.927 1.97461H8.4309C7.38793 1.97461 6.77856 2.57227 6.77856 3.60352V11.9824C6.77856 13.0136 7.38793 13.5996 8.4309 13.5996Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M6.64966 22.0957H21.7199C24.052 22.0957 25.5871 20.5722 25.5871 18.2636V7.30664C25.5871 4.98633 24.052 3.47461 21.7199 3.47461H6.64966C4.31763 3.47461 2.77076 4.98633 2.77076 7.30664V18.2636C2.77076 20.5722 4.31763 22.0957 6.64966 22.0957Z" fill="currentColor"/>
<path d="M6.52076 20.5019H21.8488C23.2199 20.5019 23.9934 19.7402 23.9934 18.3925V7.17774C23.9934 5.83008 23.2199 5.06836 21.8488 5.06836H6.52076C5.14966 5.06836 4.36451 5.83008 4.36451 7.17774V18.3925C4.36451 19.7402 5.14966 20.5019 6.52076 20.5019Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M5.58326 29.8066H22.7746C26.2668 29.8066 28.341 27.7558 28.341 24.2871V12.2519C28.341 8.7832 26.2668 6.73242 22.7746 6.73242H5.58326C2.09107 6.73242 0.0168457 8.7832 0.0168457 12.2519V24.2871C0.0168457 27.7558 2.09107 29.8066 5.58326 29.8066Z" fill="currentColor"/>
<path d="M5.58326 27.92H22.7746C25.2238 27.92 26.4543 26.7012 26.4543 24.2872V12.252C26.4543 9.83789 25.2238 8.61914 22.7746 8.61914H5.58326C3.13404 8.61914 1.90357 9.83789 1.90357 12.252V24.2872C1.90357 26.7012 3.13404 27.92 5.58326 27.92Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36557">
<rect width="28.3242" height="29.6836" fill="currentColor" transform="translate(0.0168457 0.123047)"/>
</clipPath>
</defs>
</svg>

`;

export const RectangleStackFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
