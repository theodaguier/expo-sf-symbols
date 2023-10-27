
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
<g clip-path="url(#clip0_2207_34996)">
<path d="M6.73853 24.6875H20.9533C23.4143 24.6875 24.633 23.4687 24.633 21.0546V6.74609C24.633 4.33203 23.4143 3.11328 20.9533 3.11328H6.73853C4.28931 3.11328 3.05884 4.32031 3.05884 6.74609V21.0546C3.05884 23.4804 4.28931 24.6875 6.73853 24.6875Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.6291 20.1992C10.1135 20.1992 9.73853 19.8242 9.73853 19.3086V8.49218C9.73853 7.96484 10.1135 7.58984 10.6291 7.58984H17.0627C17.5783 7.58984 17.9533 7.96484 17.9533 8.49218V19.3086C17.9533 19.8242 17.5783 20.1992 17.0627 20.1992H10.6291ZM11.5081 12.7813H16.1838C16.4182 12.7813 16.5822 12.6055 16.5822 12.3594V9.37109C16.5822 9.125 16.4182 8.96093 16.1838 8.96093H11.5081C11.2737 8.96093 11.1096 9.125 11.1096 9.37109V12.3594C11.1096 12.6055 11.2737 12.7813 11.5081 12.7813Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_34996">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.05884 3.08984)"/>
</clipPath>
</defs>
</svg>

`;

export const LightswitchOnSquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
