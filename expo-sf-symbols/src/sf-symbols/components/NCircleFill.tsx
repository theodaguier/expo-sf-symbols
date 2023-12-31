
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
<g clip-path="url(#clip0_2207_37676)">
<path d="M13.9763 26.0068C20.5154 26.0068 25.9294 20.5811 25.9294 14.0537C25.9294 7.51465 20.5037 2.10059 13.9646 2.10059C7.43725 2.10059 2.02319 7.51465 2.02319 14.0537C2.02319 20.5811 7.44897 26.0068 13.9763 26.0068Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.3318 19.5967C9.76928 19.5967 9.44116 19.2217 9.44116 18.624V9.30762C9.44116 8.68653 9.781 8.28809 10.3787 8.28809C10.7771 8.28809 11.0466 8.44043 11.3513 8.87403L16.6013 16.4092H16.6951V9.26075C16.6951 8.67481 17.0232 8.28809 17.5857 8.28809C18.1716 8.28809 18.5115 8.65137 18.5115 9.26075V18.5889C18.5115 19.2334 18.1482 19.5967 17.5505 19.5967C17.1521 19.5967 16.906 19.4561 16.5896 19.0108L11.3279 11.6045H11.2459V18.624C11.2459 19.2451 10.906 19.5967 10.3318 19.5967Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37676">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.02319 2.10059)"/>
</clipPath>
</defs>
</svg>

`;

export const NCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
