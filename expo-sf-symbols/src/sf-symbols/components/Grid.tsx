
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
<g clip-path="url(#clip0_2207_37047)">
<path d="M10.0352 25.2827C10.5742 25.2827 10.9141 24.9312 10.9141 24.3569V4.01318C10.9141 3.43896 10.5742 3.07568 10.0352 3.07568C9.47265 3.07568 9.14453 3.43896 9.14453 4.01318V24.3569C9.14453 24.9312 9.47265 25.2827 10.0352 25.2827ZM18.625 25.2827C19.164 25.2827 19.5039 24.9312 19.5039 24.3569V4.01318C19.5039 3.43896 19.164 3.07568 18.625 3.07568C18.0625 3.07568 17.7343 3.43896 17.7343 4.01318V24.3569C17.7343 24.9312 18.0625 25.2827 18.625 25.2827ZM3.96484 19.271H24.7539C25.3398 19.271 25.6914 18.9312 25.6914 18.3804C25.6914 17.8296 25.3398 17.5015 24.7539 17.5015H3.96484C3.37891 17.5015 3.02734 17.8296 3.02734 18.3804C3.02734 18.9312 3.37891 19.271 3.96484 19.271ZM3.96484 10.9038H24.7539C25.3398 10.9038 25.6914 10.564 25.6914 10.0249C25.6914 9.47412 25.3398 9.13427 24.7539 9.13427H3.96484C3.37891 9.13427 3.02734 9.47412 3.02734 10.0249C3.02734 10.564 3.37891 10.9038 3.96484 10.9038Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37047">
<rect width="22.6641" height="22.2773" fill="currentColor" transform="translate(3.02734 3.07568)"/>
</clipPath>
</defs>
</svg>

`;

export const Grid = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
