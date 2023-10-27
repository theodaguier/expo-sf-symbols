
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
<g clip-path="url(#clip0_2207_37704)">
<path d="M14.0056 26.0527C20.5447 26.0527 25.9587 20.627 25.9587 14.0996C25.9587 7.56054 20.533 2.14648 13.9939 2.14648C7.46655 2.14648 2.05249 7.56054 2.05249 14.0996C2.05249 20.627 7.47827 26.0527 14.0056 26.0527Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M14.0056 19.7715C11.1697 19.7715 9.27124 18.1426 9.27124 15.5996V9.42382C9.27124 8.74414 9.6228 8.33398 10.2205 8.33398C10.8533 8.33398 11.2048 8.74414 11.2048 9.42382V15.4121C11.2048 17.1113 12.3181 18.166 14.0056 18.166C15.6931 18.166 16.7947 17.1113 16.7947 15.4121V9.42382C16.7947 8.74414 17.158 8.33398 17.7556 8.33398C18.3884 8.33398 18.74 8.74414 18.74 9.42382V15.5996C18.74 18.1426 16.8416 19.7715 14.0056 19.7715Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37704">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.05249 2.14648)"/>
</clipPath>
</defs>
</svg>

`;

export const UCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
