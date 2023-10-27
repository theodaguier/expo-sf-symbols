
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
<g clip-path="url(#clip0_2207_36294)">
<path d="M14.0517 26.0156C20.5908 26.0156 26.0048 20.5899 26.0048 14.0625C26.0048 7.52344 20.5791 2.10938 14.04 2.10938C7.51269 2.10938 2.09863 7.52344 2.09863 14.0625C2.09863 20.5899 7.52441 26.0156 14.0517 26.0156ZM14.0517 24.0235C8.52051 24.0235 4.10254 19.5938 4.10254 14.0625C4.10254 8.53126 8.50879 4.10157 14.04 4.10157C19.5713 4.10157 24.0127 8.53126 24.0127 14.0625C24.0127 19.5938 19.583 24.0235 14.0517 24.0235Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.876 14.1446L15.7979 12.2461C16.9464 11.1211 16.9581 9.63285 15.8565 8.56644C14.7549 7.46488 13.2901 7.48832 12.1651 8.62503L10.2667 10.5235L13.876 14.1446ZM13.2081 14.8242L9.58701 11.2032L7.67685 13.125C6.55185 14.2735 6.5167 15.7383 7.59482 16.8282C8.69639 17.9063 10.1612 17.8711 11.2862 16.7461L13.2081 14.8242ZM20.8721 16.3711C20.6612 14.836 19.3253 13.6406 17.6964 13.6406C16.0909 13.6406 14.7549 14.836 14.5323 16.3711H20.8721ZM20.8721 17.3203H14.5323C14.7549 18.8438 16.0909 20.0391 17.6964 20.0391C19.337 20.0391 20.6612 18.8438 20.8721 17.3203Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36294">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.09863 2.10938)"/>
</clipPath>
</defs>
</svg>

`;

export const PillsCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
