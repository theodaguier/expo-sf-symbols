
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
<g clip-path="url(#clip0_2207_34026)">
<path d="M14.0141 26.0351C20.5532 26.0351 25.9672 20.6094 25.9672 14.082C25.9672 7.54297 20.5415 2.12891 14.0024 2.12891C7.47509 2.12891 2.06104 7.54297 2.06104 14.082C2.06104 20.6094 7.48682 26.0351 14.0141 26.0351ZM14.0141 24.043C8.48292 24.043 4.06495 19.6133 4.06495 14.082C4.06495 8.55079 8.47119 4.1211 14.0024 4.1211C19.5337 4.1211 23.9751 8.55079 23.9751 14.082C23.9751 19.6133 19.5454 24.043 14.0141 24.043Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M14.0258 17.668C15.9946 17.668 17.6235 16.0508 17.6235 14.0703C17.6235 12.0898 15.9946 10.4727 14.0258 10.4727C12.0454 10.4727 10.4165 12.0898 10.4165 14.0703C10.4165 16.0508 12.0454 17.668 14.0258 17.668Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34026">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.06104 2.12891)"/>
</clipPath>
</defs>
</svg>

`;

export const SmallcircleFilledCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
