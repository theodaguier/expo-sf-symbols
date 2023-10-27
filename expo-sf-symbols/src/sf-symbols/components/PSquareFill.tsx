
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
<g clip-path="url(#clip0_2207_37686)">
<path d="M6.75537 24.7002H20.9702C23.4312 24.7002 24.6499 23.4814 24.6499 21.0673V6.75879C24.6499 4.34473 23.4312 3.12598 20.9702 3.12598H6.75537C4.30615 3.12598 3.07568 4.33301 3.07568 6.75879V21.0673C3.07568 23.4931 4.30615 24.7002 6.75537 24.7002Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.2788 19.4384C10.6577 19.4384 10.3179 18.9814 10.3179 18.3369V9.37207C10.3179 8.71582 10.646 8.27051 11.2788 8.27051H14.6421C16.9859 8.27051 18.5796 9.77051 18.5796 11.9971C18.5796 14.2236 17.0093 15.7002 14.6304 15.7002H12.2632V18.3369C12.2632 19.0048 11.9233 19.4384 11.2788 19.4384ZM12.2632 14.2236H14.3726C15.7905 14.2236 16.6577 13.3681 16.6577 11.9971C16.6577 10.6143 15.7788 9.75879 14.3726 9.75879H12.2632V14.2236Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37686">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.07568 3.10254)"/>
</clipPath>
</defs>
</svg>

`;

export const PSquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
