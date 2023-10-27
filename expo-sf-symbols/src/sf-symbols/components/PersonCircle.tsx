
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
<g clip-path="url(#clip0_2207_33217)">
<path d="M13.993 26.0126C20.5321 26.0126 25.9461 20.5869 25.9461 14.0595C25.9461 7.52051 20.5204 2.10645 13.9813 2.10645C7.45398 2.10645 2.03992 7.52051 2.03992 14.0595C2.03992 20.5869 7.4657 26.0126 13.993 26.0126ZM13.993 24.0205C8.4618 24.0205 4.04383 19.5908 4.04383 14.0595C4.04383 8.52833 8.45008 4.09864 13.9813 4.09864C19.5126 4.09864 23.954 8.52833 23.954 14.0595C23.954 19.5908 19.5243 24.0205 13.993 24.0205Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.62586 20.0009H19.3368C19.8055 20.0009 20.0282 19.6845 20.0282 19.2626C20.0282 17.9736 18.0946 14.6455 13.9813 14.6455C9.86804 14.6455 7.93445 17.9736 7.93445 19.2626C7.93445 19.6845 8.15711 20.0009 8.62586 20.0009ZM13.9813 13.6962C15.6454 13.708 16.993 12.2783 16.993 10.4033C16.993 8.6455 15.6454 7.19238 13.9813 7.19238C12.3172 7.19238 10.9696 8.6455 10.9696 10.4033C10.9696 12.2783 12.3172 13.6845 13.9813 13.6962Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33217">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.03992 2.10645)"/>
</clipPath>
</defs>
</svg>

`;

export const PersonCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
