
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
<g clip-path="url(#clip0_2207_36786)">
<path d="M13.9573 26.1572C20.4964 26.1572 25.9104 20.7314 25.9104 14.2041C25.9104 7.66504 20.4846 2.25098 13.9455 2.25098C7.41821 2.25098 2.00415 7.66504 2.00415 14.2041C2.00415 20.7314 7.42993 26.1572 13.9573 26.1572Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M7.86352 16.5597L12.4338 8.60258C13.2189 7.25493 14.7424 7.3018 15.4924 8.59086L20.0744 16.5597C20.8713 17.9425 20.2502 19.2667 18.7033 19.2667H9.24633C7.68773 19.2667 7.07836 17.9425 7.86352 16.5597ZM9.45726 17.2042C9.32836 17.3917 9.39867 17.5675 9.63305 17.5675H18.3049C18.551 17.5675 18.6096 17.3917 18.4924 17.2042L14.1564 9.68071C14.0627 9.50493 13.8635 9.49321 13.7697 9.68071L9.45726 17.2042Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_36786">
<rect width="23.9062" height="24.0117" fill="currentColor" transform="translate(2.00415 2.14551)"/>
</clipPath>
</defs>
</svg>

`;

export const TriangleCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
