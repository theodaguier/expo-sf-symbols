
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
<g clip-path="url(#clip0_2207_34520)">
<path d="M6.73853 24.6788H20.9533C23.4143 24.6788 24.633 23.46 24.633 21.0459V6.7373C24.633 4.32324 23.4143 3.10449 20.9533 3.10449H6.73853C4.28931 3.10449 3.05884 4.31152 3.05884 6.7373V21.0459C3.05884 23.4717 4.28931 24.6788 6.73853 24.6788Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.53931 18.3272C7.7815 18.3272 6.44556 17.2608 6.44556 15.2686C6.44556 13.9444 7.27759 12.8545 8.40259 12.3975C8.57837 11.1553 9.63306 10.2529 10.887 10.2529C11.0276 10.2529 11.2034 10.2764 11.3674 10.3115C12.176 9.19825 13.4768 8.49512 14.9533 8.49512C17.4611 8.49512 19.4182 10.499 19.4182 12.9482C19.4182 13.0537 19.4065 13.1709 19.3947 13.2999C20.4729 13.5577 21.2815 14.5655 21.2815 15.7725C21.2815 17.1788 20.1565 18.3272 18.715 18.3272H9.53931Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_34520">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.05884 3.08105)"/>
</clipPath>
</defs>
</svg>

`;

export const IcloudSquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
