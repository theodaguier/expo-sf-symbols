
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
<g clip-path="url(#clip0_2207_34218)">
<path d="M3.76367 24.5939H24.0371C26.4981 24.5939 27.7168 23.3869 27.7168 20.9728V6.65246C27.7168 4.2384 26.4981 3.01965 24.0371 3.01965H3.76367C1.31445 3.01965 0.0839844 4.2384 0.0839844 6.65246V20.9728C0.0839844 23.3869 1.31445 24.5939 3.76367 24.5939Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.2988 20.0236C10.7598 20.0236 10.4082 19.6486 10.4082 19.0744V17.1524L10.584 15.2774L8.8379 17.1407L5.2168 20.7619C5.04102 20.9377 4.81837 21.043 4.5254 21.043C3.98633 21.043 3.63477 20.6915 3.63477 20.1407C3.63477 19.9063 3.75196 19.6602 3.92774 19.4844L7.56055 15.8634L9.44727 14.1055L7.6543 14.293H5.63868C5.05274 14.293 4.67774 13.9415 4.67774 13.4024C4.67774 12.8751 5.04102 12.5236 5.61524 12.5236H11.1699C11.791 12.5236 12.1895 12.8048 12.1895 13.5196V19.0508C12.1895 19.6135 11.8262 20.0236 11.2988 20.0236Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_34218">
<rect width="27.6328" height="21.5742" fill="currentColor" transform="translate(0.0839844 3.01965)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowUpRightBottomleftRectangleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
