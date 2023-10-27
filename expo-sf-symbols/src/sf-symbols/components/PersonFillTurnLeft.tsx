
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
<g clip-path="url(#clip0_2207_33223)">
<path d="M24.088 6.604C24.088 4.76416 23.5606 4.10791 22.5411 4.10791C19.5177 4.10791 15.3458 7.89307 15.3458 13.9751C15.3458 20.0454 19.5177 23.8306 22.5411 23.8306C23.5606 23.8306 24.088 23.1743 24.088 21.3345V6.604ZM13.2482 13.9751C13.2482 11.4673 10.9864 9.2876 8.0802 9.2876C5.22083 9.2876 3.02942 11.4673 3.02942 13.9751C3.02942 16.4829 5.17395 18.6626 8.05676 18.6626C10.9864 18.6626 13.2482 16.4946 13.2482 13.9751Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33223">
<rect width="21.0586" height="19.793" fill="currentColor" transform="translate(3.02942 4.10791)"/>
</clipPath>
</defs>
</svg>

`;

export const PersonFillTurnLeft = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
