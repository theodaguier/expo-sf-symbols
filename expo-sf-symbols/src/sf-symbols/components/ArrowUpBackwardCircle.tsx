
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
<g clip-path="url(#clip0_2207_37362)">
<path d="M14.0161 25.9244C20.5552 25.9244 25.9692 20.4987 25.9692 13.9713C25.9692 7.43225 20.5435 2.01819 14.0044 2.01819C7.47705 2.01819 2.06299 7.43225 2.06299 13.9713C2.06299 20.4987 7.48877 25.9244 14.0161 25.9244ZM14.0161 23.9323C8.48487 23.9323 4.0669 19.5026 4.0669 13.9713C4.0669 8.44007 8.47315 4.01038 14.0044 4.01038C19.5357 4.01038 23.9771 8.44007 23.9771 13.9713C23.9771 19.5026 19.5474 23.9323 14.0161 23.9323Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.3247 16.8776C10.8403 16.8776 11.1802 16.5143 11.1802 15.9635V13.9362L11.0044 12.108L12.6919 13.9127L17.0044 18.2252C17.1685 18.3893 17.3911 18.4948 17.6724 18.4948C18.188 18.4948 18.5396 18.1549 18.5396 17.6276C18.5396 17.3932 18.4224 17.1588 18.2583 16.9948L13.9341 12.6705L12.106 10.9713L13.8403 11.1588H15.9732C16.5357 11.1588 16.8989 10.819 16.8989 10.3033C16.8989 9.78772 16.5474 9.44788 15.9966 9.44788H10.4419C9.84424 9.44788 9.45752 9.71741 9.45752 10.4088V15.9401C9.45752 16.4791 9.80908 16.8776 10.3247 16.8776Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37362">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.06299 2.01819)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowUpBackwardCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
