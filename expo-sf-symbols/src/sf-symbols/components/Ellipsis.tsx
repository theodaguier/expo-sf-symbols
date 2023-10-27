
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
<g clip-path="url(#clip0_2207_34758)">
<path d="M22.7328 16.5002C23.9633 16.5002 24.9594 15.5159 24.9594 14.2854C24.9594 13.0549 23.9633 12.0588 22.7328 12.0588C21.5024 12.0588 20.5063 13.0549 20.5063 14.2854C20.5063 15.5159 21.5024 16.5002 22.7328 16.5002Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M14.0259 16.5002C15.2564 16.5002 16.2407 15.5159 16.2407 14.2854C16.2407 13.0549 15.2564 12.0588 14.0259 12.0588C12.7954 12.0588 11.7993 13.0549 11.7993 14.2854C11.7993 15.5159 12.7954 16.5002 14.0259 16.5002Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M5.31885 16.5002C6.54932 16.5002 7.5337 15.5159 7.5337 14.2854C7.5337 13.0549 6.54932 12.0588 5.31885 12.0588C4.08838 12.0588 3.09229 13.0549 3.09229 14.2854C3.09229 15.5159 4.08838 16.5002 5.31885 16.5002Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34758">
<rect width="21.8672" height="4.46484" fill="currentColor" transform="translate(3.09229 12.0588)"/>
</clipPath>
</defs>
</svg>

`;

export const Ellipsis = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
