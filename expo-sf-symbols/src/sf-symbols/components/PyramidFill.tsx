
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
<g clip-path="url(#clip0_2207_36676)">
<path d="M2.24102 21.6826C1.81914 22.3974 2.00664 23.0654 2.68633 23.3584L12.6121 27.624C12.9285 27.7646 13.2214 27.8818 13.5144 27.9639V2.19434C13.3972 2.27638 13.2683 2.417 13.1746 2.58106L2.24102 21.6826ZM26.323 21.706L15.3894 2.6045C15.2839 2.44044 15.1668 2.29981 15.0496 2.21778V27.9873C15.3425 27.8935 15.6355 27.7764 15.9636 27.6357L25.866 23.3818C26.5457 23.0889 26.7332 22.4209 26.323 21.706Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36676">
<rect width="24.5218" height="26.8711" fill="currentColor" transform="translate(2.01685 1.11621)"/>
</clipPath>
</defs>
</svg>

`;

export const PyramidFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
