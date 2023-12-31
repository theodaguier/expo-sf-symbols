
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
<g clip-path="url(#clip0_2207_34274)">
<path d="M4.04614 22.5786C4.04614 25.0278 5.25317 26.2466 7.67895 26.2466H20.1242C22.55 26.2466 23.757 25.0278 23.757 22.5786V4.80127C23.757 2.36377 22.55 1.12158 20.1242 1.12158H7.67895C5.25317 1.12158 4.04614 2.36377 4.04614 4.80127V22.5786ZM5.93286 22.5435V4.83642C5.93286 3.66455 6.55395 3.0083 7.7727 3.0083H20.0305C21.2492 3.0083 21.8703 3.66455 21.8703 4.83642V22.5435C21.8703 23.7154 21.2492 24.3599 20.0305 24.3599H7.7727C6.55395 24.3599 5.93286 23.7154 5.93286 22.5435Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M17.0773 22.7661H19.2219C19.9719 22.7661 20.2649 22.4732 20.2649 21.7349V5.64502C20.2649 4.90674 19.9719 4.61377 19.2219 4.61377H17.0773C16.3273 4.61377 16.0227 4.90674 16.0227 5.64502V21.7349C16.0227 22.4732 16.3273 22.7661 17.0773 22.7661Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34274">
<rect width="19.7109" height="25.1367" fill="currentColor" transform="translate(4.04614 1.12158)"/>
</clipPath>
</defs>
</svg>

`;

export const RectanglePortraitTrailingthirdInsetFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
