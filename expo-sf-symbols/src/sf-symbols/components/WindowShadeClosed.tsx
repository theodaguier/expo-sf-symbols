
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
<g clip-path="url(#clip0_2207_35121)">
<path d="M4.05884 24.628C4.05884 26.0576 5.04321 27.0186 6.50806 27.0186H21.6604C23.1369 27.0186 24.1096 26.0576 24.1096 24.628V4.54199C24.1096 3.11231 23.1369 2.15137 21.6604 2.15137H6.50806C5.04321 2.15137 4.05884 3.11231 4.05884 4.54199V24.628ZM5.94556 24.5108V4.65918C5.94556 4.28418 6.19165 4.03809 6.54322 4.03809H21.6252C21.9885 4.03809 22.2229 4.28418 22.2229 4.65918V24.5108C22.2229 24.8858 21.9885 25.1319 21.6252 25.1319H6.54322C6.19165 25.1319 5.94556 24.8858 5.94556 24.5108Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M7.71509 23.7725H20.465C20.6877 23.7725 20.8635 23.585 20.8635 23.3741V5.7959C20.8635 5.57325 20.6877 5.39746 20.465 5.39746H7.71509C7.49243 5.39746 7.31665 5.57325 7.31665 5.7959V23.3741C7.31665 23.585 7.49243 23.7725 7.71509 23.7725ZM12.2034 22.3311C11.8753 22.3311 11.6409 22.0967 11.6409 21.7686C11.6409 21.4287 11.8753 21.1944 12.2034 21.1944H15.7776C16.1057 21.1944 16.34 21.4287 16.34 21.7686C16.34 22.0967 16.1057 22.3311 15.7776 22.3311H12.2034Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35121">
<rect width="20.0508" height="24.8789" fill="currentColor" transform="translate(4.05884 2.15137)"/>
</clipPath>
</defs>
</svg>

`;

export const WindowShadeClosed = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
