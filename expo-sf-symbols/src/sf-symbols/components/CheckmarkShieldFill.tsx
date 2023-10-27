
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
<g clip-path="url(#clip0_2207_37284)">
<path d="M13.5881 25.7051C13.7756 25.7051 14.0686 25.6347 14.3616 25.4824C21.0295 21.9902 23.1741 20.2441 23.1741 16.0371V7.20117C23.1741 5.99414 22.6584 5.60742 21.6741 5.19726C20.303 4.63476 15.9202 3.04102 14.5608 2.57227C14.2444 2.4668 13.9163 2.4082 13.5881 2.4082C13.26 2.4082 12.9319 2.47852 12.6272 2.57227C11.2561 3.01758 6.87329 4.64648 5.5022 5.19726C4.52954 5.5957 4.0022 5.99414 4.0022 7.20117V16.0371C4.0022 20.2441 6.26392 21.791 12.8147 25.4824C13.1194 25.6465 13.4006 25.7051 13.5881 25.7051Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M12.2756 19.3418C11.8772 19.3418 11.5491 19.1894 11.2444 18.7793L8.30298 15.1699C8.1272 14.9355 8.02173 14.666 8.02173 14.4082C8.02173 13.8691 8.43189 13.4355 8.97095 13.4355C9.29908 13.4355 9.55689 13.5527 9.84986 13.9394L12.2288 17.0097L17.2327 8.9707C17.4553 8.60742 17.76 8.43164 18.0764 8.43164C18.5803 8.43164 19.0608 8.7832 19.0608 9.32226C19.0608 9.5918 18.9202 9.86133 18.7678 10.0957L13.26 18.7793C13.0139 19.1543 12.6741 19.3418 12.2756 19.3418Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37284">
<rect width="19.1719" height="23.6602" fill="currentColor" transform="translate(4.0022 2.04492)"/>
</clipPath>
</defs>
</svg>

`;

export const CheckmarkShieldFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
