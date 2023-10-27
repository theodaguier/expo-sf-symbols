
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
<g clip-path="url(#clip0_2207_33099)">
<path d="M13.9531 25.9287C20.4922 25.9287 25.9062 20.503 25.9062 13.9756C25.9062 7.43652 20.4805 2.02246 13.9414 2.02246C7.41406 2.02246 2 7.43652 2 13.9756C2 20.503 7.42578 25.9287 13.9531 25.9287ZM13.9531 23.9366C8.42188 23.9366 4.00391 19.5069 4.00391 13.9756C4.00391 8.44434 8.41016 4.01465 13.9414 4.01465C19.4727 4.01465 23.9141 8.44434 23.9141 13.9756C23.9141 19.5069 19.4844 23.9366 13.9531 23.9366Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M6.78125 13.9756C6.78125 14.1748 6.86328 14.4209 7.10938 14.6553L12.1484 19.4131C12.4531 19.6827 12.6992 19.8116 13.0156 19.8116C13.4375 19.8116 13.7539 19.5069 13.7539 19.0733V16.4834H19.0625C19.9883 16.4834 20.5273 15.9678 20.5273 15.0655V12.8975C20.5273 11.9834 19.9883 11.4678 19.0625 11.4678H13.7539V8.90137C13.7539 8.47949 13.4375 8.13965 12.9922 8.13965C12.6875 8.13965 12.4883 8.26855 12.1484 8.58496L7.10938 13.2842C6.86328 13.5186 6.78125 13.7647 6.78125 13.9756Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33099">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2 2.02246)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowshapeBackwardCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
