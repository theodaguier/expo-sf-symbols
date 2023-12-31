
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
<g clip-path="url(#clip0_2207_34260)">
<path d="M4.02942 22.5786C4.02942 25.0278 5.23645 26.2466 7.66223 26.2466H20.1075C22.5333 26.2466 23.7403 25.0278 23.7403 22.5786V4.80127C23.7403 2.36377 22.5333 1.12158 20.1075 1.12158H7.66223C5.23645 1.12158 4.02942 2.36377 4.02942 4.80127V22.5786ZM5.91614 22.5435V13.6841H21.8536V22.5435C21.8536 23.7154 21.2325 24.3599 20.0138 24.3599H7.75598C6.53723 24.3599 5.91614 23.7154 5.91614 22.5435Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34260">
<rect width="19.7109" height="25.1367" fill="currentColor" transform="translate(4.02942 1.12158)"/>
</clipPath>
</defs>
</svg>

`;

export const RectanglePortraitTophalfFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
