
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
<g clip-path="url(#clip0_2207_36834)">
<path d="M9.92871 4.03357C3.13184 4.03357 0.0966797 7.16248 0.0966797 13.5609V20.9086C0.0966797 23.2758 1.31543 24.4711 3.69434 24.4711H23.5342C25.9131 24.4711 27.1319 23.2641 27.1319 20.9086V13.5609C27.1319 7.16248 24.0967 4.03357 17.2998 4.03357H9.92871Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36834">
<rect width="27.0352" height="20.4492" fill="currentColor" transform="translate(0.0966797 4.03357)"/>
</clipPath>
</defs>
</svg>

`;

export const ButtonRoundedtopHorizontalFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
