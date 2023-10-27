
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
<g clip-path="url(#clip0_2207_37589)">
<path d="M5.5061 23.6683C5.97485 23.6683 6.34985 23.4691 6.84204 23.223L21.9006 15.9222C22.8967 15.43 23.2131 14.973 23.2131 14.3519C23.2131 13.7308 22.8967 13.2855 21.9006 12.7933L6.84204 5.48083C6.33813 5.23474 5.96313 5.03552 5.49438 5.03552C4.6272 5.03552 4.08813 5.69177 4.08813 6.7113L4.09985 21.9926C4.09985 23.0121 4.63892 23.6683 5.5061 23.6683Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37589">
<rect width="19.125" height="18.6445" fill="currentColor" transform="translate(4.08813 5.0238)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowtriangleRightFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
