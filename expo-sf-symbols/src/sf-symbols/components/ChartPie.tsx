
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
<g clip-path="url(#clip0_2207_36942)">
<path d="M21.0531 22.1177L22.2367 21.0162L15.557 14.4185L23.5727 9.81299L22.7875 8.45362L14.9008 12.9771V3.57862H13.3305V14.1607C13.3305 14.4185 13.3891 14.6294 13.6117 14.8404L21.0531 22.1177ZM13.9867 25.9497C20.5258 25.9497 25.9398 20.524 25.9398 13.9966C25.9398 7.45752 20.5141 2.04346 13.975 2.04346C7.44763 2.04346 2.03357 7.45752 2.03357 13.9966C2.03357 20.524 7.45935 25.9497 13.9867 25.9497ZM13.9867 23.9576C8.45545 23.9576 4.03748 19.5279 4.03748 13.9966C4.03748 8.46534 8.44373 4.03565 13.975 4.03565C19.5063 4.03565 23.9477 8.46534 23.9477 13.9966C23.9477 19.5279 19.518 23.9576 13.9867 23.9576Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36942">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.03357 2.04346)"/>
</clipPath>
</defs>
</svg>

`;

export const ChartPie = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
