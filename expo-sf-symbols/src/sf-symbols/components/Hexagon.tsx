
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
<g clip-path="url(#clip0_2207_34348)">
<path d="M3.74707 21.2388L11.7627 25.8559C13.1455 26.6528 14.4932 26.6645 15.8994 25.8559L23.9151 21.2388C25.0049 20.6059 25.5908 19.9848 25.5908 18.2856V9.16849C25.5908 7.51615 24.9932 6.91849 23.9971 6.34427L15.958 1.70364C14.5049 0.859894 13.1221 0.883332 11.7041 1.70364L3.67676 6.34427C2.66894 6.91849 2.07129 7.51615 2.07129 9.16849V18.2856C2.07129 19.9848 2.66895 20.6059 3.74707 21.2388ZM4.80176 19.563C4.16895 19.1997 3.95801 18.8833 3.95801 18.2388V9.21537C3.95801 8.62943 4.15723 8.33646 4.71973 8.02005L12.4893 3.49662C13.4268 2.96927 14.2119 2.94583 15.1729 3.49662L22.9424 8.02005C23.5049 8.33646 23.7041 8.62943 23.7041 9.21537V18.2388C23.7041 18.8833 23.5049 19.1997 22.8604 19.563L15.1143 24.0513C14.1885 24.5786 13.4502 24.5669 12.5479 24.0513L4.80176 19.563Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34348">
<rect width="23.5195" height="25.3799" fill="currentColor" transform="translate(2.07129 1.07812)"/>
</clipPath>
</defs>
</svg>

`;

export const Hexagon = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
