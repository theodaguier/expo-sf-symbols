
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
<g clip-path="url(#clip0_2207_34518)">
<path d="M14.0014 25.9991C20.5405 25.9991 25.9545 20.585 25.9545 14.0459C25.9545 7.51855 20.5288 2.09277 13.9897 2.09277C7.4624 2.09277 2.04834 7.51855 2.04834 14.0459C2.04834 20.585 7.47412 25.9991 14.0014 25.9991Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.68896 18.4991C7.93115 18.4991 6.59521 17.4444 6.59521 15.4522C6.59521 14.1163 7.42725 13.0381 8.55225 12.5694C8.72803 11.3389 9.78272 10.4365 11.0366 10.4365C11.1772 10.4365 11.353 10.4482 11.5171 10.4834C12.3256 9.38183 13.6264 8.66699 15.103 8.66699C17.6108 8.66699 19.5561 10.6709 19.5561 13.1202C19.5561 13.2256 19.5561 13.3545 19.5444 13.4834C20.6225 13.7413 21.4311 14.7373 21.4311 15.9444C21.4311 17.3623 20.3061 18.4991 18.8647 18.4991H9.68896Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_34518">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.04834 2.08105)"/>
</clipPath>
</defs>
</svg>

`;

export const IcloudCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
