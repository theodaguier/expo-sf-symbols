
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
<g clip-path="url(#clip0_2207_34255)">
<path d="M4.08203 22.5776C4.08203 25.0268 5.28906 26.2456 7.71484 26.2456H20.1601C22.5859 26.2456 23.7929 25.0268 23.7929 22.5776V4.8003C23.7929 2.3628 22.5859 1.12061 20.1601 1.12061H7.71484C5.28906 1.12061 4.08203 2.3628 4.08203 4.8003V22.5776Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34255">
<rect width="19.7109" height="25.1367" fill="currentColor" transform="translate(4.08203 1.12061)"/>
</clipPath>
</defs>
</svg>

`;

export const RectanglePortraitFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
