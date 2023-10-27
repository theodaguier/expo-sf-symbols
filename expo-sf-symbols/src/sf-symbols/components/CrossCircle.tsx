
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
<g clip-path="url(#clip0_2207_36298)">
<path d="M13.9972 25.958C20.5363 25.958 25.9503 20.5323 25.9503 14.0049C25.9503 7.46582 20.5246 2.05176 13.9855 2.05176C7.45813 2.05176 2.04407 7.46582 2.04407 14.0049C2.04407 20.5323 7.46985 25.958 13.9972 25.958ZM13.9972 23.9659C8.46595 23.9659 4.04798 19.5362 4.04798 14.0049C4.04798 8.47364 8.45423 4.04395 13.9855 4.04395C19.5168 4.04395 23.9582 8.47364 23.9582 14.0049C23.9582 19.5362 19.5285 23.9659 13.9972 23.9659Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M7.51672 15.2354C7.51672 15.9502 8.0089 16.4307 8.71203 16.4307H11.5363V19.2432C11.5363 19.9815 12.0167 20.4502 12.7316 20.4502H15.216C15.9425 20.4502 16.4113 19.9815 16.4113 19.2432V16.4307H19.2355C19.9621 16.4307 20.4425 15.9502 20.4425 15.2354V12.7393C20.4425 12.0361 19.9621 11.5439 19.2355 11.5439H16.4113V8.74316C16.4113 8.01659 15.9425 7.53613 15.216 7.53613H12.7316C12.0167 7.53613 11.5363 8.01659 11.5363 8.74316V11.5439H8.71203C7.99718 11.5439 7.51672 12.0361 7.51672 12.7393V15.2354Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36298">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.04407 2.05176)"/>
</clipPath>
</defs>
</svg>

`;

export const CrossCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
