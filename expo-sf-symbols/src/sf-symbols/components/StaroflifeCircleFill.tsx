
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
<g clip-path="url(#clip0_2207_36310)">
<path d="M13.9804 26.0537C20.5195 26.0537 25.9335 20.6396 25.9335 14.1005C25.9335 7.57324 20.5078 2.14746 13.9687 2.14746C7.4414 2.14746 2.02734 7.57324 2.02734 14.1005C2.02734 20.6396 7.45312 26.0537 13.9804 26.0537Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.36717 10.9248L8.41405 10.8428C8.78905 10.0811 9.16405 9.99902 9.91405 10.4209L12.8203 12.1201V8.7334C12.8203 7.9248 13.1015 7.65527 13.957 7.65527H14.039C14.8711 7.65527 15.1523 7.9248 15.1523 8.7334V12.1201L18.0585 10.4209C18.8203 9.97558 19.1953 10.0811 19.5585 10.8428L19.6054 10.9248C19.9804 11.6631 19.8867 12.0264 19.1953 12.4013L16.1484 14.0419L19.207 15.8115C19.875 16.1982 19.957 16.5615 19.5937 17.2998L19.5585 17.3584C19.1835 18.1084 18.8203 18.2138 18.082 17.7802L15.1523 16.081V19.4677C15.1523 20.288 14.8711 20.5576 14.039 20.5576H13.957C13.1015 20.5576 12.8203 20.288 12.8203 19.4677V16.081L9.89061 17.7802C9.19921 18.1904 8.82421 18.0966 8.41405 17.3584L8.39061 17.2998C7.98045 16.5732 8.07421 16.2216 8.76561 15.8115L11.8242 14.0419L8.77733 12.4013C8.08592 12.0381 7.99217 11.6748 8.36717 10.9248Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_36310">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.02734 2.13574)"/>
</clipPath>
</defs>
</svg>

`;

export const StaroflifeCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
