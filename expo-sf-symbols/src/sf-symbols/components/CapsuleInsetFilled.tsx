
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
<g clip-path="url(#clip0_2207_34300)">
<path d="M0.0209961 14.263C0.0209961 21.0481 4.69678 25.4895 11.7515 25.4895H18.3726C25.4272 25.4895 30.1148 21.0481 30.1148 14.263C30.1148 7.47779 25.4272 3.03638 18.3726 3.03638H11.7515C4.69678 3.03638 0.0209961 7.47779 0.0209961 14.263ZM1.90772 14.263C1.90772 8.68482 5.90381 4.9231 11.7515 4.9231H18.3726C24.2319 4.9231 28.228 8.68482 28.228 14.263C28.228 19.8411 24.2319 23.6028 18.3726 23.6028H11.7515C5.90381 23.6028 1.90772 19.8411 1.90772 14.263Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M3.51318 14.263C3.51318 9.37622 6.5249 6.51685 11.7515 6.51685H18.3726C23.5991 6.51685 26.6226 9.37622 26.6226 14.263C26.6226 19.1497 23.5991 21.9973 18.3726 21.9973H11.7515C6.5249 21.9973 3.51318 19.1497 3.51318 14.263Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34300">
<rect width="30.0938" height="22.4648" fill="currentColor" transform="translate(0.0209961 3.03638)"/>
</clipPath>
</defs>
</svg>

`;

export const CapsuleInsetFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
