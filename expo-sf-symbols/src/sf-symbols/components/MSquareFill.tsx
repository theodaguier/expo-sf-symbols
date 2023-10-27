
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
<g clip-path="url(#clip0_2207_37674)">
<path d="M6.72168 24.6915H20.9365C23.3975 24.6915 24.6162 23.4727 24.6162 21.0585V6.75C24.6162 4.33594 23.3975 3.11719 20.9365 3.11719H6.72168C4.27246 3.11719 3.04199 4.32422 3.04199 6.75V21.0585C3.04199 23.4844 4.27246 24.6915 6.72168 24.6915Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.13574 19.5C8.59668 19.5 8.26855 19.125 8.26855 18.504V9.24609C8.26855 8.57813 8.72558 8.12109 9.40527 8.12109C9.99121 8.12109 10.3779 8.39063 10.5889 8.90625L13.8115 16.9336H13.8701L17.0693 8.90625C17.292 8.39063 17.6787 8.12109 18.2647 8.12109C18.9326 8.12109 19.4014 8.57813 19.4014 9.24609V18.504C19.4014 19.1368 19.0732 19.5 18.499 19.5C17.9717 19.5 17.6436 19.125 17.6436 18.504V11.5547H17.5381L14.749 18.4922C14.5732 18.9258 14.2686 19.125 13.8232 19.125C13.3779 19.125 13.085 18.9258 12.8975 18.4922L10.1318 11.5547H10.0264V18.504C10.0264 19.1368 9.68652 19.5 9.13574 19.5Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37674">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.04199 3.09375)"/>
</clipPath>
</defs>
</svg>

`;

export const MSquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
