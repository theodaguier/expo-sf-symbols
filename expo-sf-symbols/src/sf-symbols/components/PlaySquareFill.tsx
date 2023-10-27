
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
<g clip-path="url(#clip0_2207_33833)">
<path d="M6.68189 24.7095H20.8967C23.3577 24.7095 24.5764 23.4907 24.5764 21.0766V6.76807C24.5764 4.35401 23.3577 3.13525 20.8967 3.13525H6.68189C4.23267 3.13525 3.0022 4.34229 3.0022 6.76807V21.0766C3.0022 23.5024 4.23267 24.7095 6.68189 24.7095Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.5686 18.6274C11.0061 18.9673 10.3616 18.6977 10.3616 18.1118V9.70946C10.3616 9.13524 11.053 8.88914 11.5686 9.19383L18.4475 13.272C18.9397 13.5649 18.9514 14.268 18.4475 14.5727L11.5686 18.6274Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_33833">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.0022 3.11182)"/>
</clipPath>
</defs>
</svg>

`;

export const PlaySquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
