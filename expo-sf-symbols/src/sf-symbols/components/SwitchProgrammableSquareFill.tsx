
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
<g clip-path="url(#clip0_2207_35007)">
<path d="M6.69239 24.7383H20.9072C23.3682 24.7383 24.5869 23.5195 24.5869 21.1054V6.79688C24.5869 4.38281 23.3682 3.16406 20.9072 3.16406H6.69239C4.24317 3.16406 3.0127 4.37109 3.0127 6.79688V21.1054C3.0127 23.5312 4.24317 24.7383 6.69239 24.7383Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.583 20.25C10.0674 20.25 9.69238 19.875 9.69238 19.3594V8.54296C9.69238 8.01562 10.0674 7.64062 10.583 7.64062H17.0166C17.5322 7.64062 17.9072 8.01562 17.9072 8.54296V19.3594C17.9072 19.875 17.5322 20.25 17.0166 20.25H10.583ZM11.4619 12.832H16.1377C16.3721 12.832 16.5361 12.6562 16.5361 12.4102V9.42188C16.5361 9.17579 16.3721 9.01171 16.1377 9.01171H11.4619C11.2275 9.01171 11.0635 9.17579 11.0635 9.42188V12.4102C11.0635 12.6562 11.2275 12.832 11.4619 12.832ZM11.4619 18.8789H16.1377C16.3721 18.8789 16.5361 18.7148 16.5361 18.4687V15.4804C16.5361 15.2344 16.3721 15.0703 16.1377 15.0703H11.4619C11.2275 15.0703 11.0635 15.2344 11.0635 15.4804V18.4687C11.0635 18.7148 11.2275 18.8789 11.4619 18.8789Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_35007">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.0127 3.14062)"/>
</clipPath>
</defs>
</svg>

`;

export const SwitchProgrammableSquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
