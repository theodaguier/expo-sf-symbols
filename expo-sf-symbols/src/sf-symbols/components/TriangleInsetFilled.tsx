
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
<g clip-path="url(#clip0_2207_34328)">
<path d="M5.20752 25.4111H23.3716C25.3638 25.4111 26.5708 24.0283 26.5708 22.2353C26.5708 21.6846 26.4067 21.1103 26.1138 20.5947L17.02 4.75098C16.4106 3.68457 15.3677 3.14551 14.2895 3.14551C13.2114 3.14551 12.1567 3.68457 11.5591 4.75098L2.46533 20.5947C2.14893 21.1221 2.0083 21.6846 2.0083 22.2353C2.0083 24.0283 3.21533 25.4111 5.20752 25.4111ZM5.21924 23.5713C4.39892 23.5713 3.90674 22.9385 3.90674 22.2236C3.90674 22.001 3.95361 21.7197 4.08252 21.4736L13.1645 5.6416C13.4106 5.20801 13.856 5.02051 14.2895 5.02051C14.7231 5.02051 15.1567 5.20801 15.4028 5.6416L24.4849 21.4853C24.6138 21.7314 24.6724 22.001 24.6724 22.2236C24.6724 22.9385 24.1567 23.5713 23.3481 23.5713H5.21924Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M6.89501 21.8369H21.6724C22.1528 21.8369 22.4224 21.3916 22.188 20.958L14.7935 8.05567C14.5474 7.62207 14.0317 7.62207 13.7856 8.05567L6.3911 20.958C6.14501 21.4033 6.42626 21.8369 6.89501 21.8369Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34328">
<rect width="24.5625" height="22.3945" fill="currentColor" transform="translate(2.0083 3.14551)"/>
</clipPath>
</defs>
</svg>

`;

export const TriangleInsetFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
