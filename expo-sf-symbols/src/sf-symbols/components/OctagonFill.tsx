
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
<g clip-path="url(#clip0_2207_34343)">
<path d="M10.4927 25.2822H17.606C19.0942 25.2822 19.7974 24.8017 20.5708 23.9697L25.1177 18.9541C25.8794 18.1103 26.0903 17.5361 26.0903 16.3759V11.0205C26.0903 9.84863 25.8794 9.28613 25.1177 8.44238L20.5708 3.42676C19.7974 2.59473 19.0942 2.10254 17.606 2.10254H10.4927C9.00439 2.10254 8.28955 2.59473 7.52783 3.42676L2.98096 8.44238C2.20752 9.28613 2.0083 9.84863 2.0083 11.0205V16.3759C2.0083 17.5361 2.20752 18.1103 2.98096 18.9541L7.52783 23.9697C8.28955 24.8017 9.00439 25.2822 10.4927 25.2822Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34343">
<rect width="24.082" height="23.1914" fill="currentColor" transform="translate(2.0083 2.10254)"/>
</clipPath>
</defs>
</svg>

`;

export const OctagonFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
