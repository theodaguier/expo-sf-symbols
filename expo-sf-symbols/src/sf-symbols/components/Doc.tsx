
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
<g clip-path="url(#clip0_2207_33020)">
<path d="M7.65796 26.1812H20.1032C22.529 26.1812 23.736 24.9507 23.736 22.5132V11.8726C23.736 10.3608 23.5603 9.70459 22.6228 8.74365L16.1657 2.16943C15.2751 1.25537 14.5368 1.05615 13.2244 1.05615H7.65796C5.2439 1.05615 4.02515 2.29834 4.02515 4.73584V22.5132C4.02515 24.9624 5.23218 26.1812 7.65796 26.1812ZM7.73999 24.2945C6.53296 24.2945 5.91187 23.65 5.91187 22.4781V4.77099C5.91187 3.61084 6.53296 2.94287 7.75171 2.94287H12.9666V9.75146C12.9666 11.2281 13.7048 11.9546 15.1696 11.9546H21.8493V22.4781C21.8493 23.65 21.2282 24.2945 20.0095 24.2945H7.73999ZM15.3806 10.1851C14.9118 10.1851 14.736 9.99756 14.736 9.52881V3.30615L21.486 10.1851H15.3806Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33020">
<rect width="19.7109" height="25.1367" fill="currentColor" transform="translate(4.02515 1.05615)"/>
</clipPath>
</defs>
</svg>

`;

export const Doc = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
