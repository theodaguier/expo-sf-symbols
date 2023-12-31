
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="28" height="29" viewBox="0 0 28 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_34455)">
<path d="M6.27734 25.4673C6.85156 25.4673 7.23828 25.2564 7.8125 24.6939L14.1172 18.4478C14.1758 18.3892 14.2227 18.3423 14.2812 18.3423C14.3281 18.3423 14.3867 18.3892 14.4453 18.4478L20.7383 24.6939C21.3242 25.2564 21.6992 25.4673 22.2734 25.4673C23.0703 25.4673 23.5508 24.8579 23.5508 24.0611C23.5508 23.6157 23.375 23.0884 23.1992 22.6079L15.875 2.59229C15.5 1.56104 14.9492 1.09229 14.2812 1.09229C13.6016 1.09229 13.0625 1.56104 12.6875 2.59229L5.35156 22.6079C5.1875 23.0884 5 23.6157 5 24.0611C5 24.8579 5.48047 25.4673 6.27734 25.4673Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34455">
<rect width="18.5508" height="25.1133" fill="currentColor" transform="translate(5 1.09229)"/>
</clipPath>
</defs>
</svg>

`;

export const LocationNorthFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
