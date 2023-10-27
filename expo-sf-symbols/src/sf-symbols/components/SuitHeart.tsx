
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
<g clip-path="url(#clip0_2207_34388)">
<path d="M2.02319 10.9297C2.02319 15.9219 6.20678 20.832 12.8162 25.0508C13.0623 25.2031 13.4138 25.3672 13.6599 25.3672C13.906 25.3672 14.2576 25.2031 14.5154 25.0508C21.113 20.832 25.2966 15.9219 25.2966 10.9297C25.2966 6.78125 22.449 3.85156 18.6521 3.85156C16.4841 3.85156 14.7263 4.88281 13.6599 6.46484C12.617 4.89453 10.8357 3.85156 8.66772 3.85156C4.87085 3.85156 2.02319 6.78125 2.02319 10.9297ZM3.90991 10.9297C3.90991 7.8125 5.92553 5.73828 8.64428 5.73828C10.8474 5.73828 12.113 7.10938 12.863 8.28125C13.1794 8.75 13.3787 8.87891 13.6599 8.87891C13.9412 8.87891 14.117 8.73828 14.4568 8.28125C15.2654 7.13281 16.4841 5.73828 18.6755 5.73828C21.3943 5.73828 23.4099 7.8125 23.4099 10.9297C23.4099 15.289 18.8044 19.9883 13.906 23.2461C13.7888 23.3281 13.7068 23.3867 13.6599 23.3867C13.613 23.3867 13.531 23.3281 13.4255 23.2461C8.51538 19.9883 3.90991 15.289 3.90991 10.9297Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34388">
<rect width="23.2734" height="22.2305" fill="currentColor" transform="translate(2.02319 3.13672)"/>
</clipPath>
</defs>
</svg>

`;

export const SuitHeart = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
