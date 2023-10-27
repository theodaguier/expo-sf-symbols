
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
<g clip-path="url(#clip0_2207_34029)">
<path d="M14.0119 26.0351C20.551 26.0351 25.965 20.6094 25.965 14.082C25.965 7.54297 20.5393 2.12891 14.0002 2.12891C7.4729 2.12891 2.05884 7.54297 2.05884 14.082C2.05884 20.6094 7.48462 26.0351 14.0119 26.0351Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M14.0119 18.7109C11.469 18.7109 9.37134 16.6367 9.37134 14.0703C9.37134 11.5391 11.469 9.46484 14.0119 9.46484C16.5432 9.46484 18.6408 11.5391 18.6408 14.0703C18.6408 16.6367 16.5432 18.7109 14.0119 18.7109ZM14.0236 16.8008C15.4885 16.8008 16.7072 15.5703 16.7072 14.0703C16.7072 12.6055 15.4885 11.3867 14.0236 11.3867C12.5471 11.3867 11.3166 12.6055 11.3166 14.0703C11.3166 15.5703 12.5354 16.8008 14.0236 16.8008Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_34029">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.05884 2.12891)"/>
</clipPath>
</defs>
</svg>

`;

export const SmallcircleCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
