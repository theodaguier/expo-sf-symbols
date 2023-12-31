
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
<g clip-path="url(#clip0_2207_35120)">
<path d="M4.06104 24.628C4.06104 26.0576 5.04541 27.0186 6.51026 27.0186H21.6626C23.1391 27.0186 24.1118 26.0576 24.1118 24.628V4.54199C24.1118 3.11231 23.1391 2.15137 21.6626 2.15137H6.51026C5.04541 2.15137 4.06104 3.11231 4.06104 4.54199V24.628ZM5.94776 24.5108V4.65918C5.94776 4.28418 6.19385 4.03809 6.54542 4.03809H21.6274C21.9907 4.03809 22.2251 4.28418 22.2251 4.65918V24.5108C22.2251 24.8858 21.9907 25.1319 21.6274 25.1319H6.54542C6.19385 25.1319 5.94776 24.8858 5.94776 24.5108Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M7.71729 9.40528H20.4672C20.6899 9.40528 20.8657 9.22949 20.8657 9.01856V5.7959C20.8657 5.57325 20.6899 5.39746 20.4672 5.39746H7.71729C7.49463 5.39746 7.31885 5.57325 7.31885 5.7959V9.01856C7.31885 9.22949 7.49463 9.40528 7.71729 9.40528ZM12.311 7.96387C11.9712 7.96387 11.7368 7.74121 11.7368 7.40137C11.7368 7.06153 11.9712 6.83887 12.311 6.83887H15.8735C16.2133 6.83887 16.436 7.06153 16.436 7.40137C16.436 7.74121 16.2133 7.96387 15.8735 7.96387H12.311Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35120">
<rect width="20.0508" height="24.8789" fill="currentColor" transform="translate(4.06104 2.15137)"/>
</clipPath>
</defs>
</svg>

`;

export const WindowShadeOpen = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
