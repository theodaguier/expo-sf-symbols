
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="29" height="28" viewBox="0 0 29 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_37938)">
<path d="M6.69019 24.6004H20.905C23.366 24.6004 24.5847 23.3816 24.5847 20.9675V6.65894C24.5847 4.24488 23.366 3.02612 20.905 3.02612H6.69019C4.24097 3.02612 3.0105 4.23316 3.0105 6.65894V20.9675C3.0105 23.3933 4.24097 24.6004 6.69019 24.6004Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.0613 19.28C10.5222 19.28 10.1941 18.9754 10.1941 18.4832C10.1941 18.2371 10.3113 17.991 10.5222 17.7566L14.3777 13.6199C15.0925 12.8699 15.8425 12.1316 15.8425 11.2527C15.8425 10.2566 15.0691 9.58863 13.9207 9.58863C12.7605 9.58863 12.116 10.3621 11.7996 11.0886C11.5886 11.4285 11.3777 11.698 10.9441 11.698C10.4636 11.698 10.1472 11.3933 10.1472 10.9246C10.1472 10.7605 10.1589 10.6199 10.2175 10.4324C10.616 9.08472 12.1277 8.04175 13.8386 8.04175C16.0769 8.04175 17.5535 9.27222 17.5535 11.1003C17.5535 12.448 16.8035 13.4089 15.7371 14.5457L12.8777 17.6043V17.6863H17.2722C17.7527 17.6863 18.0925 17.9793 18.0925 18.4832C18.0925 18.9754 17.7527 19.28 17.2722 19.28H11.0613Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37938">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.0105 3.00269)"/>
</clipPath>
</defs>
</svg>

`;

export const 2SquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
