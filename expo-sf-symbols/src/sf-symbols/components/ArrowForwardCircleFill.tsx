
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
<g clip-path="url(#clip0_2207_37341)">
<path d="M14.0035 25.9216C20.5426 25.9216 25.9566 20.4959 25.9566 13.9685C25.9566 7.42944 20.5309 2.01538 13.9918 2.01538C7.46447 2.01538 2.05042 7.42944 2.05042 13.9685C2.05042 20.4959 7.4762 25.9216 14.0035 25.9216Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M20.2145 13.9568C20.2145 14.2263 20.109 14.4373 19.8746 14.6599L15.7965 18.7498C15.6324 18.9138 15.4215 19.0076 15.1637 19.0076C14.6598 19.0076 14.2848 18.6209 14.2848 18.117C14.2848 17.8592 14.3902 17.6365 14.5543 17.4724L16.0543 15.9842L17.5192 14.7654L14.9645 14.8592H8.68323C8.15589 14.8592 7.76917 14.4842 7.76917 13.9568C7.76917 13.4177 8.15589 13.0427 8.68323 13.0427H14.9645L17.5192 13.1482L16.0543 11.9294L14.5543 10.4412C14.402 10.2654 14.2848 10.0427 14.2848 9.78492C14.2848 9.28101 14.6598 8.90601 15.1637 8.90601C15.4215 8.90601 15.6324 8.98805 15.7965 9.15211L19.8746 13.2537C20.1207 13.4998 20.2145 13.6873 20.2145 13.9568Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37341">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.05042 2.01538)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowForwardCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
