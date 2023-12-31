
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
<g clip-path="url(#clip0_2207_35086)">
<path d="M5.05664 25.9871C5.05664 26.5027 5.47852 26.9246 5.99414 26.9246C6.52148 26.9246 6.94336 26.5027 6.94336 25.9871V4.56518C6.94336 4.19018 7.18945 3.94409 7.54102 3.94409H20.4316C20.7832 3.94409 21.0293 4.19018 21.0293 4.56518V25.9871C21.0293 26.5027 21.4511 26.9246 21.9785 26.9246C22.4941 26.9246 22.916 26.5027 22.916 25.9871V4.44799C22.916 3.01831 21.9433 2.05737 20.4668 2.05737H7.50586C6.04102 2.05737 5.05664 3.01831 5.05664 4.44799V25.9871Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.31445 26.2566C8.31445 26.4793 8.50195 26.5965 8.72461 26.5027L12.4043 24.8738C12.6973 24.7449 12.8145 24.6512 12.8145 24.3465V7.4597C12.8145 7.16674 12.6973 7.06127 12.416 6.94408L8.72461 5.30345C8.50195 5.2097 8.31445 5.32689 8.31445 5.56127V26.2566Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35086">
<rect width="17.8594" height="24.8789" fill="currentColor" transform="translate(5.05664 2.05737)"/>
</clipPath>
</defs>
</svg>

`;

export const DoorLeftHandOpen = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
