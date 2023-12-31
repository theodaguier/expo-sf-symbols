
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
<g clip-path="url(#clip0_2207_34447)">
<path d="M14.0393 25.997C20.5784 25.997 25.9924 20.5713 25.9924 14.0439C25.9924 7.50488 20.5667 2.09082 14.0276 2.09082C7.50024 2.09082 2.08618 7.50488 2.08618 14.0439C2.08618 20.5713 7.51196 25.997 14.0393 25.997Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M7.42995 15.04C6.37526 15.04 6.24636 13.915 7.03151 13.54L18.4456 8.12601C19.3948 7.68069 20.1917 8.47757 19.7581 9.41507L14.3909 20.8525C14.0276 21.626 12.8792 21.5205 12.8792 20.4424V15.4385C12.8792 15.2041 12.7268 15.0517 12.4924 15.0517L7.42995 15.04Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_34447">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.08618 2.09082)"/>
</clipPath>
</defs>
</svg>

`;

export const LocationCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
