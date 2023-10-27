
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
<g clip-path="url(#clip0_2207_34406)">
<path d="M14.1907 26.123C14.8352 26.123 15.1516 25.6894 15.8196 24.7988L22.8157 15.4589C23.1321 15.0253 23.3196 14.5918 23.3196 14.123C23.3196 13.6425 23.1321 13.2207 22.8157 12.7871L15.8196 3.43555C15.1516 2.55664 14.8352 2.12305 14.1907 2.12305C13.5461 2.12305 13.2297 2.55664 12.5735 3.43555L5.57739 12.7871C5.24927 13.2207 5.07349 13.6425 5.07349 14.123C5.07349 14.5918 5.24927 15.0253 5.57739 15.4589L12.5735 24.7988C13.2297 25.6894 13.5461 26.123 14.1907 26.123ZM14.1907 23.6503C14.1321 23.6503 14.1086 23.6152 14.0735 23.5566L7.30005 14.4394C7.19458 14.3105 7.18287 14.2168 7.18287 14.123C7.18287 14.0292 7.19458 13.9355 7.30005 13.8066L14.0735 4.67774C14.1086 4.63086 14.1321 4.59571 14.1907 4.59571C14.2493 4.59571 14.2727 4.63086 14.3079 4.67774L21.093 13.8066C21.1868 13.9355 21.2102 14.0292 21.2102 14.123C21.2102 14.2168 21.1868 14.3105 21.093 14.4394L14.3079 23.5566C14.2727 23.6152 14.2493 23.6503 14.1907 23.6503Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34406">
<rect width="18.2461" height="24.0117" fill="currentColor" transform="translate(5.07349 2.12305)"/>
</clipPath>
</defs>
</svg>

`;

export const Rhombus = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
