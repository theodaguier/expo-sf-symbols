
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
<g clip-path="url(#clip0_2207_36844)">
<path d="M9.86145 4.1543C3.06458 4.1543 0.0294189 7.28321 0.0294189 13.6816V21.0293C0.0294189 23.3965 1.24817 24.5918 3.62708 24.5918H23.4669C25.8458 24.5918 27.0646 23.3848 27.0646 21.0293V13.6816C27.0646 7.28321 24.0294 4.1543 17.2325 4.1543H9.86145Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.54895 19.1309C8.04504 19.1309 7.69348 18.8379 7.69348 18.3223C7.69348 18.0645 7.75208 17.8652 7.88098 17.6309L11.3849 11.1973V11.1387H8.42004C8.02161 11.1387 7.69348 10.8106 7.69348 10.4238C7.69348 10.0371 8.02161 9.72071 8.42004 9.72071H12.4161C12.9317 9.72071 13.2716 10.0488 13.2716 10.541C13.2716 10.8223 13.1778 10.9981 13.0606 11.2207L9.59192 17.6309V17.7129H12.7091C13.0958 17.7129 13.4239 18.041 13.4239 18.416C13.4239 18.8027 13.0958 19.1309 12.7091 19.1309H8.54895ZM15.7442 19.0957C15.2169 19.0957 14.9122 18.7559 14.9122 18.2051V10.4004C14.9122 9.93164 15.2989 9.54492 15.7677 9.54492C16.213 9.54492 16.5997 9.93164 16.5997 10.4004V17.666H19.0841C19.4708 17.666 19.7989 17.9941 19.7989 18.3809C19.7989 18.7676 19.4708 19.0957 19.0841 19.0957H15.7442Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_36844">
<rect width="27.0352" height="20.4492" fill="currentColor" transform="translate(0.0294189 4.1543)"/>
</clipPath>
</defs>
</svg>

`;

export const ZlButtonRoundedtopHorizontalFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
