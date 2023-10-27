
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
<g clip-path="url(#clip0_2207_37293)">
<path d="M6.69654 24.6426H20.9113C23.3723 24.6426 24.591 23.4238 24.591 21.0097V6.70117C24.591 4.28711 23.3723 3.06836 20.9113 3.06836H6.69654C4.24732 3.06836 3.01685 4.27539 3.01685 6.70117V21.0097C3.01685 23.4355 4.24732 24.6426 6.69654 24.6426ZM6.71997 22.7558C5.5481 22.7558 4.90357 22.1347 4.90357 20.916V6.79492C4.90357 5.57617 5.5481 4.95508 6.71997 4.95508H20.8879C22.048 4.95508 22.7043 5.57617 22.7043 6.79492V20.916C22.7043 22.1347 22.048 22.7558 20.8879 22.7558H6.71997Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M16.1301 19.6387C16.4934 19.2754 16.4816 18.7129 16.1418 18.3847L11.3254 13.8379L16.1418 9.31446C16.4934 8.98634 16.4816 8.4004 16.1184 8.06055C15.7902 7.74415 15.2512 7.75587 14.8879 8.09571L10.0129 12.7012C9.34497 13.3105 9.34497 14.3887 10.0129 14.998L14.8879 19.6035C15.216 19.9082 15.8254 19.9316 16.1301 19.6387Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37293">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.01685 3.04492)"/>
</clipPath>
</defs>
</svg>

`;

export const ChevronBackwardSquare = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
