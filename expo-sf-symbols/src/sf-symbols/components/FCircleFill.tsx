
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
<g clip-path="url(#clip0_2207_37644)">
<path d="M13.9804 25.9825C20.5195 25.9825 25.9335 20.5684 25.9335 14.0293C25.9335 7.50195 20.5078 2.07617 13.9687 2.07617C7.4414 2.07617 2.02734 7.50195 2.02734 14.0293C2.02734 20.5684 7.45312 25.9825 13.9804 25.9825Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.3203 19.5723C10.6875 19.5723 10.3594 19.127 10.3594 18.4707V9.50587C10.3594 8.86134 10.6875 8.4043 11.3086 8.4043H17.1211C17.5898 8.4043 17.9296 8.70899 17.9296 9.2129C17.9296 9.68165 17.5898 9.99805 17.1211 9.99805H12.2929V13.2325H16.6523C17.1211 13.2325 17.4609 13.502 17.4609 13.9942C17.4609 14.4864 17.1211 14.7442 16.6523 14.7442H12.2929V18.4707C12.2929 19.1504 11.9531 19.5723 11.3203 19.5723Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37644">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.02734 2.06445)"/>
</clipPath>
</defs>
</svg>

`;

export const FCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
