
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="28" height="29" viewBox="0 0 28 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_35079)">
<path d="M14.426 21.0069C19.6175 21.0069 23.8362 16.7881 23.8362 11.5732C23.8362 6.37012 19.6175 2.15137 14.426 2.15137C9.2229 2.15137 5.00415 6.37012 5.00415 11.5732C5.00415 16.7881 9.2229 21.0069 14.426 21.0069ZM13.4885 24.8272H15.3753V20.1397H13.4885V24.8272ZM10.3245 25.7647H18.5276C19.0433 25.7647 19.4651 25.3428 19.4651 24.8272C19.4651 24.3116 19.0433 23.878 18.5276 23.878H10.3362C9.82056 23.878 9.38696 24.3116 9.38696 24.8272C9.38696 25.3428 9.80884 25.7647 10.3245 25.7647Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M14.426 17.2217C11.2854 17.2217 8.78931 14.7256 8.78931 11.5732C8.78931 8.43261 11.2854 5.93652 14.426 5.93652C17.5783 5.93652 20.051 8.43261 20.051 11.5732C20.051 14.7256 17.5783 17.2217 14.426 17.2217ZM14.426 14.1983C15.8908 14.1983 17.0393 13.0381 17.0393 11.5732C17.0393 10.1084 15.8908 8.94824 14.426 8.94824C12.9612 8.94824 11.801 10.1084 11.801 11.5732C11.801 13.0381 12.9612 14.1983 14.426 14.1983Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_35079">
<rect width="18.832" height="23.6367" fill="currentColor" transform="translate(5.00415 2.15137)"/>
</clipPath>
</defs>
</svg>

`;

export const WebCameraFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
