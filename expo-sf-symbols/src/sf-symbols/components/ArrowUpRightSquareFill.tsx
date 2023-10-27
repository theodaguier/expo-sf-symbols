
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
<g clip-path="url(#clip0_2207_37370)">
<path d="M6.77198 24.6174H20.9868C23.4478 24.6174 24.6665 23.3986 24.6665 20.9845V6.6759C24.6665 4.26184 23.4478 3.04309 20.9868 3.04309H6.77198C4.32276 3.04309 3.09229 4.25012 3.09229 6.6759V20.9845C3.09229 23.4103 4.32276 24.6174 6.77198 24.6174Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M17.6704 16.8126C17.1314 16.8126 16.7798 16.4376 16.7798 15.8634V13.7891L16.9556 11.9025L15.2095 13.7657L10.7915 18.1954C10.6157 18.3713 10.3813 18.4766 10.0884 18.4766C9.56103 18.4766 9.20947 18.1251 9.20947 17.5743C9.20947 17.3399 9.31494 17.0938 9.49072 16.918L13.9321 12.4884L15.8189 10.7306L14.0259 10.9181H11.8462C11.2603 10.9181 10.8853 10.5665 10.8853 10.0392C10.8853 9.50012 11.2485 9.14856 11.8228 9.14856H17.5415C18.1626 9.14856 18.5611 9.42981 18.5611 10.1446V15.8399C18.5611 16.4024 18.1978 16.8126 17.6704 16.8126Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37370">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.09229 3.01965)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowUpRightSquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
