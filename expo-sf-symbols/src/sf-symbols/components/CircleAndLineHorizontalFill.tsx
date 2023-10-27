
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="33" height="29" viewBox="0 0 33 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_37019)">
<path d="M0.0146484 13.9992C0.0146484 13.4953 0.424804 13.0734 0.916992 13.0734H31.9482C32.4404 13.0734 32.8505 13.4953 32.8505 13.9992C32.8505 14.5031 32.4404 14.9367 31.9482 14.9367H0.916992C0.424804 14.9367 0.0146484 14.5031 0.0146484 13.9992ZM16.4443 25.9523C22.9716 25.9523 28.3974 20.5266 28.3974 13.9992C28.3974 7.4602 22.9599 2.04614 16.4326 2.04614C9.89356 2.04614 4.49121 7.4602 4.49121 13.9992C4.49121 20.5266 9.90527 25.9523 16.4443 25.9523Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37019">
<rect width="32.8359" height="23.918" fill="currentColor" transform="translate(0.0146484 2.04614)"/>
</clipPath>
</defs>
</svg>

`;

export const CircleAndLineHorizontalFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
