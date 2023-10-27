
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="28" height="29" viewBox="0 0 28 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_37752)">
<path d="M8.12549 24.4932C11.4185 24.4932 13.2114 22.7588 13.7856 19.1494L15.4966 8.46191C15.8833 6.09473 17.0669 5.04004 19.27 5.04004C20.0786 5.04004 20.7583 5.21582 21.2622 5.2627C21.6021 5.27441 21.8481 5.18067 22.0122 4.99317C22.1411 4.87598 22.2114 4.68848 22.2114 4.46582C22.2114 3.9502 21.8481 3.59863 21.2739 3.3877C20.77 3.2002 19.9849 3.07129 19.1294 3.07129C15.8364 3.07129 13.9146 4.84082 13.3521 8.30957L11.6528 18.9033C11.2427 21.4346 10.1763 22.501 7.93799 22.501C7.51611 22.501 7.11768 22.4307 6.89502 22.3838C6.56689 22.3135 6.25049 22.2549 5.9458 22.2549C5.34814 22.2549 5.0083 22.6182 5.0083 23.1104C5.0083 23.626 5.32471 23.9893 5.91064 24.1885C6.46142 24.3877 7.19971 24.4932 8.12549 24.4932ZM7.80908 14.0869H19.7856C20.3247 14.0869 20.6645 13.7705 20.6645 13.2549C20.6645 12.7158 20.3247 12.376 19.7856 12.376H7.80908C7.2583 12.376 6.91846 12.7158 6.91846 13.2549C6.91846 13.7588 7.2583 14.0869 7.80908 14.0869Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37752">
<rect width="17.2031" height="21.4336" fill="currentColor" transform="translate(5.0083 3.07129)"/>
</clipPath>
</defs>
</svg>

`;

export const Florinsign = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
