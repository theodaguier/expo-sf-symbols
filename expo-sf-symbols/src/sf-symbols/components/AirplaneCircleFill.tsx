
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="29" height="28" viewBox="0 0 29 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_35761)">
<path d="M14.0014 25.9263C20.5405 25.9263 25.9545 20.5122 25.9545 13.9731C25.9545 7.4458 20.5288 2.02002 13.9897 2.02002C7.4624 2.02002 2.04834 7.4458 2.04834 13.9731C2.04834 20.5122 7.47412 25.9263 14.0014 25.9263Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M21.853 13.9849C21.853 14.7935 20.7866 15.4028 19.4741 15.4028H16.8842C16.5678 15.4028 16.4741 15.4497 16.2749 15.6606L11.9624 20.3599C11.8101 20.5239 11.6108 20.6294 11.3999 20.6294H10.6499C10.3921 20.6294 10.2515 20.3833 10.3569 20.1255L12.5131 15.3794L9.50146 15.0395L8.37646 17.0903C8.271 17.2895 8.09522 17.3833 7.8374 17.3833H7.55615C7.32178 17.3833 7.16943 17.2192 7.16943 16.9849V10.9731C7.16943 10.7388 7.32178 10.5864 7.55615 10.5864H7.8374C8.09522 10.5864 8.271 10.6802 8.37646 10.8794L9.50146 12.9302L12.5131 12.5903L10.3569 7.84424C10.2515 7.58642 10.3921 7.34033 10.6499 7.34033H11.3999C11.6108 7.34033 11.8101 7.43408 11.9624 7.60986L16.2749 12.3091C16.4741 12.52 16.5678 12.5669 16.8842 12.5669H19.4741C20.7866 12.5669 21.853 13.1763 21.853 13.9849Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_35761">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.04834 2.0083)"/>
</clipPath>
</defs>
</svg>

`;

export const AirplaneCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
