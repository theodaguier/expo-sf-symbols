
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
<g clip-path="url(#clip0_2207_37360)">
<path d="M6.73853 24.6174H20.9533C23.4143 24.6174 24.633 23.3986 24.633 20.9845V6.6759C24.633 4.26184 23.4143 3.04309 20.9533 3.04309H6.73853C4.28931 3.04309 3.05884 4.25012 3.05884 6.6759V20.9845C3.05884 23.4103 4.28931 24.6174 6.73853 24.6174Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.0549 16.8126C9.52759 16.8126 9.17603 16.4024 9.17603 15.8399V10.1446C9.17603 9.42981 9.56275 9.14856 10.1838 9.14856H15.9026C16.4768 9.14856 16.84 9.50012 16.84 10.0392C16.84 10.5665 16.465 10.9181 15.8791 10.9181H13.6994L11.9065 10.7306L13.7932 12.4884L18.2346 16.918C18.4104 17.0938 18.5276 17.3399 18.5276 17.5743C18.5276 18.1251 18.1643 18.4766 17.6369 18.4766C17.344 18.4766 17.1213 18.3713 16.9338 18.1954L12.5159 13.7657L10.7698 11.9025L10.9456 13.7891V15.8634C10.9456 16.4376 10.594 16.8126 10.0549 16.8126Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37360">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.05884 3.01965)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowUpLeftSquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
