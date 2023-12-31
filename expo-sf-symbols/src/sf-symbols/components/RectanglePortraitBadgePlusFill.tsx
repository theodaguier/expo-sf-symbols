
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="29" height="33" viewBox="0 0 29 33" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_36540)">
<path d="M7.60986 25.3745C7.60986 27.8237 8.81689 29.0425 11.2427 29.0425H23.688C26.1138 29.0425 27.3208 27.8237 27.3208 25.3745V7.59716C27.3208 5.15966 26.1138 3.91748 23.688 3.91748H11.2427C8.81689 3.91748 7.60986 5.15966 7.60986 7.59716V25.3745Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M7.60987 32.8511C11.7349 32.8511 15.1685 29.4292 15.1685 25.3042C15.1685 21.1558 11.7583 17.7456 7.60987 17.7456C3.47315 17.7456 0.0629883 21.1558 0.0629883 25.3042C0.0629883 29.4644 3.46143 32.8511 7.60987 32.8511Z" fill="currentColor"/>
<path d="M7.60987 31.2573C10.8442 31.2573 13.563 28.5503 13.563 25.3042C13.563 22.0347 10.8794 19.3511 7.60987 19.3511C4.35205 19.3511 1.65674 22.0347 1.65674 25.3042C1.65674 28.5737 4.35205 31.2573 7.60987 31.2573Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M7.60987 29.0308C7.17627 29.0308 6.89502 28.7378 6.89502 28.3159V26.019H4.59815C4.17627 26.019 3.8833 25.7378 3.8833 25.3042C3.8833 24.8706 4.17627 24.5776 4.59815 24.5776H6.89502V22.2925C6.89502 21.8706 7.17627 21.5776 7.60987 21.5776C8.05518 21.5776 8.33643 21.8706 8.33643 22.2925V24.5776H10.6216C11.0552 24.5776 11.3364 24.8706 11.3364 25.3042C11.3364 25.7378 11.0552 26.019 10.6216 26.019H8.33643V28.3159C8.33643 28.7378 8.05518 29.0308 7.60987 29.0308Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_36540">
<rect width="27.2578" height="32.7305" fill="currentColor" transform="translate(0.0629883 0.120605)"/>
</clipPath>
</defs>
</svg>

`;

export const RectanglePortraitBadgePlusFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
