
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
<g clip-path="url(#clip0_2207_33558)">
<path d="M4.76611 16.1369H23.6567C24.5942 16.1369 25.1098 15.6447 25.1098 14.8244C25.1098 14.4377 24.9341 14.0276 24.6059 13.676L15.6528 3.79712C15.2544 3.36353 14.7973 3.07056 14.2114 3.07056C13.6489 3.07056 13.1684 3.38696 12.7817 3.79712L3.81689 13.676C3.48877 14.0276 3.30127 14.4377 3.31299 14.8244C3.32471 15.6447 3.82861 16.1369 4.76611 16.1369ZM5.00049 24.7033H23.4458C24.6411 24.7033 25.3559 23.965 25.3559 22.7697V20.6486C25.3559 19.4533 24.6411 18.715 23.4458 18.715H5.00049C3.80518 18.715 3.09033 19.4533 3.09033 20.6486V22.7697C3.09033 23.965 3.80518 24.7033 5.00049 24.7033Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33558">
<rect width="22.2656" height="21.6445" fill="currentColor" transform="translate(3.09033 3.05884)"/>
</clipPath>
</defs>
</svg>

`;

export const EjectFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
