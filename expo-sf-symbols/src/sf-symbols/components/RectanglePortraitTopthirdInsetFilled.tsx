
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
<g clip-path="url(#clip0_2207_34269)">
<path d="M4.03992 22.5786C4.03992 25.0278 5.24695 26.2466 7.67273 26.2466H20.118C22.5438 26.2466 23.7508 25.0278 23.7508 22.5786V4.80127C23.7508 2.36377 22.5438 1.12158 20.118 1.12158H7.67273C5.24695 1.12158 4.03992 2.36377 4.03992 4.80127V22.5786ZM5.92664 22.5435V4.83642C5.92664 3.66455 6.54773 3.0083 7.76648 3.0083H20.0243C21.243 3.0083 21.8641 3.66455 21.8641 4.83642V22.5435C21.8641 23.7154 21.243 24.3599 20.0243 24.3599H7.76648C6.54773 24.3599 5.92664 23.7154 5.92664 22.5435Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.57507 10.6606H19.2157C19.9657 10.6606 20.2587 10.3794 20.2587 9.64111V5.64502C20.2587 4.90674 19.9657 4.61377 19.2157 4.61377H8.57507C7.83679 4.61377 7.5321 4.90674 7.5321 5.64502V9.64111C7.5321 10.3794 7.83679 10.6606 8.57507 10.6606Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34269">
<rect width="19.7109" height="25.1367" fill="currentColor" transform="translate(4.03992 1.12158)"/>
</clipPath>
</defs>
</svg>

`;

export const RectanglePortraitTopthirdInsetFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
