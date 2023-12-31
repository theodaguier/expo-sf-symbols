
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
<g clip-path="url(#clip0_2207_33095)">
<path d="M13.9909 25.9287C20.53 25.9287 25.944 20.503 25.944 13.9756C25.944 7.43652 20.5183 2.02246 13.9792 2.02246C7.4519 2.02246 2.03784 7.43652 2.03784 13.9756C2.03784 20.503 7.46362 25.9287 13.9909 25.9287ZM13.9909 23.9366C8.45972 23.9366 4.04175 19.5069 4.04175 13.9756C4.04175 8.44434 8.448 4.01465 13.9792 4.01465C19.5105 4.01465 23.9519 8.44434 23.9519 13.9756C23.9519 19.5069 19.5222 23.9366 13.9909 23.9366Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M6.81909 13.9756C6.81909 14.1748 6.90112 14.4209 7.14722 14.6553L12.1862 19.4131C12.4909 19.6827 12.737 19.8116 13.0534 19.8116C13.4753 19.8116 13.7917 19.5069 13.7917 19.0733V16.4834H19.1003C20.0261 16.4834 20.5651 15.9678 20.5651 15.0655V12.8975C20.5651 11.9834 20.0261 11.4678 19.1003 11.4678H13.7917V8.90137C13.7917 8.47949 13.4753 8.13965 13.03 8.13965C12.7253 8.13965 12.5261 8.26855 12.1862 8.58496L7.14722 13.2842C6.90112 13.5186 6.81909 13.7647 6.81909 13.9756Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33095">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.03784 2.02246)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowshapeLeftCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
