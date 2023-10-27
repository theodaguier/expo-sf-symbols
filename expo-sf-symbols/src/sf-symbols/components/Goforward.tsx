
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
<g clip-path="url(#clip0_2207_33936)">
<path d="M2.08398 14.2958C2.08398 20.8349 7.50976 26.249 14.0371 26.249C20.5762 26.249 25.9902 20.8349 25.9902 14.2958C25.9902 10.3583 23.9981 6.81929 20.9863 4.62788C20.4707 4.22944 19.8262 4.35835 19.5332 4.83882C19.2402 5.331 19.3926 5.88179 19.8731 6.24507C22.3692 8.02632 23.9863 10.9677 23.9981 14.2958C24.0098 19.8271 19.5684 24.2568 14.0371 24.2568C8.50586 24.2568 4.08789 19.8271 4.08789 14.2958C4.08789 9.54975 7.3457 5.61225 11.7754 4.60444V6.28022C11.7754 7.11225 12.3496 7.33491 12.9942 6.87788L16.7324 4.25288C17.2598 3.8896 17.2715 3.3271 16.7324 2.94038L13.0059 0.315379C12.3496 -0.153371 11.7754 0.0692844 11.7754 0.913034V2.56538C6.29101 3.6435 2.08398 8.53022 2.08398 14.2958Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33936">
<rect width="23.9062" height="28.455" fill="currentColor" transform="translate(2.08398 0.0742188)"/>
</clipPath>
</defs>
</svg>

`;

export const Goforward = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
