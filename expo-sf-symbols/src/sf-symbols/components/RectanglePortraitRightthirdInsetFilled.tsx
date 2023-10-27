
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
<g clip-path="url(#clip0_2207_34272)">
<path d="M4.0127 22.5786C4.0127 25.0278 5.21973 26.2466 7.64551 26.2466H20.0908C22.5166 26.2466 23.7236 25.0278 23.7236 22.5786V4.80127C23.7236 2.36377 22.5166 1.12158 20.0908 1.12158H7.64551C5.21973 1.12158 4.0127 2.36377 4.0127 4.80127V22.5786ZM5.89942 22.5435V4.83642C5.89942 3.66455 6.52051 3.0083 7.73926 3.0083H19.9971C21.2158 3.0083 21.8369 3.66455 21.8369 4.83642V22.5435C21.8369 23.7154 21.2158 24.3599 19.9971 24.3599H7.73926C6.52051 24.3599 5.89942 23.7154 5.89942 22.5435Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M17.0439 22.7661H19.1885C19.9385 22.7661 20.2315 22.4732 20.2315 21.7349V5.64502C20.2315 4.90674 19.9385 4.61377 19.1885 4.61377H17.0439C16.2939 4.61377 15.9893 4.90674 15.9893 5.64502V21.7349C15.9893 22.4732 16.2939 22.7661 17.0439 22.7661Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34272">
<rect width="19.7109" height="25.1367" fill="currentColor" transform="translate(4.0127 1.12158)"/>
</clipPath>
</defs>
</svg>

`;

export const RectanglePortraitRightthirdInsetFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
