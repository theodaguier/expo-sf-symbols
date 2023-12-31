
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
<g clip-path="url(#clip0_2207_33164)">
<path d="M13.9573 25.9502C20.4964 25.9502 25.9104 20.5361 25.9104 13.997C25.9104 7.46973 20.4846 2.04395 13.9455 2.04395C7.41821 2.04395 2.00415 7.46973 2.00415 13.997C2.00415 20.5361 7.42993 25.9502 13.9573 25.9502Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.7815 20.3838C9.56274 20.3838 8.94165 19.7627 8.94165 18.5205V9.52051C8.94165 8.24317 9.56274 7.62207 10.7932 7.62207H17.0979C18.34 7.62207 18.9612 8.25489 18.9612 9.52051V16.3174C18.9612 16.8916 18.6917 17.208 18.4573 17.4424C17.7425 18.1455 17.8831 19.0947 18.6214 19.3994C18.8089 19.458 18.9612 19.6689 18.9612 19.8799C18.9612 20.1611 18.7269 20.3838 18.4573 20.3838H10.7815ZM10.8401 19.376H17.1917C16.9222 18.8603 16.887 18.251 17.1214 17.6533C17.0745 17.665 17.0276 17.665 16.969 17.665H10.887C10.3245 17.665 9.94946 18.0049 9.94946 18.5088C9.94946 19.0595 10.2659 19.376 10.8401 19.376ZM10.6526 16.6689C10.8635 16.6689 11.0393 16.5166 11.0393 16.3056V9.00489C11.0393 8.80567 10.8635 8.62989 10.6526 8.62989C10.4534 8.62989 10.301 8.79395 10.301 9.00489V16.3056C10.301 16.5166 10.4534 16.6689 10.6526 16.6689Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_33164">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.00415 2.03223)"/>
</clipPath>
</defs>
</svg>

`;

export const BookClosedCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
