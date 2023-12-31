
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
<g clip-path="url(#clip0_2207_34159)">
<path d="M0.0126953 21.0737C0.0126953 23.4878 1.24317 24.6948 3.69239 24.6948H23.9658C26.4268 24.6948 27.6455 23.4878 27.6455 21.0737V6.75342C27.6455 4.33936 26.4268 3.12061 23.9658 3.12061H3.69239C1.24317 3.12061 0.0126953 4.33936 0.0126953 6.75342V21.0737ZM13.8525 22.8081V5.00733H23.9424C25.1025 5.00733 25.7588 5.64014 25.7588 6.85889V20.9683C25.7588 22.187 25.1025 22.8081 23.9424 22.8081H13.8525Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34159">
<rect width="27.6328" height="21.5742" fill="currentColor" transform="translate(0.0126953 3.12061)"/>
</clipPath>
</defs>
</svg>

`;

export const RectangleLefthalfFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
