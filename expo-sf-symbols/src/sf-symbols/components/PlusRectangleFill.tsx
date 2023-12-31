
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
<g clip-path="url(#clip0_2207_37195)">
<path d="M3.73218 24.686H24.0056C26.4666 24.686 27.6853 23.479 27.6853 21.0649V6.74463C27.6853 4.33057 26.4666 3.11182 24.0056 3.11182H3.73218C1.28296 3.11182 0.0524902 4.33057 0.0524902 6.74463V21.0649C0.0524902 23.479 1.28296 24.686 3.73218 24.686Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.15015 13.9165C8.15015 13.3071 8.58374 12.8853 9.19311 12.8853H12.8611V9.21729C12.8611 8.60791 13.2713 8.17432 13.8572 8.17432C14.4783 8.17432 14.9002 8.60791 14.9002 9.21729V12.8853H18.5681C19.1775 12.8853 19.5994 13.3071 19.5994 13.9165C19.5994 14.5141 19.1775 14.9126 18.5681 14.9126H14.9002V18.5923C14.9002 19.2016 14.4783 19.6235 13.8572 19.6235C13.2713 19.6235 12.8611 19.1899 12.8611 18.5923V14.9126H9.19311C8.58374 14.9126 8.15015 14.5141 8.15015 13.9165Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37195">
<rect width="27.6328" height="21.5742" fill="currentColor" transform="translate(0.0524902 3.11182)"/>
</clipPath>
</defs>
</svg>

`;

export const PlusRectangleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
