
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
<g clip-path="url(#clip0_2207_35820)">
<path d="M14.0097 26.0097C20.5488 26.0097 25.9628 20.584 25.9628 14.0566C25.9628 7.51758 20.5371 2.10352 13.998 2.10352C7.4707 2.10352 2.05664 7.51758 2.05664 14.0566C2.05664 20.584 7.48242 26.0097 14.0097 26.0097Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.4199 19.5996C10.7988 19.5996 10.459 19.1426 10.459 18.498V9.53321C10.459 8.87696 10.7871 8.43164 11.4082 8.43164H14.7832C17.1269 8.43164 18.7207 9.93164 18.7207 12.1582C18.7207 14.3847 17.1386 15.8613 14.7714 15.8613H12.4043V18.498C12.4043 19.166 12.0644 19.5996 11.4199 19.5996ZM12.4043 14.3847H14.5136C15.9316 14.3847 16.7988 13.5293 16.7988 12.1582C16.7988 10.7754 15.9199 9.91993 14.5136 9.91993H12.4043V14.3847Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_35820">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.05664 2.10352)"/>
</clipPath>
</defs>
</svg>

`;

export const ParkingsignCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
