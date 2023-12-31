
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
<g clip-path="url(#clip0_2207_37692)">
<path d="M14.0393 26.0224C20.5784 26.0224 25.9924 20.5967 25.9924 14.0693C25.9924 7.53027 20.5667 2.11621 14.0276 2.11621C7.50024 2.11621 2.08618 7.53027 2.08618 14.0693C2.08618 20.5967 7.51196 26.0224 14.0393 26.0224Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.9338 19.6123C10.3245 19.6123 9.98462 19.167 9.98462 18.5224V9.54591C9.98462 8.88966 10.3127 8.44434 10.9221 8.44434H14.4026C16.8518 8.44434 18.4104 9.82716 18.4104 12.0068C18.4104 13.5068 17.4964 14.7724 16.0784 15.2412L17.8831 18.0771C18.0354 18.3232 18.1057 18.5107 18.1057 18.7803C18.1057 19.2724 17.7424 19.6123 17.2268 19.6123C16.7932 19.6123 16.5471 19.4365 16.2542 18.9678L14.1682 15.5224H11.9182V18.5224C11.9182 19.1904 11.5666 19.6123 10.9338 19.6123ZM11.9182 14.1045H14.1214C15.5745 14.1045 16.5003 13.3662 16.5003 12.0537C16.5003 10.7061 15.551 9.93263 14.1682 9.93263H11.9182V14.1045Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37692">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.08618 2.11621)"/>
</clipPath>
</defs>
</svg>

`;

export const RCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
