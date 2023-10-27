
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
<g clip-path="url(#clip0_2207_36792)">
<path d="M13.9636 25.9931C20.5027 25.9931 25.9167 20.5674 25.9167 14.04C25.9167 7.50097 20.491 2.08691 13.9519 2.08691C7.42456 2.08691 2.0105 7.50097 2.0105 14.04C2.0105 20.5674 7.43628 25.9931 13.9636 25.9931Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.3542 18.7041C9.81519 18.7041 9.52222 18.3642 9.52222 17.8252V10.1025C9.52222 9.6455 9.90894 9.2705 10.366 9.2705C10.823 9.2705 11.198 9.6455 11.198 10.1025V17.2861H13.6472C14.0339 17.2861 14.3503 17.6025 14.3503 18.001C14.3503 18.376 14.0339 18.7041 13.6472 18.7041H10.3542ZM17.4207 18.8096C16.9519 18.8096 16.5769 18.4346 16.5769 17.9541V11.0049L15.5222 11.8486C15.405 11.9424 15.2878 11.9893 15.1121 11.9893C14.7605 11.9893 14.5261 11.7432 14.5261 11.3799C14.5261 11.0869 14.6785 10.8525 14.8894 10.7119L16.1433 9.71582C16.4128 9.5166 16.8113 9.24707 17.28 9.24707C17.8894 9.24707 18.2644 9.59863 18.2644 10.1963V17.9541C18.2644 18.4346 17.8777 18.8096 17.4207 18.8096Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_36792">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.0105 2.08691)"/>
</clipPath>
</defs>
</svg>

`;

export const L1CircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
