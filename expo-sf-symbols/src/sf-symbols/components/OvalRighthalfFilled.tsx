
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="31" height="29" viewBox="0 0 31 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_34311)">
<path d="M30.2954 14.4814C30.2954 7.83692 24.0376 3.10254 15.1782 3.10254C6.31884 3.10254 0.0610352 7.83692 0.0610352 14.4814C0.0610352 21.1142 6.31884 25.872 15.1782 25.872C24.0376 25.872 30.2954 21.1142 30.2954 14.4814ZM15.1782 23.9853C7.43213 23.9853 1.94776 20.0127 1.94776 14.4814C1.94776 8.9502 7.43213 4.98926 15.1782 4.98926V23.9853Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34311">
<rect width="30.2344" height="22.7695" fill="currentColor" transform="translate(0.0610352 3.10254)"/>
</clipPath>
</defs>
</svg>

`;

export const OvalRighthalfFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
