
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
<g clip-path="url(#clip0_2207_34277)">
<path d="M4.03784 22.5786C4.03784 25.0278 5.24487 26.2466 7.67065 26.2466H20.1159C22.5417 26.2466 23.7487 25.0278 23.7487 22.5786V4.80127C23.7487 2.36377 22.5417 1.12158 20.1159 1.12158H7.67065C5.24487 1.12158 4.03784 2.36377 4.03784 4.80127V22.5786ZM5.92456 22.5435V4.83642C5.92456 3.66455 6.54565 3.0083 7.7644 3.0083H20.0222C21.2409 3.0083 21.862 3.66455 21.862 4.83642V22.5435C21.862 23.7154 21.2409 24.3599 20.0222 24.3599H7.7644C6.54565 24.3599 5.92456 23.7154 5.92456 22.5435Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M14.948 13.6841H19.2136C19.9636 13.6841 20.2566 13.3911 20.2566 12.6528V5.64502C20.2566 4.90674 19.9636 4.61377 19.2136 4.61377H14.948C14.198 4.61377 13.8933 4.90674 13.8933 5.64502V12.6528C13.8933 13.3911 14.198 13.6841 14.948 13.6841Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34277">
<rect width="19.7109" height="25.1367" fill="currentColor" transform="translate(4.03784 1.12158)"/>
</clipPath>
</defs>
</svg>

`;

export const RectanglePortraitToprightInsetFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
