
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
<g clip-path="url(#clip0_2207_37859)">
<path d="M14.0224 26.0322C20.5615 26.0322 25.9755 20.6065 25.9755 14.0791C25.9755 7.54004 20.5498 2.12598 14.0107 2.12598C7.4834 2.12598 2.06934 7.54004 2.06934 14.0791C2.06934 20.6065 7.49512 26.0322 14.0224 26.0322Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.38184 19.376V9.5205C9.38184 8.94628 9.76856 8.57128 10.3428 8.57128H12.792C14.8076 8.57128 15.7802 9.5205 15.7802 11.7002V16.1182C15.7802 16.5752 15.499 16.8682 15.0654 16.8682C14.6435 16.8682 14.3388 16.5752 14.3388 16.1182V11.9111C14.3388 10.5166 13.7646 10.1299 12.4404 10.1299H10.835V19.3643C10.835 19.8096 10.5537 20.126 10.1318 20.126C9.70996 20.126 9.38184 19.8213 9.38184 19.376ZM11.8896 19.0479V12.4151C11.8896 11.958 12.1943 11.6768 12.6279 11.6768C13.0381 11.6768 13.331 11.958 13.331 12.4151V18.4268H15.0302C16.3896 18.4268 16.8232 18.1572 16.8232 16.6104V9.19238C16.8232 8.73535 17.1162 8.44238 17.5498 8.44238C17.9834 8.44238 18.2646 8.74706 18.2646 9.19238V16.6104C18.2646 19.0362 17.374 19.9854 15.3232 19.9854H12.8154C12.2412 19.9854 11.8896 19.6221 11.8896 19.0479Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37859">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.06934 2.12598)"/>
</clipPath>
</defs>
</svg>

`;

export const ShekelsignCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
