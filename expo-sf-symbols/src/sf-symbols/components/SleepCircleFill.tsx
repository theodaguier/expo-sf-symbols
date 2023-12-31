
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
<g clip-path="url(#clip0_2207_33526)">
<path d="M13.9825 26.0469C20.5216 26.0469 25.9356 20.6328 25.9356 14.0937C25.9356 7.56641 20.5099 2.14062 13.9708 2.14062C7.44348 2.14062 2.02942 7.56641 2.02942 14.0937C2.02942 20.6328 7.4552 26.0469 13.9825 26.0469Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M6.52942 14.0937C6.52942 10.0156 9.91614 6.62891 13.9825 6.62891C18.0724 6.62891 21.4591 10.0156 21.4591 14.0937C21.4591 18.1836 18.0841 21.5586 13.9942 21.5586C9.91614 21.5586 6.52942 18.1836 6.52942 14.0937ZM8.28723 14.0937C8.28723 14.7734 8.40442 15.4297 8.62708 16.0273H19.3732C19.5958 15.4297 19.713 14.7734 19.713 14.0937C19.7013 10.9062 17.1583 8.375 13.9825 8.375C10.8068 8.375 8.28723 10.9062 8.28723 14.0937ZM9.5177 17.6328C10.5489 18.957 12.1661 19.8125 13.9942 19.8125C15.8224 19.8125 17.4513 18.957 18.4942 17.6328H9.5177Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_33526">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.02942 2.12891)"/>
</clipPath>
</defs>
</svg>

`;

export const SleepCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
