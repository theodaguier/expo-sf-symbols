
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="32" height="29" viewBox="0 0 32 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_32909)">
<path d="M11.5527 25.3648H21.7246C22.2402 25.3648 22.6738 24.9429 22.6738 24.4273C22.6738 23.9117 22.2402 23.4781 21.7246 23.4781H11.5527C11.0371 23.4781 10.6035 23.9117 10.6035 24.4273C10.6035 24.9429 11.0371 25.3648 11.5527 25.3648Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M25.2285 25.3648H31.0527C31.5684 25.3648 31.9902 24.9429 31.9902 24.4273C31.9902 23.9117 31.5684 23.4781 31.0527 23.4781H25.2285C24.7129 23.4781 24.2793 23.9117 24.2793 24.4273C24.2793 24.9429 24.7129 25.3648 25.2285 25.3648Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M1.90818 21.2751L6.45505 25.8102C8.86911 28.2243 11.8574 28.236 14.1309 25.9626L25.4277 14.6657C27.0918 13.0016 27.0918 10.5055 25.3926 8.80629L18.9121 2.34926C17.2129 0.65004 14.7285 0.626603 13.0527 2.30238L1.76755 13.5993C-0.505883 15.8727 -0.494164 18.861 1.90818 21.2751Z" fill="currentColor"/>
<path d="M5.25981 12.5212L15.0684 22.3298L24.0098 13.3766C25.0527 12.3337 25.0293 10.8571 23.9629 9.79069L17.7988 3.60319C16.7324 2.53678 15.2441 2.52506 14.2012 3.56803L5.25981 12.5212ZM3.05668 20.279L7.29887 24.5212C9.05668 26.2673 11.0488 26.3376 12.7129 24.6735L13.9316 23.4548L4.12309 13.6462L2.89262 14.8532C1.22856 16.529 1.29887 18.5212 3.05668 20.279Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_32909">
<rect width="31.9062" height="26.7776" fill="currentColor" transform="translate(0.0839844 1.06006)"/>
</clipPath>
</defs>
</svg>

`;

export const EraserLineDashedFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
