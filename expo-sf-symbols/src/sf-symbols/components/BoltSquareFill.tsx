
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
<g clip-path="url(#clip0_2207_34493)">
<path d="M6.76172 24.6285H20.9765C23.4375 24.6285 24.6562 23.4097 24.6562 20.9956V6.68701C24.6562 4.27295 23.4375 3.0542 20.9765 3.0542H6.76172C4.3125 3.0542 3.08203 4.26123 3.08203 6.68701V20.9956C3.08203 23.4214 4.3125 24.6285 6.76172 24.6285Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.58984 14.6557C8.58984 14.5034 8.66015 14.3276 8.78906 14.1752L15.4101 5.86668C15.914 5.24558 16.7578 5.66746 16.4531 6.4409L14.2734 12.312H18.3632C18.6797 12.312 18.914 12.5347 18.914 12.8393C18.914 12.9917 18.8437 13.1674 18.7265 13.308L12.0938 21.6166C11.5898 22.2495 10.7578 21.8276 11.0508 21.0541L13.2422 15.183H9.14062C8.83594 15.183 8.58984 14.9604 8.58984 14.6557Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_34493">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.08203 3.03076)"/>
</clipPath>
</defs>
</svg>

`;

export const BoltSquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
