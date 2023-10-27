
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
<g clip-path="url(#clip0_2207_33183)">
<path d="M13.9699 25.9384C20.509 25.9384 25.923 20.5127 25.923 13.9853C25.923 7.44629 20.4973 2.03223 13.9582 2.03223C7.43091 2.03223 2.01685 7.44629 2.01685 13.9853C2.01685 20.5127 7.44263 25.9384 13.9699 25.9384ZM13.9699 23.9463C8.43873 23.9463 4.02076 19.5166 4.02076 13.9853C4.02076 8.45411 8.42701 4.02442 13.9582 4.02442C19.4895 4.02442 23.9309 8.45411 23.9309 13.9853C23.9309 19.5166 19.5012 23.9463 13.9699 23.9463Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.4895 20.1963C10.7942 20.1963 10.97 20.0205 11.509 19.4931L13.8996 17.1377C13.9348 17.1025 13.9816 17.1025 14.0168 17.1377L16.4191 19.4931C16.9465 20.0205 17.1223 20.1963 17.427 20.1963C17.8137 20.1963 18.0598 19.915 18.0598 19.4463V9.57911C18.0598 8.44239 17.4738 7.84473 16.3371 7.84473H11.5793C10.4426 7.84473 9.85669 8.44239 9.85669 9.57911V19.4463C9.85669 19.915 10.1028 20.1963 10.4895 20.1963Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33183">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.01685 2.03223)"/>
</clipPath>
</defs>
</svg>

`;

export const BookmarkCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
