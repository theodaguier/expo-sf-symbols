
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
<g clip-path="url(#clip0_2207_37289)">
<path d="M6.74903 24.6426H20.9638C23.4248 24.6426 24.6435 23.4238 24.6435 21.0097V6.70117C24.6435 4.28711 23.4248 3.06836 20.9638 3.06836H6.74903C4.29981 3.06836 3.06934 4.27539 3.06934 6.70117V21.0097C3.06934 23.4355 4.29981 24.6426 6.74903 24.6426Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M16.1826 19.6387C15.8779 19.9316 15.2685 19.9082 14.9404 19.6035L10.0654 14.998C9.39746 14.3887 9.39746 13.3105 10.0654 12.7012L14.9404 8.09571C15.3037 7.75587 15.8427 7.74415 16.1709 8.06055C16.5341 8.4004 16.5459 8.98634 16.1943 9.31446L11.3779 13.8379L16.1943 18.3847C16.5341 18.7129 16.5459 19.2754 16.1826 19.6387Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37289">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.06934 3.04492)"/>
</clipPath>
</defs>
</svg>

`;

export const ChevronLeftSquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
