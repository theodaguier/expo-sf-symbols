
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
<g clip-path="url(#clip0_2207_33294)">
<path d="M6.68799 24.7056H20.9028C23.3638 24.7056 24.5825 23.4868 24.5825 21.0727V6.76416C24.5825 4.3501 23.3638 3.13135 20.9028 3.13135H6.68799C4.23877 3.13135 3.0083 4.33838 3.0083 6.76416V21.0727C3.0083 23.4985 4.23877 24.7056 6.68799 24.7056Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M5.90283 22.9477C6.80518 19.9712 9.96924 17.8267 13.813 17.8267C17.645 17.8267 20.8091 19.9712 21.7114 22.9477H5.90283ZM13.8013 15.8696C11.563 15.8462 9.80518 13.9829 9.79346 11.4751C9.78174 9.11963 11.563 7.17432 13.8013 7.17432C16.0395 7.17432 17.8091 9.11963 17.8091 11.4751C17.8091 13.9829 16.0395 15.8931 13.8013 15.8696Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_33294">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.0083 3.10791)"/>
</clipPath>
</defs>
</svg>

`;

export const PersonCropSquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
