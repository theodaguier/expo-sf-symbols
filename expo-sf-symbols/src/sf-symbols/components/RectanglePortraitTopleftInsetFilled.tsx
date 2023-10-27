
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
<g clip-path="url(#clip0_2207_34276)">
<path d="M4.03564 22.5786C4.03564 25.0278 5.24267 26.2466 7.66845 26.2466H20.1137C22.5395 26.2466 23.7465 25.0278 23.7465 22.5786V4.80127C23.7465 2.36377 22.5395 1.12158 20.1137 1.12158H7.66845C5.24267 1.12158 4.03564 2.36377 4.03564 4.80127V22.5786ZM5.92236 22.5435V4.83642C5.92236 3.66455 6.54345 3.0083 7.7622 3.0083H20.02C21.2387 3.0083 21.8598 3.66455 21.8598 4.83642V22.5435C21.8598 23.7154 21.2387 24.3599 20.02 24.3599H7.7622C6.54345 24.3599 5.92236 23.7154 5.92236 22.5435Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.5708 13.6841H12.8364C13.5864 13.6841 13.8911 13.3911 13.8911 12.6528V5.64502C13.8911 4.90674 13.5864 4.61377 12.8364 4.61377H8.5708C7.83252 4.61377 7.52783 4.90674 7.52783 5.64502V12.6528C7.52783 13.3911 7.83252 13.6841 8.5708 13.6841Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34276">
<rect width="19.7109" height="25.1367" fill="currentColor" transform="translate(4.03564 1.12158)"/>
</clipPath>
</defs>
</svg>

`;

export const RectanglePortraitTopleftInsetFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
