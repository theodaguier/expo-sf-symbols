
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
<g clip-path="url(#clip0_2207_37348)">
<path d="M6.67969 24.6187H20.8945C23.3555 24.6187 24.5742 23.3999 24.5742 20.9858V6.67725C24.5742 4.26319 23.3555 3.04443 20.8945 3.04443H6.67969C4.23047 3.04443 3 4.25147 3 6.67725V20.9858C3 23.4116 4.23047 24.6187 6.67969 24.6187Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.8047 19.8608C13.2773 19.8608 12.8906 19.4858 12.8906 18.9468V12.9351L12.9961 10.3687L11.7891 11.8218L10.3594 13.2632C10.1953 13.4272 9.97266 13.5327 9.71484 13.5327C9.21094 13.5327 8.83594 13.146 8.83594 12.6538C8.83594 12.396 8.90625 12.1851 9.07031 12.021L13.1016 8.00147C13.3477 7.75538 13.5469 7.66162 13.8047 7.66162C14.0859 7.66162 14.2852 7.76709 14.5195 8.00147L18.5391 12.021C18.7148 12.1851 18.7969 12.396 18.7969 12.6538C18.7969 13.146 18.4102 13.5327 17.9062 13.5327C17.6484 13.5327 17.4258 13.439 17.2617 13.2632L15.8438 11.8218L14.6133 10.3569L14.7188 12.9351V18.9468C14.7188 19.4858 14.3438 19.8608 13.8047 19.8608Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37348">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3 3.021)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowUpSquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
