
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
<g clip-path="url(#clip0_2207_34254)">
<path d="M4.04614 22.5776C4.04614 25.0268 5.25317 26.2456 7.67895 26.2456H20.1242C22.55 26.2456 23.757 25.0268 23.757 22.5776V4.8003C23.757 2.3628 22.55 1.12061 20.1242 1.12061H7.67895C5.25317 1.12061 4.04614 2.3628 4.04614 4.8003V22.5776ZM5.93286 22.5425V4.83545C5.93286 3.66358 6.55395 3.00733 7.7727 3.00733H20.0305C21.2492 3.00733 21.8703 3.66358 21.8703 4.83545V22.5425C21.8703 23.7144 21.2492 24.3589 20.0305 24.3589H7.7727C6.55395 24.3589 5.93286 23.7144 5.93286 22.5425Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34254">
<rect width="19.7109" height="25.1367" fill="currentColor" transform="translate(4.04614 1.12061)"/>
</clipPath>
</defs>
</svg>

`;

export const RectanglePortrait = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
