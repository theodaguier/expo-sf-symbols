
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
<g clip-path="url(#clip0_2207_36396)">
<path d="M13.9992 25.9707C20.5383 25.9707 25.9523 20.545 25.9523 14.0176C25.9523 7.47851 20.5266 2.06445 13.9875 2.06445C7.4602 2.06445 2.04614 7.47851 2.04614 14.0176C2.04614 20.545 7.47192 25.9707 13.9992 25.9707Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.9992 20.0528C11.468 20.0528 9.7688 18.3653 9.7688 17.5684C9.7688 17.2754 10.0618 17.1465 10.3079 17.2637C11.1985 17.7325 12.2297 18.295 13.9992 18.295C15.757 18.295 16.8 17.7442 17.6789 17.2637C17.9367 17.1465 18.218 17.2754 18.218 17.5684C18.218 18.3653 16.5188 20.0528 13.9992 20.0528ZM10.4133 12.9161C9.65161 12.9161 8.99536 12.2247 8.99536 11.2637C8.99536 10.2793 9.65161 9.58789 10.4133 9.58789C11.1868 9.58789 11.8665 10.2793 11.8665 11.2637C11.8665 12.2247 11.1868 12.9161 10.4133 12.9161ZM17.5734 12.9161C16.8117 12.9161 16.1555 12.2247 16.1555 11.2637C16.1555 10.2793 16.8117 9.58789 17.5734 9.58789C18.3469 9.58789 19.0266 10.2793 19.0266 11.2637C19.0266 12.2247 18.3469 12.9161 17.5734 12.9161Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_36396">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.04614 2.06445)"/>
</clipPath>
</defs>
</svg>

`;

export const FaceSmilingInverse = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
