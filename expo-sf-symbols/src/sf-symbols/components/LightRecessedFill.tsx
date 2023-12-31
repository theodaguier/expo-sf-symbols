
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
<g clip-path="url(#clip0_2207_34977)">
<path d="M16.6936 24.1387C26.5725 24.1387 33.3108 19.6035 33.3108 14.1191C33.3108 8.63477 26.5725 4.08789 16.6936 4.08789C6.81469 4.08789 0.0881348 8.63477 0.0881348 14.1191C0.0881348 19.6035 6.81469 24.1387 16.6936 24.1387ZM16.6936 20.8457C10.2483 20.8457 5.46704 18.127 5.46704 14.4356C5.46704 10.7676 10.26 8.04883 16.6936 8.04883C23.1389 8.04883 27.9436 10.7676 27.9436 14.4356C27.9436 18.1152 23.1272 20.8457 16.6936 20.8457ZM16.6936 19.3106C22.1779 19.3106 26.4084 17.1191 26.4084 14.4356C26.4084 13.334 25.6936 12.3145 24.4631 11.5059C23.1623 13.6504 20.1272 15.1504 16.6467 15.1504C13.1779 15.1504 10.1779 13.6738 8.86547 11.5527C7.68188 12.3613 7.00219 13.3457 7.00219 14.4356C7.00219 17.1191 11.1858 19.3106 16.6936 19.3106Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34977">
<rect width="33.2227" height="20.0742" fill="currentColor" transform="translate(0.0881348 4.08789)"/>
</clipPath>
</defs>
</svg>

`;

export const LightRecessedFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
