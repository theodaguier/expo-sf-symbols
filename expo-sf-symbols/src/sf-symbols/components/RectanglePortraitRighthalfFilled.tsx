
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="28" height="29" viewBox="0 0 28 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_34259)">
<path d="M4.0083 22.5786C4.0083 25.0278 5.21533 26.2466 7.64111 26.2466H20.0864C22.5122 26.2466 23.7192 25.0278 23.7192 22.5786V4.80127C23.7192 2.36377 22.5122 1.12158 20.0864 1.12158H7.64111C5.21533 1.12158 4.0083 2.36377 4.0083 4.80127V22.5786ZM5.89502 22.5435V4.83642C5.89502 3.66455 6.51611 3.0083 7.73486 3.0083H13.8638V24.3599H7.73486C6.51611 24.3599 5.89502 23.7154 5.89502 22.5435Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34259">
<rect width="19.7109" height="25.1367" fill="currentColor" transform="translate(4.0083 1.12158)"/>
</clipPath>
</defs>
</svg>

`;

export const RectanglePortraitRighthalfFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
