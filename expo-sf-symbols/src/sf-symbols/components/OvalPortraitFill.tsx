
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
<g clip-path="url(#clip0_2207_34316)">
<path d="M13.8551 0.102539C7.46838 0.102539 3.05042 5.90332 3.05042 14.1298C3.05042 22.3564 7.46838 28.1572 13.8551 28.1572C20.2418 28.1572 24.6363 22.3681 24.6363 14.1298C24.6363 5.8916 20.2418 0.102539 13.8551 0.102539Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34316">
<rect width="21.5859" height="28.0664" fill="currentColor" transform="translate(3.05042 0.102539)"/>
</clipPath>
</defs>
</svg>

`;

export const OvalPortraitFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
