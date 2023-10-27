
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
<g clip-path="url(#clip0_2207_36591)">
<path d="M1.25806 7.0459V8.69824H26.3831V7.0459H1.25806ZM3.68384 24.6709H23.9573C26.4183 24.6709 27.6369 23.4639 27.6369 21.0498V6.72949C27.6369 4.31543 26.4183 3.09668 23.9573 3.09668H3.68384C1.23462 3.09668 0.00415039 4.31543 0.00415039 6.72949V21.0498C0.00415039 23.4639 1.23462 24.6709 3.68384 24.6709ZM3.70727 22.7842C2.5354 22.7842 1.89087 22.1631 1.89087 20.9444V6.83496C1.89087 5.61621 2.5354 4.9834 3.70727 4.9834H23.9339C25.094 4.9834 25.7502 5.61621 25.7502 6.83496V20.9444C25.7502 22.1631 25.094 22.7842 23.9339 22.7842H3.70727Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M5.04321 19.913C5.04321 20.5224 5.46509 20.9325 6.08618 20.9325H21.5901C22.2112 20.9325 22.6331 20.5224 22.6331 19.913V18.1552C22.6331 17.5458 22.2112 17.1357 21.5901 17.1357H6.08618C5.46509 17.1357 5.04321 17.5458 5.04321 18.1552V19.913Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36591">
<rect width="27.6328" height="21.5742" fill="currentColor" transform="translate(0.00415039 3.09668)"/>
</clipPath>
</defs>
</svg>

`;

export const MenubarDockRectangle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
