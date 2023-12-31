
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
<g clip-path="url(#clip0_2207_37009)">
<path d="M8.97535 24.6309H18.8894C20.073 24.6309 20.7996 23.9629 20.7996 22.709V22.4746C20.7996 19.6504 17.8113 16.6504 16.1707 15.0215C15.4324 14.2832 15.3738 13.4629 16.1707 12.666C17.8113 11.0488 20.7996 8.06055 20.7996 5.21289V5.01367C20.7996 3.75977 20.073 3.08008 18.8894 3.08008H8.97535C7.79175 3.08008 7.06519 3.75977 7.06519 5.01367V5.21289C7.06519 8.06055 10.0652 11.0488 11.6941 12.666C12.5027 13.4629 12.4441 14.2832 11.6941 15.0215C10.0652 16.6504 7.06519 19.6504 7.06519 22.4746V22.709C7.06519 23.9629 7.79175 24.6309 8.97535 24.6309Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M14.741 12.0332C14.1551 12.5137 13.7097 12.5137 13.1238 12.0332C12.2449 11.2832 9.7488 8.7168 8.98709 7.36914C8.78787 6.99414 8.89333 6.70117 9.25662 6.70117H18.6082C18.9714 6.70117 19.0886 6.99414 18.8777 7.36914C18.116 8.7168 15.6316 11.2832 14.741 12.0332Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37009">
<rect width="13.7344" height="21.5742" fill="currentColor" transform="translate(7.06519 3.08008)"/>
</clipPath>
</defs>
</svg>

`;

export const HourglassBottomhalfFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
