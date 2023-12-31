
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
<g clip-path="url(#clip0_2207_37646)">
<path d="M6.71753 24.6622H20.9323C23.3933 24.6622 24.612 23.4434 24.612 21.0293V6.7207C24.612 4.30664 23.3933 3.08789 20.9323 3.08789H6.71753C4.26831 3.08789 3.03784 4.29492 3.03784 6.7207V21.0293C3.03784 23.4551 4.26831 24.6622 6.71753 24.6622Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.1706 19.4004C10.5378 19.4004 10.2097 18.9434 10.2097 18.2989V9.33398C10.2097 8.67773 10.5378 8.23242 11.1589 8.23242H16.9714C17.4401 8.23242 17.78 8.52539 17.78 9.02929C17.78 9.50976 17.4401 9.82617 16.9714 9.82617H12.155V13.0488H16.5026C16.9714 13.0488 17.3112 13.3301 17.3112 13.8223C17.3112 14.3145 16.9714 14.5606 16.5026 14.5606H12.155V18.2989C12.155 18.9668 11.8035 19.4004 11.1706 19.4004Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37646">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.03784 3.06445)"/>
</clipPath>
</defs>
</svg>

`;

export const FSquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
