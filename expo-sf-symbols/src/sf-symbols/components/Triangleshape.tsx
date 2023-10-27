
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
<g clip-path="url(#clip0_2207_34331)">
<path d="M2.63404 24.7158H25.1691C26.3059 24.7158 26.7863 24.1064 26.7863 23.4033C26.7863 23.1103 26.7043 22.7939 26.5402 22.4893L15.2082 2.86035C14.9387 2.37988 14.423 2.14551 13.9074 2.14551C13.3801 2.14551 12.8762 2.37988 12.5949 2.86035L1.27466 22.4893C1.1106 22.7939 1.01685 23.1103 1.01685 23.4033C1.01685 24.1064 1.49731 24.7158 2.63404 24.7158ZM3.66529 22.876C3.47779 22.876 3.37232 22.7822 3.37232 22.6416C3.37232 22.583 3.38404 22.5244 3.43091 22.4541L13.673 4.67676C13.7434 4.57129 13.8137 4.52442 13.9074 4.52442C13.9895 4.52442 14.0598 4.57129 14.1301 4.67676L24.384 22.4541C24.4191 22.5244 24.4426 22.583 24.4426 22.6416C24.4426 22.7822 24.3254 22.876 24.1379 22.876H3.66529Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34331">
<rect width="25.7695" height="23.168" fill="currentColor" transform="translate(1.01685 2.14551)"/>
</clipPath>
</defs>
</svg>

`;

export const Triangleshape = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
