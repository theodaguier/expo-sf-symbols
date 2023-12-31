
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
<g clip-path="url(#clip0_2207_34262)">
<path d="M4.08398 22.5776C4.08398 25.0268 5.29101 26.2456 7.71679 26.2456H20.1621C22.5879 26.2456 23.7949 25.0268 23.7949 22.5776V4.8003C23.7949 2.3628 22.5879 1.12061 20.1621 1.12061H7.71679C5.29101 1.12061 4.08398 2.3628 4.08398 4.8003V22.5776ZM5.9707 22.5425V4.83545C5.9707 3.66358 6.59179 3.00733 7.81054 3.00733H20.0684C21.2871 3.00733 21.9082 3.66358 21.9082 4.83545V22.5425C21.9082 23.7144 21.2871 24.3589 20.0684 24.3589H7.81054C6.59179 24.3589 5.9707 23.7144 5.9707 22.5425Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.61914 22.7651H19.2598C20.0098 22.7651 20.3028 22.4722 20.3028 21.7339V5.64404C20.3028 4.90576 20.0098 4.61279 19.2598 4.61279H8.61914C7.88086 4.61279 7.57617 4.90576 7.57617 5.64404V21.7339C7.57617 22.4722 7.88086 22.7651 8.61914 22.7651Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34262">
<rect width="19.7109" height="25.1367" fill="currentColor" transform="translate(4.08398 1.12061)"/>
</clipPath>
</defs>
</svg>

`;

export const RectanglePortraitInsetFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
