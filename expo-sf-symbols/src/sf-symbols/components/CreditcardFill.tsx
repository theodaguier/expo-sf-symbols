
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
<g clip-path="url(#clip0_2207_34786)">
<path d="M4.80567 20.4463C4.11426 20.4463 3.65723 19.9776 3.65723 19.3213V17.1534C3.65723 16.4854 4.11426 16.0284 4.80567 16.0284H7.67676C8.36817 16.0284 8.8252 16.4854 8.8252 17.1534V19.3213C8.8252 19.9776 8.36817 20.4463 7.67676 20.4463H4.80567ZM0.0126953 11.4463V8.78614H27.5518V11.4463H0.0126953ZM3.69239 24.0791H23.8721C26.333 24.0791 27.5518 22.8721 27.5518 20.458V7.69629C27.5518 5.28223 26.333 4.06348 23.8721 4.06348H3.69239C1.24317 4.06348 0.0126953 5.28223 0.0126953 7.69629V20.458C0.0126953 22.8721 1.24317 24.0791 3.69239 24.0791Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34786">
<rect width="27.5391" height="20.0273" fill="currentColor" transform="translate(0.0126953 4.05176)"/>
</clipPath>
</defs>
</svg>

`;

export const CreditcardFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
