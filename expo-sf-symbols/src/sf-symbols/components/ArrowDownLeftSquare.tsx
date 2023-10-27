
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
<g clip-path="url(#clip0_2207_37379)">
<path d="M6.76782 24.6119H20.9826C23.4436 24.6119 24.6623 23.3931 24.6623 20.979V6.67041C24.6623 4.25635 23.4436 3.0376 20.9826 3.0376H6.76782C4.3186 3.0376 3.08813 4.24463 3.08813 6.67041V20.979C3.08813 23.4048 4.3186 24.6119 6.76782 24.6119ZM6.79125 22.7251C5.61938 22.7251 4.97485 22.104 4.97485 20.8853V6.76416C4.97485 5.54541 5.61938 4.92432 6.79125 4.92432H20.9592C22.1193 4.92432 22.7756 5.54541 22.7756 6.76416V20.8853C22.7756 22.104 22.1193 22.7251 20.9592 22.7251H6.79125Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.2014 10.9009C9.6858 10.9009 9.34595 11.2876 9.34595 11.8384V17.3697C9.34595 18.0611 9.72095 18.3306 10.3186 18.3306H15.8733C16.424 18.3306 16.7756 17.9908 16.7756 17.4751C16.7756 16.9595 16.4123 16.6197 15.8498 16.6197H13.717L11.9827 16.8072L13.8108 15.0962L18.135 10.7837C18.299 10.6196 18.4162 10.3853 18.4162 10.1509C18.4162 9.62354 18.0647 9.28369 17.549 9.28369C17.2678 9.28369 17.0569 9.38916 16.8811 9.55322L12.5686 13.8658L10.8811 15.6704L11.0569 13.8423V11.8149C11.0569 11.2524 10.717 10.9009 10.2014 10.9009Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37379">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.08813 3.01416)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowDownLeftSquare = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
