
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
<g clip-path="url(#clip0_2207_33851)">
<path d="M14.0224 26.0239C20.5615 26.0239 25.9755 20.5982 25.9755 14.0708C25.9755 7.53174 20.5498 2.11768 14.0107 2.11768C7.4834 2.11768 2.06934 7.53174 2.06934 14.0708C2.06934 20.5982 7.49512 26.0239 14.0224 26.0239Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M14.0459 18.7935C11.4209 18.7935 9.2998 16.6724 9.2998 14.0474C9.2998 11.4341 11.4209 9.32471 14.0459 9.32471C16.6591 9.32471 18.7802 11.4341 18.7802 14.0474C18.7802 16.6724 16.6591 18.7935 14.0459 18.7935Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_33851">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.06934 2.11768)"/>
</clipPath>
</defs>
</svg>

`;

export const RecordCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
