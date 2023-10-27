
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
<g clip-path="url(#clip0_2207_33831)">
<path d="M14.0224 26.0166C20.5615 26.0166 25.9755 20.5909 25.9755 14.0635C25.9755 7.52441 20.5498 2.11035 14.0107 2.11035C7.4834 2.11035 2.06934 7.52441 2.06934 14.0635C2.06934 20.5909 7.49512 26.0166 14.0224 26.0166Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.7959 18.7861C11.2334 19.1259 10.5889 18.8564 10.5889 18.2705V9.86814C10.5889 9.29392 11.2803 9.04783 11.7959 9.35252L18.6748 13.4306C19.167 13.7236 19.1787 14.4267 18.6748 14.7314L11.7959 18.7861Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_33831">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.06934 2.11035)"/>
</clipPath>
</defs>
</svg>

`;

export const PlayCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
