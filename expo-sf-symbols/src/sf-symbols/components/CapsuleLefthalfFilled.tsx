
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
<g clip-path="url(#clip0_2207_34296)">
<path d="M0.0231934 14.263C0.0231934 21.0481 4.69897 25.4895 11.7537 25.4895H18.3748C25.4294 25.4895 30.117 21.0481 30.117 14.263C30.117 7.47779 25.4294 3.03638 18.3748 3.03638H11.7537C4.69897 3.03638 0.0231934 7.47779 0.0231934 14.263ZM15.0701 23.6028V4.9231H18.3748C24.2341 4.9231 28.2302 8.68482 28.2302 14.263C28.2302 19.8411 24.2341 23.6028 18.3748 23.6028H15.0701Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34296">
<rect width="30.0938" height="22.4648" fill="currentColor" transform="translate(0.0231934 3.03638)"/>
</clipPath>
</defs>
</svg>

`;

export const CapsuleLefthalfFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
