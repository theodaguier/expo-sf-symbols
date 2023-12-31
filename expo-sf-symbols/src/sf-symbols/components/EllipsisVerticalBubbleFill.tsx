
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
<g clip-path="url(#clip0_2207_34635)">
<path d="M7.97559 26.9468C8.43262 26.9468 8.77246 26.7124 9.32324 26.1968L13.5537 22.3296H21.4755C24.9677 22.3296 26.8427 20.4078 26.8427 16.9742V7.99756C26.8427 4.56397 24.9677 2.63037 21.4755 2.63037H6.38184C2.88965 2.63037 1.01465 4.55225 1.01465 7.99756V16.9742C1.01465 20.4195 2.88965 22.3296 6.38184 22.3296H6.93262V25.7398C6.93262 26.4663 7.30762 26.9468 7.97559 26.9468Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.9404 9.15772C13.0146 9.15772 12.2763 8.40772 12.2763 7.49365C12.2763 6.57959 13.0146 5.82959 13.9404 5.82959C14.8662 5.82959 15.6044 6.57959 15.6044 7.49365C15.6044 8.40772 14.8662 9.15772 13.9404 9.15772Z" fill="currentColor"/>
<path d="M13.9404 14.1499C13.0146 14.1499 12.2763 13.4117 12.2763 12.4859C12.2763 11.5601 13.0146 10.8218 13.9404 10.8218C14.8662 10.8218 15.6044 11.5601 15.6044 12.4859C15.6044 13.4117 14.8662 14.1499 13.9404 14.1499Z" fill="currentColor"/>
<path d="M13.9404 19.1304C13.0146 19.1304 12.2763 18.3921 12.2763 17.4781C12.2763 16.5523 13.0146 15.814 13.9404 15.814C14.8662 15.814 15.6044 16.5523 15.6044 17.4781C15.6044 18.3921 14.8662 19.1304 13.9404 19.1304Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_34635">
<rect width="25.8281" height="25.8867" fill="currentColor" transform="translate(1.01465 1.06006)"/>
</clipPath>
</defs>
</svg>

`;

export const EllipsisVerticalBubbleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
