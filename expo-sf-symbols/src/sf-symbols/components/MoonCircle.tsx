
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
<g clip-path="url(#clip0_2207_33668)">
<path d="M14.0161 26.0039C20.5552 26.0039 25.9692 20.5782 25.9692 14.0508C25.9692 7.51172 20.5435 2.09766 14.0044 2.09766C7.47705 2.09766 2.06299 7.51172 2.06299 14.0508C2.06299 20.5782 7.48877 26.0039 14.0161 26.0039ZM14.0161 24.0118C8.48487 24.0118 4.0669 19.5821 4.0669 14.0508C4.0669 8.51954 8.47315 4.08985 14.0044 4.08985C19.5357 4.08985 23.9771 8.51954 23.9771 14.0508C23.9771 19.5821 19.5474 24.0118 14.0161 24.0118Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M14.3208 20.8829C17.145 20.8829 19.5708 19.1485 20.4028 17.0157C20.4732 16.875 20.4849 16.7227 20.4849 16.6641C20.4849 16.418 20.2857 16.2539 20.0982 16.2539C20.0161 16.2539 19.9341 16.2657 19.8169 16.3125C19.3247 16.4766 18.4927 16.6524 17.6841 16.6524C14.1333 16.6524 11.8599 14.4258 11.8599 10.8633C11.8599 10.125 12.0591 9.08203 12.27 8.53124C12.3403 8.3789 12.3403 8.28515 12.3403 8.22656C12.3403 8.05077 12.2114 7.85156 11.9653 7.85156C11.8833 7.85156 11.731 7.86327 11.5786 7.93359C9.15283 8.89453 7.52393 11.5195 7.52393 14.2618C7.52393 18.1172 10.477 20.8829 14.3208 20.8829Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33668">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.06299 2.09766)"/>
</clipPath>
</defs>
</svg>

`;

export const MoonCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
