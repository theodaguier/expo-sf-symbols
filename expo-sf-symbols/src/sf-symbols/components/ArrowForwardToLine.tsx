
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
<g clip-path="url(#clip0_2207_37497)">
<path d="M15.2988 22.781C15.58 22.781 15.8261 22.6873 16.0605 22.4646L23.8535 14.6834C24.0878 14.4607 24.205 14.1912 24.205 13.8982C24.205 13.6169 24.0878 13.3474 23.8535 13.113L16.0605 5.34351C15.8261 5.12085 15.58 5.01538 15.2988 5.01538C14.7246 5.01538 14.2793 5.44897 14.2793 6.02319C14.2793 6.30444 14.373 6.58569 14.5605 6.77319L17.1855 9.43335L21.791 13.6404L22.0254 12.9841L18.5332 12.8552H3.08789C2.47852 12.8552 2.05664 13.2888 2.05664 13.8982C2.05664 14.5076 2.47852 14.9529 3.08789 14.9529H18.5332L22.0254 14.824L21.791 14.1794L17.1855 18.3631L14.5605 21.0349C14.373 21.2224 14.2793 21.5037 14.2793 21.7732C14.2793 22.3592 14.7246 22.781 15.2988 22.781ZM25.248 22.781C25.8574 22.781 26.3027 22.3709 26.3027 21.7732V6.05835C26.3027 5.44897 25.8574 5.01538 25.248 5.01538C24.6386 5.01538 24.205 5.44897 24.205 6.05835V21.7732C24.205 22.3709 24.6386 22.781 25.248 22.781Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37497">
<rect width="24.2461" height="18.2227" fill="currentColor" transform="translate(2.05664 5.01538)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowForwardToLine = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
