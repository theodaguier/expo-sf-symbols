
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
<g clip-path="url(#clip0_2207_34280)">
<path d="M4.07129 22.5776C4.07129 25.0268 5.27832 26.2456 7.7041 26.2456H20.1494C22.5752 26.2456 23.7822 25.0268 23.7822 22.5776V4.8003C23.7822 2.3628 22.5752 1.12061 20.1494 1.12061H7.7041C5.27832 1.12061 4.07129 2.3628 4.07129 4.8003V22.5776ZM5.95801 22.5425V4.83545C5.95801 3.66358 6.5791 3.00733 7.79785 3.00733H20.0557C21.2744 3.00733 21.8955 3.66358 21.8955 4.83545V22.5425C21.8955 23.7144 21.2744 24.3589 20.0557 24.3589H7.79785C6.5791 24.3589 5.95801 23.7144 5.95801 22.5425Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.60645 22.7651H12.8721C13.6221 22.7651 13.9268 22.4722 13.9268 21.7339V14.7144C13.9268 13.9761 13.6221 13.6831 12.8721 13.6831H8.60645C7.86817 13.6831 7.56348 13.9761 7.56348 14.7144V21.7339C7.56348 22.4722 7.86817 22.7651 8.60645 22.7651Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34280">
<rect width="19.7109" height="25.1367" fill="currentColor" transform="translate(4.07129 1.12061)"/>
</clipPath>
</defs>
</svg>

`;

export const RectanglePortraitBottomleftInsetFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
