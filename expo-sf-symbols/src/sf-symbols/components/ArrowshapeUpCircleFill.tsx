
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
<g clip-path="url(#clip0_2207_33112)">
<path d="M13.9636 25.9418C20.5027 25.9418 25.9167 20.5277 25.9167 13.9886C25.9167 7.4613 20.491 2.03552 13.9519 2.03552C7.42456 2.03552 2.0105 7.4613 2.0105 13.9886C2.0105 20.5277 7.43628 25.9418 13.9636 25.9418Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.9636 6.60583C14.1863 6.60583 14.4324 6.68786 14.6785 6.94568L19.5183 12.1371C19.8464 12.4886 19.9871 12.6879 19.9871 13.0043C19.9871 13.473 19.6238 13.8011 19.1902 13.8011H16.5535V19.2621C16.5535 20.223 16.0027 20.7738 15.0769 20.7738H12.8386C11.9128 20.7738 11.3738 20.223 11.3738 19.2621V13.8011H8.71362C8.25659 13.8011 7.94019 13.473 7.94019 13.0277C7.94019 12.6996 8.08081 12.4535 8.36206 12.1371L13.2605 6.94568C13.4949 6.68786 13.7527 6.60583 13.9636 6.60583Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_33112">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.0105 2.0238)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowshapeUpCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
