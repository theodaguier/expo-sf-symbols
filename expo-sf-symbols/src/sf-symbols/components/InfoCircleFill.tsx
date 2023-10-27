
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
<g clip-path="url(#clip0_2207_37162)">
<path d="M14.0434 25.9873C20.5825 25.9873 25.9965 20.5616 25.9965 14.0342C25.9965 7.49511 20.5708 2.08105 14.0317 2.08105C7.50439 2.08105 2.09033 7.49511 2.09033 14.0342C2.09033 20.5616 7.51611 25.9873 14.0434 25.9873Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.9341 20.8194C11.4302 20.8194 11.0435 20.4561 11.0435 19.9522C11.0435 19.4834 11.4302 19.0967 11.9341 19.0967H13.4223V13.5889H12.1333C11.6411 13.5889 11.2544 13.2256 11.2544 12.7217C11.2544 12.253 11.6411 11.8662 12.1333 11.8662H14.4067C15.0278 11.8662 15.3559 12.3116 15.3559 12.9678V19.0967H16.8442C17.3481 19.0967 17.7348 19.4834 17.7348 19.9522C17.7348 20.4561 17.3481 20.8194 16.8442 20.8194H11.9341ZM13.938 9.87402C13.0591 9.87402 12.3559 9.17089 12.3559 8.28027C12.3559 7.38964 13.0591 6.68652 13.938 6.68652C14.8169 6.68652 15.5083 7.38964 15.5083 8.28027C15.5083 9.17089 14.8169 9.87402 13.938 9.87402Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37162">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.09033 2.08105)"/>
</clipPath>
</defs>
</svg>

`;

export const InfoCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
