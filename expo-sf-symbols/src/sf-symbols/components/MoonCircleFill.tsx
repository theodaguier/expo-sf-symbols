
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
<g clip-path="url(#clip0_2207_33669)">
<path d="M14.0183 26.0157C20.5574 26.0157 25.9714 20.6016 25.9714 14.0625C25.9714 7.53516 20.5457 2.10938 14.0066 2.10938C7.47925 2.10938 2.06519 7.53516 2.06519 14.0625C2.06519 20.6016 7.49097 26.0157 14.0183 26.0157Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M14.3464 21.0938C10.3855 21.0938 7.33862 18.2579 7.33862 14.2735C7.33862 11.4375 9.0144 8.74218 11.5222 7.74609C11.6746 7.68749 11.8386 7.66406 11.9207 7.66406C12.1668 7.66406 12.3074 7.87499 12.3074 8.06249C12.3074 8.12109 12.3074 8.21484 12.2371 8.36718C12.0144 8.9414 11.8152 10.0078 11.8152 10.7812C11.8152 14.4375 14.1472 16.7344 17.8152 16.7344C18.6472 16.7344 19.5027 16.5469 20.0066 16.3829C20.1355 16.3477 20.2175 16.336 20.2996 16.336C20.4988 16.336 20.698 16.4883 20.698 16.7461C20.698 16.8047 20.6863 16.9688 20.616 17.1211C19.7605 19.3125 17.2644 21.0938 14.3464 21.0938Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_33669">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.06519 2.09766)"/>
</clipPath>
</defs>
</svg>

`;

export const MoonCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
