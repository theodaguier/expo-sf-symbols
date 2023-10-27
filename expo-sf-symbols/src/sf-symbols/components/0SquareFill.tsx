
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_37930)">
<path d="M6.68604 24.5977H20.9008C23.3618 24.5977 24.5805 23.3789 24.5805 20.9648V6.65625C24.5805 4.24219 23.3618 3.02344 20.9008 3.02344H6.68604C4.23682 3.02344 3.00635 4.23047 3.00635 6.65625V20.9648C3.00635 23.3906 4.23682 24.5977 6.68604 24.5977Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.7994 19.5469C11.2446 19.5469 9.53369 17.2383 9.53369 13.793C9.53369 10.3477 11.2446 8.03906 13.7994 8.03906C16.3658 8.03906 18.0767 10.3477 18.0767 13.793C18.0767 17.2383 16.3658 19.5469 13.7994 19.5469ZM13.7994 17.9883C15.2408 17.9883 16.2134 16.3125 16.2134 13.793C16.2134 11.2734 15.2408 9.59766 13.7994 9.59766C12.3696 9.59766 11.3853 11.2734 11.3853 13.793C11.3853 16.3125 12.3696 17.9883 13.7994 17.9883Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37930">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.00635 3)"/>
</clipPath>
</defs>
</svg>

`;

export const 0SquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
