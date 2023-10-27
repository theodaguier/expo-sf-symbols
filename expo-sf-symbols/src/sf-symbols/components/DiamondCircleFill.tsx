
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="28" height="29" viewBox="0 0 28 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_34336)">
<path d="M13.9573 25.9609C20.4964 25.9609 25.9104 20.5352 25.9104 14.0078C25.9104 7.46875 20.4846 2.05469 13.9455 2.05469C7.41821 2.05469 2.00415 7.46875 2.00415 14.0078C2.00415 20.5352 7.42993 25.9609 13.9573 25.9609Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M7.74635 15.0039C7.11354 14.3711 7.0901 13.6563 7.72291 13.0117L12.9612 7.78516C13.6058 7.14063 14.3089 7.16407 14.9534 7.8086L20.1448 13C20.8011 13.6445 20.8245 14.3477 20.1683 15.0039L14.9417 20.2305C14.2972 20.875 13.594 20.8516 12.9495 20.207L7.74635 15.0039Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_34336">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.00415 2.05469)"/>
</clipPath>
</defs>
</svg>

`;

export const DiamondCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
