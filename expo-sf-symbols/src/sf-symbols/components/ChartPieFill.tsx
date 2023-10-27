
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
<g clip-path="url(#clip0_2207_36943)">
<path d="M13.9887 25.938C16.8012 25.938 19.52 24.9302 21.6879 23.0904L13.2504 14.8169C13.0161 14.606 12.9692 14.4068 12.9692 14.0904V2.07861C6.88721 2.60596 2.03564 7.79737 2.03564 13.9849C2.03564 20.524 7.46142 25.938 13.9887 25.938ZM25.9418 13.9849C25.9418 12.2271 25.5083 10.3872 24.77 8.88721L15.1958 14.3951L22.8481 21.9537C24.77 19.856 25.9418 16.9732 25.9418 13.9849ZM14.5395 12.9537L23.9965 7.51612C21.9575 4.3169 18.2661 2.1958 14.5395 2.04346V12.9537Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36943">
<rect width="23.9062" height="23.8945" fill="currentColor" transform="translate(2.03564 2.04346)"/>
</clipPath>
</defs>
</svg>

`;

export const ChartPieFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
