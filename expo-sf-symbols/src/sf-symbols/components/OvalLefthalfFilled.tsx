
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
<g clip-path="url(#clip0_2207_34310)">
<path d="M0.0440674 14.4814C0.0440674 21.1142 6.30188 25.872 15.1613 25.872C24.0207 25.872 30.2785 21.1142 30.2785 14.4814C30.2785 7.83692 24.0207 3.10254 15.1613 3.10254C6.30188 3.10254 0.0440674 7.83692 0.0440674 14.4814ZM15.1613 23.9853V4.98926C22.9074 4.98926 28.3918 8.9502 28.3918 14.4814C28.3918 20.0127 22.9074 23.9853 15.1613 23.9853Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34310">
<rect width="30.2344" height="22.7695" fill="currentColor" transform="translate(0.0440674 3.10254)"/>
</clipPath>
</defs>
</svg>

`;

export const OvalLefthalfFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
