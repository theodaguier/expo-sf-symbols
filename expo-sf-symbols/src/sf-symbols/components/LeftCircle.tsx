
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
<g clip-path="url(#clip0_2207_37618)">
<path d="M13.9741 25.9941C20.5132 25.9941 25.9272 20.5684 25.9272 14.041C25.9272 7.50195 20.5015 2.08789 13.9624 2.08789C7.43506 2.08789 2.021 7.50195 2.021 14.041C2.021 20.5684 7.44678 25.9941 13.9741 25.9941ZM13.9741 24.002C8.44288 24.002 4.02491 19.5723 4.02491 14.041C4.02491 8.50977 8.43116 4.08008 13.9624 4.08008C19.4937 4.08008 23.9351 8.50977 23.9351 14.041C23.9351 19.5723 19.5054 24.002 13.9741 24.002Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.7827 19.2676H17.1851C17.6304 19.2676 17.9585 18.9746 17.9585 18.5059C17.9585 18.0254 17.6304 17.7324 17.1851 17.7324H12.7319V9.50586C12.7319 8.86133 12.4038 8.45117 11.7827 8.45117C11.1851 8.45117 10.8569 8.88477 10.8569 9.50586V18.2246C10.8569 18.8457 11.1851 19.2676 11.7827 19.2676Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37618">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.021 2.08789)"/>
</clipPath>
</defs>
</svg>

`;

export const LeftCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
