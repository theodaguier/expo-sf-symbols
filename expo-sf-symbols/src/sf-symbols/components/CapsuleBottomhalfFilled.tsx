
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
<g clip-path="url(#clip0_2207_34299)">
<path d="M0.0168457 14.263C0.0168457 21.0481 4.69263 25.4895 11.7473 25.4895H18.3684C25.423 25.4895 30.1106 21.0481 30.1106 14.263C30.1106 7.47779 25.423 3.03638 18.3684 3.03638H11.7473C4.69263 3.03638 0.0168457 7.47779 0.0168457 14.263ZM1.90357 14.263C1.90357 8.68482 5.89966 4.9231 11.7473 4.9231H18.3684C24.2277 4.9231 28.2238 8.68482 28.2238 14.263H1.90357Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34299">
<rect width="30.0938" height="22.4648" fill="currentColor" transform="translate(0.0168457 3.03638)"/>
</clipPath>
</defs>
</svg>

`;

export const CapsuleBottomhalfFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
