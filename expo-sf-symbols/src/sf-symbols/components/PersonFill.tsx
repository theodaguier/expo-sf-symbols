
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
<g clip-path="url(#clip0_2207_33216)">
<path d="M6.01856 24.1782H21.7334C22.9873 24.1782 23.7373 23.5923 23.7373 22.6196C23.7373 19.5962 19.9521 15.4243 13.8701 15.4243C7.79981 15.4243 4.01465 19.5962 4.01465 22.6196C4.01465 23.5923 4.76465 24.1782 6.01856 24.1782ZM13.8818 13.3267C16.3896 13.3267 18.5693 11.0767 18.5693 8.14697C18.5693 5.25244 16.3896 3.10791 13.8818 3.10791C11.374 3.10791 9.19434 5.29932 9.19434 8.17041C9.19434 11.0767 11.3623 13.3267 13.8818 13.3267Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33216">
<rect width="19.7227" height="21.082" fill="currentColor" transform="translate(4.01465 3.10791)"/>
</clipPath>
</defs>
</svg>

`;

export const PersonFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
