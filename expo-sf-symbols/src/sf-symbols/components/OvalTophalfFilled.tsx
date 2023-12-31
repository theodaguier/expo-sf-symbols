
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
<g clip-path="url(#clip0_2207_34312)">
<path d="M0.0629883 14.4814C0.0629883 21.1142 6.3208 25.872 15.1802 25.872C24.0396 25.872 30.2974 21.1142 30.2974 14.4814C30.2974 7.83692 24.0396 3.10254 15.1802 3.10254C6.3208 3.10254 0.0629883 7.83692 0.0629883 14.4814ZM1.94971 14.4814H28.4107C28.4107 20.0127 22.9263 23.9853 15.1802 23.9853C7.43408 23.9853 1.94971 20.0127 1.94971 14.4814Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34312">
<rect width="30.2344" height="22.7695" fill="currentColor" transform="translate(0.0629883 3.10254)"/>
</clipPath>
</defs>
</svg>

`;

export const OvalTophalfFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
