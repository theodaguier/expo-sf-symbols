
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="31" height="29" viewBox="0 0 31 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_36880)">
<path d="M0.0651855 14.9073C0.0651855 17.4151 0.475341 18.5636 2.33863 19.5245L8.93628 22.9112C11.3621 24.1651 13.0964 24.4815 15.8152 23.6847L25.9636 20.7315C29.0925 19.8058 30.3933 17.9425 30.3933 14.9073V7.59479C30.3933 5.47369 28.9871 4.03229 26.8777 4.03229L3.60425 4.02057C1.49488 4.02057 0.0651855 5.45026 0.0651855 7.55963V14.9073Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36880">
<rect width="30.3281" height="21.0873" fill="currentColor" transform="translate(0.0651855 3.03357)"/>
</clipPath>
</defs>
</svg>

`;

export const ButtonAngledbottomHorizontalRightFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
