
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
<g clip-path="url(#clip0_2207_33107)">
<path d="M13.9782 25.9287C20.5173 25.9287 25.9313 20.503 25.9313 13.9756C25.9313 7.43652 20.5056 2.02246 13.9665 2.02246C7.43921 2.02246 2.02515 7.43652 2.02515 13.9756C2.02515 20.503 7.45093 25.9287 13.9782 25.9287ZM13.9782 23.9366C8.44703 23.9366 4.02906 19.5069 4.02906 13.9756C4.02906 8.44434 8.43531 4.01465 13.9665 4.01465C19.4978 4.01465 23.9392 8.44434 23.9392 13.9756C23.9392 19.5069 19.5095 23.9366 13.9782 23.9366Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M20.8806 13.9756C20.8806 13.7647 20.7986 13.5186 20.5643 13.2842L15.5135 8.58496C15.1854 8.26855 14.9743 8.13965 14.6697 8.13965C14.2243 8.13965 13.908 8.47949 13.908 8.90137V11.4678H8.61109C7.68531 11.4678 7.14624 11.9834 7.14624 12.8975V15.0655C7.14624 15.9678 7.68531 16.4834 8.61109 16.4834H13.908V19.0733C13.908 19.5069 14.2244 19.8116 14.6463 19.8116C14.9627 19.8116 15.2205 19.6827 15.5135 19.4131L20.5643 14.6553C20.7986 14.4209 20.8806 14.1748 20.8806 13.9756Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33107">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.02515 2.02246)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowshapeForwardCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
