
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
<g clip-path="url(#clip0_2207_37319)">
<path d="M13.895 3.04492C13.5903 3.04492 13.3208 3.16211 13.0864 3.39648L6.39502 9.81836C6.21924 9.99414 6.09033 10.2402 6.09033 10.5801C6.09033 11.1895 6.54736 11.6582 7.15674 11.6582C7.41455 11.6582 7.6958 11.5879 7.94189 11.3418L13.895 5.51758L19.8364 11.3418C20.0942 11.5762 20.3637 11.6582 20.6215 11.6582C21.2309 11.6582 21.688 11.1895 21.688 10.5801C21.688 10.2402 21.5708 9.99414 21.3833 9.81836L14.6919 3.39648C14.4575 3.16211 14.188 3.04492 13.895 3.04492ZM13.895 25.6152C14.188 25.6152 14.4575 25.4863 14.6919 25.2637L21.3833 18.8418C21.5708 18.6543 21.688 18.4199 21.688 18.0683C21.688 17.459 21.2309 17.0019 20.6215 17.0019C20.3637 17.0019 20.0942 17.084 19.8364 17.3183L13.895 23.1426L7.94189 17.3183C7.6958 17.0722 7.41455 17.0019 7.15674 17.0019C6.54736 17.0019 6.09033 17.459 6.09033 18.0683C6.09033 18.4199 6.21924 18.6543 6.39502 18.8418L13.0864 25.2637C13.3208 25.4863 13.5903 25.6152 13.895 25.6152Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37319">
<rect width="15.5977" height="22.582" fill="currentColor" transform="translate(6.09033 3.04492)"/>
</clipPath>
</defs>
</svg>

`;

export const ChevronUpChevronDown = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
