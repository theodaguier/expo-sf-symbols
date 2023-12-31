
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
<g clip-path="url(#clip0_2207_37580)">
<path d="M6.75318 24.6215H20.968C23.429 24.6215 24.6477 23.4027 24.6477 20.9886V6.68005C24.6477 4.26599 23.429 3.04724 20.968 3.04724H6.75318C4.30396 3.04724 3.07349 4.25427 3.07349 6.68005V20.9886C3.07349 23.4144 4.30396 24.6215 6.75318 24.6215ZM6.77661 22.7347C5.60474 22.7347 4.96021 22.1136 4.96021 20.8949V6.7738C4.96021 5.55505 5.60474 4.93396 6.77661 4.93396H20.9446C22.1047 4.93396 22.761 5.55505 22.761 6.7738V20.8949C22.761 22.1136 22.1047 22.7347 20.9446 22.7347H6.77661Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.14381 14.4496L15.8118 18.3988C16.3626 18.7269 16.9837 18.4574 16.9837 17.8949V9.75038C16.9837 9.17616 16.3157 8.94179 15.8118 9.24648L9.14381 13.1957C8.66334 13.4769 8.65162 14.1683 9.14381 14.4496Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37580">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.07349 3.0238)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowtriangleLeftSquare = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
