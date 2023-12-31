
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
<g clip-path="url(#clip0_2207_32898)">
<path d="M3.6875 26.2573H16.1328C18.5586 26.2573 19.7656 25.0268 19.7656 22.5776V14.8433H11.1055C10.4844 14.8433 9.95703 14.3159 9.95703 13.6831C9.95703 13.0503 10.4844 12.5112 11.1055 12.5112H19.7656V4.8003C19.7656 2.3628 18.5586 1.13232 16.1328 1.13232H3.6875C1.26172 1.13232 0.0546875 2.3628 0.0546875 4.8003V22.5776C0.0546875 25.0268 1.26172 26.2573 3.6875 26.2573Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M18.8516 13.6831C18.8516 14.187 19.2617 14.6089 19.7539 14.6089H23.1641L24.9219 14.5386L24.0899 15.3354L22.2031 17.105C22.0156 17.269 21.9219 17.5151 21.9219 17.7378C21.9219 18.23 22.2617 18.5933 22.7422 18.5933C22.9883 18.5933 23.1758 18.4995 23.3633 18.3237L27.1836 14.3628C27.418 14.1284 27.4883 13.9175 27.4883 13.6831C27.4883 13.437 27.418 13.2378 27.1836 13.0034L23.3633 9.04249C23.1758 8.8667 22.9883 8.76123 22.7422 8.76123C22.2617 8.76123 21.9219 9.1128 21.9219 9.60499C21.9219 9.83936 22.0156 10.0855 22.2031 10.2495L24.0899 12.0308L24.9219 12.8276L23.1641 12.7456H19.7539C19.2617 12.7456 18.8516 13.1792 18.8516 13.6831Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_32898">
<rect width="27.4336" height="25.1367" fill="currentColor" transform="translate(0.0546875 1.12061)"/>
</clipPath>
</defs>
</svg>

`;

export const RectanglePortraitAndArrowRightFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
