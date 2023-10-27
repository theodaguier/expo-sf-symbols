
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
<g clip-path="url(#clip0_2207_34058)">
<path d="M7.24218 25.187H21.4687C23.9179 25.187 25.1484 23.9683 25.1484 21.5542V7.2456C25.1484 4.83154 23.9179 3.61279 21.4687 3.61279H7.24218C4.80468 3.61279 3.57422 4.81982 3.57422 7.2456V21.5542C3.57422 23.98 4.80468 25.187 7.24218 25.187Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M23.7304 26.9683C24.6328 27.8472 26.0859 27.8589 26.9531 26.9448C27.832 26.0542 27.8203 24.6362 26.9414 23.7573L4.98047 1.79639C4.10156 0.917488 2.66015 0.905769 1.75781 1.79639C0.878906 2.66358 0.878906 4.14014 1.75781 5.00733L23.7304 26.9683Z" fill="currentColor"/>
<path d="M24.7031 25.9956C25.0547 26.3472 25.6406 26.3472 25.9804 25.9956C26.332 25.644 26.332 25.0698 25.9804 24.7183L4.01953 2.76906C3.66797 2.4175 3.08203 2.40578 2.73047 2.76906C2.3789 3.1089 2.3789 3.69484 2.73047 4.0464L24.7031 25.9956Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34058">
<rect width="26.5078" height="26.5108" fill="currentColor" transform="translate(1.09863 1.13281)"/>
</clipPath>
</defs>
</svg>

`;

export const SquareSlashFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
