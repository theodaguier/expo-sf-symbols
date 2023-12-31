
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="33" height="29" viewBox="0 0 33 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_34692)">
<path d="M7.80518 23.7353H20.3911C22.7466 23.7353 24.1528 22.376 24.1528 20.0205V8.40722C24.1528 6.06347 22.8638 4.7041 20.5083 4.7041H7.80518C5.55518 4.7041 4.04346 6.06347 4.04346 8.40722V20.0205C4.04346 22.376 5.44971 23.7353 7.80518 23.7353ZM25.7466 17.6767L30.0122 21.3682C30.4106 21.7197 30.8794 21.9424 31.3013 21.9424C32.2153 21.9424 32.813 21.2744 32.813 20.3135V8.12597C32.813 7.16504 32.2153 6.49707 31.3013 6.49707C30.8794 6.49707 30.4106 6.71972 30.0122 7.07129L25.7466 10.751V17.6767Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M23.9067 27.5674C24.8911 28.5517 26.4966 28.5517 27.4575 27.5439C28.395 26.583 28.4419 25.0127 27.4458 24.0283L4.30127 0.895514C3.3169 -0.0888606 1.72315 -0.10058 0.750488 0.895514C-0.222168 1.85645 -0.222168 3.46192 0.750488 4.43458L23.9067 27.5674Z" fill="currentColor"/>
<path d="M25.0317 26.4307C25.3833 26.7822 25.9692 26.7822 26.3091 26.4307C26.6606 26.0791 26.6606 25.5049 26.3091 25.1533L3.16455 2.02051C2.81299 1.66894 2.23877 1.66894 1.87549 2.02051C1.53565 2.36035 1.53565 2.95801 1.87549 3.29785L25.0317 26.4307Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34692">
<rect width="32.792" height="28.1543" fill="currentColor" transform="translate(0.0209961 0.148438)"/>
</clipPath>
</defs>
</svg>

`;

export const VideoSlashFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
