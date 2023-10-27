
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
<g clip-path="url(#clip0_2207_37380)">
<path d="M6.77002 24.6119H20.9848C23.4458 24.6119 24.6645 23.3931 24.6645 20.979V6.67041C24.6645 4.25635 23.4458 3.0376 20.9848 3.0376H6.77002C4.3208 3.0376 3.09033 4.24463 3.09033 6.67041V20.979C3.09033 23.4048 4.3208 24.6119 6.77002 24.6119Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.0864 10.8071C10.6255 10.8071 10.977 11.1704 10.977 11.7563V13.8306L10.8013 15.7173L12.5474 13.854L16.9653 9.42432C17.1528 9.24854 17.3755 9.14307 17.6684 9.14307C18.1958 9.14307 18.5591 9.49463 18.5591 10.0454C18.5591 10.2798 18.4419 10.5259 18.2661 10.7017L13.8247 15.1197L11.938 16.8892L13.7309 16.7017H15.9106C16.4965 16.7017 16.8715 17.0533 16.8715 17.5806C16.8715 18.1197 16.5083 18.4712 15.9341 18.4712H10.2153C9.59424 18.4712 9.20752 18.19 9.20752 17.4751V11.7798C9.20752 11.2056 9.55908 10.8071 10.0864 10.8071Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37380">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.09033 3.01416)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowDownLeftSquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
