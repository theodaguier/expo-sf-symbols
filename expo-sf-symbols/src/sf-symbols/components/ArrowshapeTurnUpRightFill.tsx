
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
<g clip-path="url(#clip0_2207_33130)">
<path d="M14.8205 24.516C15.3947 24.516 15.8636 24.2816 16.4261 23.7543L25.6721 15.0238C26.1174 14.6019 26.2698 14.1566 26.2698 13.7699C26.2698 13.3715 26.1292 12.9379 25.6721 12.5043L16.4261 3.85583C15.8049 3.2699 15.4183 3.0238 14.844 3.0238C14.0237 3.0238 13.4378 3.66833 13.4378 4.45349V8.88318H13.0979C4.67212 8.88318 1.00415 14.2855 1.00415 22.9457C1.00415 23.9535 1.57837 24.516 2.21118 24.516C2.70337 24.516 3.24243 24.3988 3.65259 23.6488C5.69165 19.8168 8.56274 18.6683 13.0979 18.6683H13.4378V23.1449C13.4378 23.93 14.0237 24.516 14.8205 24.516Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33130">
<rect width="25.2656" height="21.5039" fill="currentColor" transform="translate(1.00415 3.0238)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowshapeTurnUpRightFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
