
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
<g clip-path="url(#clip0_2207_34265)">
<path d="M4.09229 22.5776C4.09229 25.0268 5.29932 26.2456 7.7251 26.2456H20.1704C22.5962 26.2456 23.8032 25.0268 23.8032 22.5776V4.8003C23.8032 2.3628 22.5962 1.12061 20.1704 1.12061H7.7251C5.29932 1.12061 4.09229 2.3628 4.09229 4.8003V22.5776ZM5.97901 22.5425V4.83545C5.97901 3.66358 6.6001 3.00733 7.81885 3.00733H20.0767C21.2954 3.00733 21.9165 3.66358 21.9165 4.83545V22.5425C21.9165 23.7144 21.2954 24.3589 20.0767 24.3589H7.81885C6.6001 24.3589 5.97901 23.7144 5.97901 22.5425Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.62744 22.7651H12.8931C13.6431 22.7651 13.9478 22.4722 13.9478 21.7339V5.64404C13.9478 4.90576 13.6431 4.61279 12.8931 4.61279H8.62744C7.88916 4.61279 7.58447 4.90576 7.58447 5.64404V21.7339C7.58447 22.4722 7.88916 22.7651 8.62744 22.7651Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34265">
<rect width="19.7109" height="25.1367" fill="currentColor" transform="translate(4.09229 1.12061)"/>
</clipPath>
</defs>
</svg>

`;

export const RectanglePortraitLefthalfInsetFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
