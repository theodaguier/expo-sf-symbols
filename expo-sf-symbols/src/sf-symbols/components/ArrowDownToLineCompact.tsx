
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
<g clip-path="url(#clip0_2207_37475)">
<path d="M13.9696 4.01538C13.3485 4.01538 12.9149 4.44897 12.9149 5.05835V16.8943L13.0087 19.4138L9.48133 15.5466L6.85633 12.9568C6.65711 12.7693 6.38758 12.6638 6.10633 12.6638C5.50867 12.6638 5.08679 13.1091 5.08679 13.6951C5.08679 13.9763 5.20398 14.2342 5.42664 14.4802L13.1844 22.2381C13.4071 22.4724 13.6766 22.6013 13.9696 22.6013C14.2509 22.6013 14.5321 22.4724 14.7548 22.2381L22.5008 14.4802C22.7352 14.2342 22.8524 13.9763 22.8524 13.6951C22.8524 13.1091 22.4188 12.6638 21.8329 12.6638C21.5516 12.6638 21.2704 12.7693 21.0829 12.9568L18.4579 15.5466L14.9305 19.4021L15.0126 16.8943V5.05835C15.0126 4.44897 14.579 4.01538 13.9696 4.01538ZM6.04773 22.5779C5.45007 22.5779 5.03992 23.0115 5.03992 23.6209C5.03992 24.2302 5.45007 24.6756 6.04773 24.6756H21.8563C22.4657 24.6756 22.8876 24.2302 22.8876 23.6209C22.8876 23.0115 22.4657 22.5779 21.8563 22.5779H6.04773Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37475">
<rect width="17.8477" height="20.6602" fill="currentColor" transform="translate(5.03992 4.01538)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowDownToLineCompact = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
