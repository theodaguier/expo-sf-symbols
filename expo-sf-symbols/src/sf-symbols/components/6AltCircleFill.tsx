
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
<g clip-path="url(#clip0_2207_37960)">
<path d="M13.9951 25.9133C20.5342 25.9133 25.9482 20.4876 25.9482 13.9602C25.9482 7.42114 20.5225 2.00708 13.9834 2.00708C7.45605 2.00708 2.04199 7.42114 2.04199 13.9602C2.04199 20.4876 7.46777 25.9133 13.9951 25.9133Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M14.0303 19.7141C11.5107 19.7141 9.81152 18.1204 9.81152 15.8001C9.81152 14.4876 10.3389 13.1633 11.5811 11.511C12.2139 10.679 12.9404 9.75317 13.7373 8.7102C13.9248 8.47583 14.1592 8.21802 14.5459 8.21802C15.1318 8.21802 15.3779 8.59302 15.3779 8.9563C15.3779 9.19067 15.2725 9.37817 15.085 9.62427C14.499 10.386 13.7022 11.3704 13.0928 12.1673C12.7178 12.6594 12.5537 12.8704 12.4365 13.0813L12.5537 13.1165C12.9522 12.7063 13.7959 12.3899 14.6162 12.3899C16.7256 12.3899 18.2256 13.8782 18.2256 15.8704C18.2256 18.1204 16.5147 19.7141 14.0303 19.7141ZM14.0303 18.1907C15.46 18.1907 16.5264 17.218 16.5264 15.9641C16.5264 14.6868 15.46 13.761 14.0186 13.761C12.5889 13.761 11.5225 14.6868 11.5225 15.9407C11.5225 17.218 12.6006 18.1907 14.0303 18.1907Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37960">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.04199 2.00708)"/>
</clipPath>
</defs>
</svg>

`;

export const 6AltCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
