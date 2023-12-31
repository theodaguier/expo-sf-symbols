
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="36" height="29" viewBox="0 0 36 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_33853)">
<path d="M21.6516 23.2016H24.3235C25.343 23.2016 25.8821 22.6626 25.8821 21.6313V5.67041C25.8821 4.604 25.343 4.11182 24.3235 4.11182H21.6516C20.6321 4.11182 20.093 4.65088 20.093 5.67041V21.6313C20.093 22.6626 20.6321 23.2016 21.6516 23.2016ZM31.0032 23.2016H33.6633C34.6946 23.2016 35.2219 22.6626 35.2219 21.6313V5.67041C35.2219 4.604 34.6946 4.11182 33.6633 4.11182H31.0032C29.9719 4.11182 29.4446 4.65088 29.4446 5.67041V21.6313C29.4446 22.6626 29.9719 23.2016 31.0032 23.2016ZM1.7063 22.8501C2.18677 22.8501 2.57349 22.6977 3.05396 22.4165L14.9954 15.397C15.8274 14.9048 16.179 14.3188 16.179 13.6509C16.179 12.9712 15.8274 12.397 14.9954 11.9048L3.05396 4.87354C2.57349 4.59229 2.18677 4.43994 1.7063 4.43994C0.780518 4.43994 0.0187988 5.14307 0.0187988 6.45557V20.8462C0.0187988 22.1587 0.780518 22.8501 1.7063 22.8501Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33853">
<rect width="35.2031" height="19.0898" fill="currentColor" transform="translate(0.0187988 4.11182)"/>
</clipPath>
</defs>
</svg>

`;

export const PlaypauseFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
