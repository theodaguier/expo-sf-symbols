
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
<g clip-path="url(#clip0_2207_36437)">
<path d="M5.02942 19.7656C5.02942 23 7.04504 25.0625 10.1974 25.0625C12.5529 25.0625 14.3107 24.0312 15.4122 22.039L16.4669 20.1523C18.9396 15.6289 23.0294 15.0429 23.0294 9.23046C23.0294 3.74609 19.4786 0.078125 14.1583 0.078125C8.69739 0.078125 5.02942 3.76953 5.02942 9.27734V19.7656Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.45129 16.5195C8.45129 14.2578 10.9474 14.539 10.9474 13.2383C10.9474 12.0664 8.45129 11.2109 8.45129 8.59765C8.45129 5.60937 10.7364 3.46484 14.1349 3.46484C17.545 3.46484 19.8302 5.75 19.8302 9.14843C19.8302 9.65234 19.4083 10.0742 18.9044 10.0742C18.4122 10.0742 17.9903 9.65234 17.9903 9.14843C17.9903 6.82812 16.4786 5.30468 14.1349 5.30468C11.8263 5.30468 10.2911 6.69921 10.2911 8.59765C10.2911 11.0469 13.8888 11.6093 13.8888 15.1015C13.8888 17.0469 12.6583 18.6054 10.8302 18.6172C9.41222 18.6172 8.45129 17.7734 8.45129 16.5195Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_36437">
<rect width="18" height="27.2461" fill="currentColor" transform="translate(5.02942 0.078125)"/>
</clipPath>
</defs>
</svg>

`;

export const HearingdeviceEarFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
