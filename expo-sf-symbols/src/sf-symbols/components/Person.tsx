
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
<g clip-path="url(#clip0_2207_33215)">
<path d="M6.93408 24.8081H21.6646C23.6099 24.8081 24.5357 24.2222 24.5357 22.9331C24.5357 19.8628 20.6568 15.4214 14.3052 15.4214C7.9419 15.4214 4.06299 19.8628 4.06299 22.9331C4.06299 24.2222 4.98877 24.8081 6.93408 24.8081ZM6.3833 23.0386C6.07861 23.0386 5.94971 22.9566 5.94971 22.7105C5.94971 20.7769 8.92627 17.1909 14.3052 17.1909C19.6724 17.1909 22.6489 20.7769 22.6489 22.7105C22.6489 22.9566 22.5318 23.0386 22.2271 23.0386H6.3833ZM14.3052 13.9566C17.0942 13.9566 19.3677 11.4839 19.3677 8.46045C19.3677 5.46045 17.106 3.10498 14.3052 3.10498C11.5278 3.10498 9.24268 5.50732 9.24268 8.48389C9.24268 11.4956 11.5161 13.9566 14.3052 13.9566ZM14.3052 12.187C12.5942 12.187 11.1294 10.5581 11.1294 8.48389C11.1294 6.44482 12.5708 4.87451 14.3052 4.87451C16.0513 4.87451 17.481 6.40967 17.481 8.46045C17.481 10.5347 16.0278 12.187 14.3052 12.187Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33215">
<rect width="20.4727" height="21.7148" fill="currentColor" transform="translate(4.06299 3.10498)"/>
</clipPath>
</defs>
</svg>

`;

export const Person = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
