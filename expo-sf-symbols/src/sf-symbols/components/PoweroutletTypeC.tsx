
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
<g clip-path="url(#clip0_2207_35016)">
<path d="M14.0244 26.0195C20.5635 26.0195 25.9775 20.5938 25.9775 14.0664C25.9775 7.52734 20.5518 2.11328 14.0127 2.11328C7.48535 2.11328 2.07129 7.52734 2.07129 14.0664C2.07129 20.5938 7.49707 26.0195 14.0244 26.0195ZM14.0244 24.0274C8.49317 24.0274 4.0752 19.5977 4.0752 14.0664C4.0752 8.53516 8.48145 4.10547 14.0127 4.10547C19.544 4.10547 23.9854 8.53516 23.9854 14.0664C23.9854 19.5977 19.5557 24.0274 14.0244 24.0274Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.24317 16.2813C10.4736 16.2813 11.458 15.2852 11.458 14.0664C11.458 12.8477 10.4736 11.8516 9.24317 11.8516C8.02441 11.8516 7.04004 12.8477 7.04004 14.0664C7.04004 15.2852 8.02441 16.2813 9.24317 16.2813ZM18.8057 16.2813C20.0244 16.2813 21.0088 15.2852 21.0088 14.0664C21.0088 12.8477 20.0244 11.8516 18.8057 11.8516C17.5752 11.8516 16.5908 12.8477 16.5908 14.0664C16.5908 15.2852 17.5752 16.2813 18.8057 16.2813Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35016">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.07129 2.11328)"/>
</clipPath>
</defs>
</svg>

`;

export const PoweroutletTypeC = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
