
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
<g clip-path="url(#clip0_2207_37650)">
<path d="M6.73218 24.6705H20.947C23.408 24.6705 24.6267 23.4517 24.6267 21.0376V6.729C24.6267 4.31494 23.408 3.09619 20.947 3.09619H6.73218C4.28296 3.09619 3.05249 4.30322 3.05249 6.729V21.0376C3.05249 23.4634 4.28296 24.6705 6.73218 24.6705Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.9041 19.5962C10.7048 19.5962 8.67749 17.3345 8.67749 13.7603C8.67749 10.1978 10.7048 7.9126 13.8572 7.9126C16.1423 7.9126 17.7478 9.04932 18.3337 10.5845C18.4158 10.7837 18.4509 10.936 18.4509 11.147C18.4509 11.6626 18.1228 11.9907 17.6072 11.9907C17.2322 11.9907 16.9978 11.8032 16.7986 11.3931C16.2947 10.186 15.2752 9.52979 13.8923 9.52979C11.947 9.52979 10.6462 11.229 10.6462 13.7603C10.6462 16.3033 11.9587 17.9908 13.9275 17.9908C15.7673 17.9908 16.7166 17.0298 16.7166 15.6001V14.8033H14.4783C14.033 14.8033 13.7634 14.4751 13.7634 14.1001C13.7634 13.69 14.033 13.397 14.4783 13.397H17.6189C18.2634 13.397 18.6502 13.7837 18.6502 14.4517V15.3423C18.6502 17.8501 16.8923 19.5962 13.9041 19.5962Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37650">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.05249 3.07275)"/>
</clipPath>
</defs>
</svg>

`;

export const GSquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
