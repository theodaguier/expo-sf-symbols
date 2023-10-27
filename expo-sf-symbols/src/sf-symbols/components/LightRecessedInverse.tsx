
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="34" height="29" viewBox="0 0 34 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_34978)">
<path d="M16.6841 24.1387C26.5747 24.1387 33.313 19.6035 33.313 14.1191C33.313 8.63477 26.5747 4.08789 16.6841 4.08789C6.81689 4.08789 0.090332 8.63477 0.090332 14.1191C0.090332 19.6035 6.81689 24.1387 16.6841 24.1387ZM16.6841 20.6113C10.4497 20.6113 5.70361 18.0098 5.70361 14.4356C5.70361 10.8848 10.4497 8.2832 16.6841 8.2832C22.9536 8.2832 27.7114 10.8848 27.7114 14.4356C27.7114 17.9981 22.9419 20.6113 16.6841 20.6113ZM16.6723 15.1504C20.2583 15.1504 23.3872 13.5332 24.5942 11.2832C22.8715 10.1231 20.1294 9.4082 16.6841 9.4082C13.227 9.4082 10.4614 10.1348 8.73877 11.3301C9.96924 13.5684 13.0864 15.1504 16.6723 15.1504Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34978">
<rect width="33.2227" height="20.0742" fill="currentColor" transform="translate(0.090332 4.08789)"/>
</clipPath>
</defs>
</svg>

`;

export const LightRecessedInverse = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
