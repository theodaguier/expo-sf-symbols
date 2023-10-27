
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
<g clip-path="url(#clip0_2207_36293)">
<path d="M27.6108 19.1376C27.2006 16.1611 24.6342 13.8525 21.5288 13.8525C18.4233 13.8525 15.8686 16.1611 15.4584 19.1376H27.6108ZM27.6108 20.8486H15.4584C15.8803 23.8369 18.4233 26.1455 21.5288 26.1455C24.6577 26.1455 27.2006 23.8369 27.6108 20.8486Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.5366 14.8837L17.2163 11.204C19.4077 9.02431 19.4428 6.20009 17.3569 4.12587C15.2592 2.03994 12.4467 2.09853 10.2788 4.2665L6.59907 7.94619L13.5366 14.8837ZM12.3061 16.1259L5.35688 9.17666L1.67719 12.8681C-0.514215 15.0478 -0.549371 17.872 1.53657 19.9461C3.63422 22.0322 6.44672 21.9853 8.61469 19.8173L12.3061 16.1259Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36293">
<rect width="27.6086" height="24.0352" fill="currentColor" transform="translate(0.00219727 2.11035)"/>
</clipPath>
</defs>
</svg>

`;

export const PillsFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
