
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
<g clip-path="url(#clip0_2207_37595)">
<path d="M5.47266 23.6683C5.94141 23.6683 6.31641 23.4691 6.8086 23.223L21.8672 15.9222C22.8633 15.43 23.1797 14.973 23.1797 14.3519C23.1797 13.7308 22.8633 13.2855 21.8672 12.7933L6.8086 5.48083C6.30469 5.23474 5.92969 5.03552 5.46094 5.03552C4.59375 5.03552 4.05469 5.69177 4.05469 6.7113L4.06641 21.9926C4.06641 23.0121 4.60547 23.6683 5.47266 23.6683Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37595">
<rect width="19.125" height="18.6445" fill="currentColor" transform="translate(4.05469 5.0238)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowtriangleForwardFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
