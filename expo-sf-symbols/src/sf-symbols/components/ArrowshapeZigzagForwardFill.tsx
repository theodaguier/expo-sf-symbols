
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
<g clip-path="url(#clip0_2207_33148)">
<path d="M17.2551 24.5277C17.8293 24.5277 18.298 24.2933 18.8606 23.766L28.1066 15.0355C28.5637 14.6136 28.7043 14.1683 28.7043 13.7816C28.7043 13.3832 28.5637 12.9379 28.1066 12.516L18.8606 3.86755C18.2395 3.28162 17.8527 3.0238 17.2785 3.0238C16.4582 3.0238 15.884 3.68005 15.884 4.46521V9.01208H8.27857C6.25123 9.01208 5.38404 9.85583 5.38404 11.848V14.2972H2.91138C0.884034 14.2972 0.0168457 15.1293 0.0168457 17.1215V21.6215C0.0168457 23.6136 0.884034 24.4574 2.91138 24.4574H9.97779C12.0051 24.4574 12.8723 23.6136 12.8723 21.6215V18.9496H15.884V23.1566C15.884 23.9418 16.4582 24.5277 17.2551 24.5277ZM11.5363 21.7269L6.80201 19.7465C5.65357 19.266 5.23169 18.7621 5.1731 17.8363C5.16138 17.6019 5.40747 17.555 5.51294 17.7777C5.86451 18.5511 6.66138 18.9496 7.83326 18.9496H11.6887V21.6566C11.6887 21.7269 11.6066 21.7621 11.5363 21.7269Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33148">
<rect width="28.6875" height="21.5273" fill="currentColor" transform="translate(0.0168457 3.0238)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowshapeZigzagForwardFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
