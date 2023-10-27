
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
<g clip-path="url(#clip0_2207_34576)">
<path d="M13.9867 26.0147C20.5258 26.0147 25.9398 20.6006 25.9398 14.0615C25.9398 7.53418 20.5141 2.1084 13.975 2.1084C7.44763 2.1084 2.03357 7.53418 2.03357 14.0615C2.03357 20.6006 7.45935 26.0147 13.9867 26.0147Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.9867 19.1592C13.7172 19.1592 13.4711 19.1475 13.2367 19.1358C13.1078 19.124 13.0375 19.1592 12.9086 19.2529C11.7133 19.9678 10.5062 20.4717 9.83826 20.4717C9.31091 20.4717 9.21716 20.0615 9.55701 19.6631C9.8031 19.3819 10.1547 19.0069 10.3539 18.6084C10.4242 18.4795 10.4242 18.3389 10.2718 18.2569C8.50232 17.2256 7.30701 15.5967 7.30701 13.6983C7.30701 10.6865 10.2367 8.24902 13.9867 8.24902C17.7367 8.24902 20.6664 10.6865 20.6664 13.6983C20.6664 16.71 17.7367 19.1592 13.9867 19.1592Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_34576">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.03357 2.09668)"/>
</clipPath>
</defs>
</svg>

`;

export const MessageCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
