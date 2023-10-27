
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
<g clip-path="url(#clip0_2207_34021)">
<path d="M25.9672 14.0007C25.9672 7.46167 20.5532 2.04761 14.0141 2.04761C7.48682 2.04761 2.06104 7.44995 2.06104 14.0007C2.06104 20.5164 7.48682 25.9538 14.0141 25.9538C20.5532 25.9538 25.9672 20.5281 25.9672 14.0007ZM23.9751 14.0007C23.9751 19.532 19.5454 23.9734 14.0141 23.9617C8.48292 23.9499 4.05323 19.5203 4.05323 14.0007H23.9751Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34021">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.06104 2.04761)"/>
</clipPath>
</defs>
</svg>

`;

export const CircleTophalfFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
