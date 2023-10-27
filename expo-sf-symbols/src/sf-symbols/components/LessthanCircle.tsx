
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
<g clip-path="url(#clip0_2207_37232)">
<path d="M13.9804 25.9941C20.5195 25.9941 25.9335 20.5684 25.9335 14.041C25.9335 7.50195 20.5078 2.08789 13.9687 2.08789C7.4414 2.08789 2.02734 7.50195 2.02734 14.041C2.02734 20.5684 7.45312 25.9941 13.9804 25.9941ZM13.9804 24.002C8.44922 24.002 4.03125 19.5723 4.03125 14.041C4.03125 8.50977 8.4375 4.08008 13.9687 4.08008C19.5 4.08008 23.9414 8.50977 23.9414 14.041C23.9414 19.5723 19.5117 24.002 13.9804 24.002Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M16.9921 18.834C17.5546 18.834 17.9648 18.4356 17.9648 17.8965C17.9648 17.4512 17.7773 17.1934 17.2851 16.959L11.3438 14.041V13.9707L17.2851 10.9824C17.7656 10.7481 17.9648 10.4668 17.9648 10.0332C17.9648 9.50586 17.5664 9.10742 17.0156 9.10742C16.7578 9.10742 16.6171 9.1543 16.4296 9.24805L9.44532 13.0098C8.97657 13.2676 8.75391 13.5957 8.75391 14.041C8.75391 14.5215 8.95313 14.8145 9.44532 15.0723L16.4296 18.7051C16.6054 18.7871 16.7578 18.834 16.9921 18.834Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37232">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.02734 2.08789)"/>
</clipPath>
</defs>
</svg>

`;

export const LessthanCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
