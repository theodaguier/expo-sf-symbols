
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="28" height="32" viewBox="0 0 28 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_36790)">
<path d="M22.7891 18.2037C22.7891 13.317 20.8672 6.54358 16.0508 1.4928C15.0195 0.414666 13.4844 -0.323615 11.6914 0.37951L10.5547 0.824822C8.43359 1.65686 7.82422 3.10997 8.69141 5.11388C10.543 9.29747 11 12.3326 11 14.9459C11 16.0123 10.4609 16.6568 9.34766 16.6568H6.46484C5.62109 16.6568 5 17.3014 5 18.192V21.0045C5 21.8014 5.53906 22.4107 6.27734 22.4107H8.45703C9.20703 22.4107 9.64062 22.7975 9.64062 23.4303C9.64062 23.9693 9.34766 24.6022 9.34766 25.4225C9.34766 27.2506 10.3438 28.5865 12.4297 29.5943L14.7617 30.7193C16.7656 31.692 18.7109 31.1412 19.8477 29.2897C21.9102 25.9029 22.7891 22.5162 22.7891 18.2037Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36790">
<rect width="17.7891" height="31.1731" fill="currentColor" transform="translate(5 0.103516)"/>
</clipPath>
</defs>
</svg>

`;

export const PaddleshifterRightFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
