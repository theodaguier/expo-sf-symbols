
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
<g clip-path="url(#clip0_2207_36783)">
<path d="M14.0476 26.038C20.5867 26.038 26.0007 20.6123 26.0007 14.0849C26.0007 7.5459 20.575 2.13184 14.0359 2.13184C7.50854 2.13184 2.09448 7.5459 2.09448 14.0849C2.09448 20.6123 7.52026 26.038 14.0476 26.038ZM14.0476 24.0459C8.51636 24.0459 4.09839 19.6162 4.09839 14.0849C4.09839 8.55372 8.50464 4.12403 14.0359 4.12403C19.5672 4.12403 24.0086 8.55372 24.0086 14.0849C24.0086 19.6162 19.5789 24.0459 14.0476 24.0459Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.69996 19.9795H18.3953C19.4617 19.9795 19.9422 19.4052 19.9422 18.2216V9.71387C19.9422 8.6709 19.4617 8.19043 18.3953 8.19043H9.69996C8.77418 8.19043 8.15308 8.81153 8.15308 9.71387V18.2216C8.15308 19.2646 8.77418 19.9795 9.69996 19.9795ZM10.4265 18.2685C10.0984 18.2685 9.86402 18.0341 9.86402 17.6943V10.4756C9.86402 10.1357 10.0984 9.90137 10.4265 9.90137H17.6687C17.9968 9.90137 18.2312 10.1357 18.2312 10.4756V17.6943C18.2312 18.0341 17.9968 18.2685 17.6687 18.2685H10.4265Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36783">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.09448 2.13184)"/>
</clipPath>
</defs>
</svg>

`;

export const SquareCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
