
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
<g clip-path="url(#clip0_2207_34258)">
<path d="M4.09033 22.5776C4.09033 25.0268 5.29736 26.2456 7.72314 26.2456H20.1684C22.5942 26.2456 23.8012 25.0268 23.8012 22.5776V4.8003C23.8012 2.3628 22.5942 1.12061 20.1684 1.12061H7.72314C5.29736 1.12061 4.09033 2.3628 4.09033 4.8003V22.5776ZM13.9458 24.3589V3.00733H20.0747C21.2934 3.00733 21.9145 3.66358 21.9145 4.83545V22.5425C21.9145 23.7144 21.2934 24.3589 20.0747 24.3589H13.9458Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34258">
<rect width="19.7109" height="25.1367" fill="currentColor" transform="translate(4.09033 1.12061)"/>
</clipPath>
</defs>
</svg>

`;

export const RectanglePortraitLefthalfFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
