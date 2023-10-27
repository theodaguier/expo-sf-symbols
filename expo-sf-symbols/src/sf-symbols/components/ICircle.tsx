
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
<g clip-path="url(#clip0_2207_37655)">
<path d="M13.9804 25.9873C20.5195 25.9873 25.9335 20.5616 25.9335 14.0342C25.9335 7.49511 20.5078 2.08105 13.9687 2.08105C7.4414 2.08105 2.02734 7.49511 2.02734 14.0342C2.02734 20.5616 7.45312 25.9873 13.9804 25.9873ZM13.9804 23.9952C8.44922 23.9952 4.03125 19.5655 4.03125 14.0342C4.03125 8.50293 8.4375 4.07324 13.9687 4.07324C19.5 4.07324 23.9414 8.50293 23.9414 14.0342C23.9414 19.5655 19.5117 23.9952 13.9804 23.9952Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.9571 19.4014C14.5665 19.4014 14.9062 18.9913 14.9062 18.3467V9.49903C14.9062 8.8545 14.5665 8.44434 13.9571 8.44434C13.3477 8.44434 13.0312 8.87794 13.0312 9.49903V18.3467C13.0312 18.9678 13.3477 19.4014 13.9571 19.4014Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37655">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.02734 2.08105)"/>
</clipPath>
</defs>
</svg>

`;

export const ICircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
