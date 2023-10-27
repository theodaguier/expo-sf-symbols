
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
<g clip-path="url(#clip0_2207_37594)">
<path d="M5.46631 23.6683C5.93506 23.6683 6.31006 23.4691 6.80225 23.223L21.8608 15.9222C22.8569 15.43 23.1733 14.973 23.1733 14.3519C23.1733 13.7308 22.8569 13.2855 21.8608 12.7933L6.80225 5.48083C6.29834 5.23474 5.92334 5.03552 5.45459 5.03552C4.5874 5.03552 4.04834 5.69177 4.04834 6.7113L4.06006 21.9926C4.06006 23.0121 4.59912 23.6683 5.46631 23.6683ZM6.05225 21.4418C5.98193 21.4418 5.93506 21.3949 5.93506 21.3011V7.40271C5.93506 7.30896 5.98193 7.26208 6.05225 7.26208C6.09912 7.26208 6.146 7.28552 6.19287 7.32068L20.5483 14.223C20.6069 14.2465 20.6538 14.2933 20.6538 14.3519C20.6538 14.4105 20.6069 14.4574 20.5483 14.4808L6.19287 21.3949C6.146 21.4183 6.09912 21.4418 6.05225 21.4418Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37594">
<rect width="19.125" height="18.6445" fill="currentColor" transform="translate(4.04834 5.0238)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowtriangleForward = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
