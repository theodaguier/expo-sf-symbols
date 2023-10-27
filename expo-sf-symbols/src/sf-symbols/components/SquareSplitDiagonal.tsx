
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
<g clip-path="url(#clip0_2207_34072)">
<path d="M4.14185 22.271L5.47779 23.607L23.4074 5.67725L22.0715 4.34131L4.14185 22.271ZM6.69654 24.732H20.9113C23.3723 24.732 24.591 23.5132 24.591 21.0991V6.79053C24.591 4.37647 23.3723 3.15771 20.9113 3.15771H6.69654C4.24732 3.15771 3.01685 4.36475 3.01685 6.79053V21.0991C3.01685 23.5249 4.24732 24.732 6.69654 24.732ZM6.71997 22.8452C5.5481 22.8452 4.90357 22.2241 4.90357 21.0054V6.88428C4.90357 5.66553 5.5481 5.04444 6.71997 5.04444H20.8879C22.048 5.04444 22.7043 5.66553 22.7043 6.88428V21.0054C22.7043 22.2241 22.048 22.8452 20.8879 22.8452H6.71997Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34072">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.01685 3.13428)"/>
</clipPath>
</defs>
</svg>

`;

export const SquareSplitDiagonal = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
