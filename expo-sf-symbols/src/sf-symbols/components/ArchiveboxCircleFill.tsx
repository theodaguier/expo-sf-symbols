
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
<g clip-path="url(#clip0_2207_33013)">
<path d="M13.9699 25.9307C20.509 25.9307 25.923 20.5166 25.923 13.9775C25.923 7.4502 20.4973 2.02441 13.9582 2.02441C7.43091 2.02441 2.01685 7.4502 2.01685 13.9775C2.01685 20.5166 7.44263 25.9307 13.9699 25.9307Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.4426 20.0947C9.17701 20.0947 8.49732 19.4502 8.49732 18.1611V12.1025H19.4426V18.1611C19.4426 19.4502 18.7629 20.0947 17.4973 20.0947H10.4426ZM11.8489 14.4229H16.091C16.3723 14.4229 16.5598 14.2471 16.5598 13.9658V13.7549C16.5598 13.4736 16.3723 13.2979 16.091 13.2979H11.8489C11.5793 13.2979 11.3801 13.4736 11.3801 13.7549V13.9658C11.3801 14.2471 11.5793 14.4229 11.8489 14.4229ZM8.62623 11.1299C7.89966 11.1299 7.53638 10.6963 7.53638 9.98144V9.3955C7.53638 8.66894 7.94654 8.24707 8.62623 8.24707H19.3137C20.052 8.24707 20.4152 8.66894 20.4152 9.3955V9.98144C20.4152 10.6963 20.052 11.1299 19.3137 11.1299H8.62623Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_33013">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.01685 2.0127)"/>
</clipPath>
</defs>
</svg>

`;

export const ArchiveboxCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
