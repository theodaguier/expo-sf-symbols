
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
<g clip-path="url(#clip0_2207_34314)">
<path d="M0.0419922 14.4814C0.0419922 21.1142 6.2998 25.872 15.1592 25.872C24.0186 25.872 30.2764 21.1142 30.2764 14.4814C30.2764 7.83692 24.0186 3.10254 15.1592 3.10254C6.2998 3.10254 0.0419922 7.83692 0.0419922 14.4814ZM1.92871 14.4814C1.92871 8.9502 7.41308 4.98926 15.1592 4.98926C22.9053 4.98926 28.3897 8.9502 28.3897 14.4814C28.3897 20.0127 22.9053 23.9853 15.1592 23.9853C7.41308 23.9853 1.92871 20.0127 1.92871 14.4814Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M3.65137 14.4814C3.65137 19.0048 8.37402 22.2744 15.1592 22.2744C21.9561 22.2744 26.6787 19.0048 26.6787 14.4814C26.6787 9.96972 21.9443 6.7002 15.1592 6.7002C8.38574 6.7002 3.65137 9.96972 3.65137 14.4814Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34314">
<rect width="30.2344" height="22.7695" fill="currentColor" transform="translate(0.0419922 3.10254)"/>
</clipPath>
</defs>
</svg>

`;

export const OvalInsetFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
