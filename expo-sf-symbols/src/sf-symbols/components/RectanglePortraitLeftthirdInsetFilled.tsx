
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
<g clip-path="url(#clip0_2207_34271)">
<path d="M4.09448 22.5776C4.09448 25.0268 5.30151 26.2456 7.72729 26.2456H20.1726C22.5984 26.2456 23.8054 25.0268 23.8054 22.5776V4.8003C23.8054 2.3628 22.5984 1.12061 20.1726 1.12061H7.72729C5.30151 1.12061 4.09448 2.3628 4.09448 4.8003V22.5776ZM5.9812 22.5425V4.83545C5.9812 3.66358 6.60229 3.00733 7.82104 3.00733H20.0789C21.2976 3.00733 21.9187 3.66358 21.9187 4.83545V22.5425C21.9187 23.7144 21.2976 24.3589 20.0789 24.3589H7.82104C6.60229 24.3589 5.9812 23.7144 5.9812 22.5425Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.62964 22.7651H10.7742C11.5242 22.7651 11.8289 22.4722 11.8289 21.7339V5.64404C11.8289 4.90576 11.5242 4.61279 10.7742 4.61279H8.62964C7.89136 4.61279 7.58667 4.90576 7.58667 5.64404V21.7339C7.58667 22.4722 7.89136 22.7651 8.62964 22.7651Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34271">
<rect width="19.7109" height="25.1367" fill="currentColor" transform="translate(4.09448 1.12061)"/>
</clipPath>
</defs>
</svg>

`;

export const RectanglePortraitLeftthirdInsetFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
