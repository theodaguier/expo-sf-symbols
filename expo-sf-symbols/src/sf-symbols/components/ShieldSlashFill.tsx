
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
<g clip-path="url(#clip0_2207_34415)">
<path d="M14.7409 26.3901C14.9284 26.3901 15.2098 26.3198 15.5145 26.1675C22.1824 22.6753 24.327 20.9292 24.327 16.7222V7.88623C24.327 6.6792 23.7995 6.29248 22.827 5.88232C21.4559 5.31982 17.073 3.72607 15.702 3.25732C15.3973 3.15186 15.069 3.09326 14.7409 3.09326C14.4128 3.09326 14.0847 3.16357 13.7683 3.25732C12.3972 3.70264 8.02612 5.33154 6.65503 5.88232C5.67065 6.28076 5.15503 6.6792 5.15503 7.88623V16.7222C5.15503 20.9292 7.41674 22.4761 13.9676 26.1675C14.2605 26.3315 14.5534 26.3901 14.7409 26.3901Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M23.6473 26.8707C24.5379 27.7496 25.9793 27.7613 26.8582 26.8707C27.7371 25.9918 27.7488 24.5621 26.8582 23.6598L4.97927 1.79255C4.10037 0.913641 2.67068 0.901922 1.76834 1.76911C0.877715 2.6363 0.865996 4.12458 1.75662 5.00349L23.6473 26.8707Z" fill="currentColor"/>
<path d="M24.6199 25.9097C24.9715 26.2612 25.5457 26.2612 25.8973 25.9097C26.2371 25.5581 26.2488 24.9839 25.8973 24.6323L4.00659 2.75342C3.65503 2.41357 3.08081 2.41357 2.71753 2.75342C2.37768 3.09326 2.37768 3.69092 2.71753 4.03076L24.6199 25.9097Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34415">
<rect width="26.4273" height="26.8683" fill="currentColor" transform="translate(1.09448 1.12598)"/>
</clipPath>
</defs>
</svg>

`;

export const ShieldSlashFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
