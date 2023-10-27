
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_38020)">
<path d="M13.9614 25.9077C20.5005 25.9077 25.9145 20.482 25.9145 13.9546C25.9145 7.41552 20.4888 2.00146 13.9497 2.00146C7.42236 2.00146 2.0083 7.41552 2.0083 13.9546C2.0083 20.482 7.43408 25.9077 13.9614 25.9077Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.7739 18.9703C10.2817 18.9703 9.8833 18.5718 9.8833 18.0796V10.7554L8.78174 11.646C8.65283 11.7397 8.53564 11.7983 8.33642 11.7983C7.97314 11.7983 7.72705 11.5288 7.72705 11.1538C7.72705 10.8374 7.89111 10.603 8.10205 10.439L9.42627 9.40772C9.71924 9.19678 10.1294 8.91553 10.645 8.91553C11.2544 8.91553 11.6528 9.27881 11.6528 9.89991V18.0796C11.6528 18.5718 11.2427 18.9703 10.7739 18.9703ZM16.7036 19.0874C14.3013 19.0874 13.5747 16.3921 13.5747 13.9546C13.5747 11.5171 14.3013 8.82178 16.7036 8.82178C19.106 8.82178 19.8325 11.5171 19.8325 13.9546C19.8325 16.3921 19.106 19.0874 16.7036 19.0874ZM16.7036 17.646C17.688 17.646 18.063 16.0523 18.063 13.9546C18.063 11.8452 17.688 10.2632 16.7036 10.2632C15.7192 10.2632 15.3442 11.8452 15.3442 13.9546C15.3442 16.0523 15.7192 17.646 16.7036 17.646Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_38020">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.0083 2.00146)"/>
</clipPath>
</defs>
</svg>

`;

export const 10CircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
