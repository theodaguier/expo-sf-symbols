
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
<g clip-path="url(#clip0_2207_34319)">
<path d="M13.8635 0.102539C7.47681 0.102539 3.05884 5.90332 3.05884 14.1298C3.05884 22.3564 7.47681 28.1572 13.8635 28.1572C20.2502 28.1572 24.6447 22.3681 24.6447 14.1298C24.6447 5.8916 20.2502 0.102539 13.8635 0.102539ZM4.94556 14.1298H22.758C22.758 21.2548 19.1252 26.2705 13.8635 26.2705C8.59009 26.2705 4.94556 21.2431 4.94556 14.1298Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34319">
<rect width="21.5859" height="28.0664" fill="currentColor" transform="translate(3.05884 0.102539)"/>
</clipPath>
</defs>
</svg>

`;

export const OvalPortraitTophalfFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
