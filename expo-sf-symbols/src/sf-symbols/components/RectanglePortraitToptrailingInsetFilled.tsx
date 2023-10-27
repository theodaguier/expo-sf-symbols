
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
<g clip-path="url(#clip0_2207_34279)">
<path d="M4.04199 22.5786C4.04199 25.0278 5.24902 26.2466 7.6748 26.2466H20.1201C22.5459 26.2466 23.7529 25.0278 23.7529 22.5786V4.80127C23.7529 2.36377 22.5459 1.12158 20.1201 1.12158H7.6748C5.24902 1.12158 4.04199 2.36377 4.04199 4.80127V22.5786ZM5.92871 22.5435V4.83642C5.92871 3.66455 6.5498 3.0083 7.76855 3.0083H20.0264C21.2451 3.0083 21.8662 3.66455 21.8662 4.83642V22.5435C21.8662 23.7154 21.2451 24.3599 20.0264 24.3599H7.76855C6.5498 24.3599 5.92871 23.7154 5.92871 22.5435Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M14.9522 13.6841H19.2178C19.9678 13.6841 20.2608 13.3911 20.2608 12.6528V5.64502C20.2608 4.90674 19.9678 4.61377 19.2178 4.61377H14.9522C14.2022 4.61377 13.8975 4.90674 13.8975 5.64502V12.6528C13.8975 13.3911 14.2022 13.6841 14.9522 13.6841Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34279">
<rect width="19.7109" height="25.1367" fill="currentColor" transform="translate(4.04199 1.12158)"/>
</clipPath>
</defs>
</svg>

`;

export const RectanglePortraitToptrailingInsetFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
