
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
<g clip-path="url(#clip0_2207_36299)">
<path d="M13.9992 25.9698C20.5383 25.9698 25.9523 20.5557 25.9523 14.0166C25.9523 7.48926 20.5266 2.06348 13.9875 2.06348C7.4602 2.06348 2.04614 7.48926 2.04614 14.0166C2.04614 20.5557 7.47192 25.9698 13.9992 25.9698Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M7.31958 15.2823V12.7276C7.31958 11.9893 7.82348 11.4736 8.56176 11.4736H11.468V8.60253C11.468 7.84081 11.9719 7.33691 12.7102 7.33691H15.2649C16.0149 7.33691 16.507 7.84081 16.507 8.60253V11.4736H19.4133C20.1633 11.4736 20.6672 11.9893 20.6672 12.7276V15.2823C20.6672 16.0206 20.1633 16.5245 19.4133 16.5245H16.507V19.419C16.507 20.1807 16.0149 20.6729 15.2649 20.6729H12.7102C11.9719 20.6729 11.468 20.1807 11.468 19.419V16.5245H8.56176C7.8352 16.5245 7.31958 16.0206 7.31958 15.2823Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_36299">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.04614 2.05176)"/>
</clipPath>
</defs>
</svg>

`;

export const CrossCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
