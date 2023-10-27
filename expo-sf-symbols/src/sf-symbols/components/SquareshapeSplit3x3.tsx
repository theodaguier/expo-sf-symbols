
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
<g clip-path="url(#clip0_2207_36961)">
<path d="M11.5396 23.7359V4.15381H9.65283V23.7359H11.5396ZM18.102 23.7359V4.15381H16.2153V23.7359H18.102ZM4.08643 11.6069H23.6684V9.72022H4.08643V11.6069ZM4.08643 18.1695H23.6684V16.2827H4.08643V18.1695ZM3.09033 23.7827C3.09033 24.3452 3.46533 24.7085 4.02783 24.7085H23.7387C24.3012 24.7085 24.6645 24.3452 24.6645 23.7827V4.07178C24.6645 3.50928 24.3012 3.13428 23.7387 3.13428H4.02783C3.46533 3.13428 3.09033 3.50928 3.09033 4.07178V23.7827ZM4.97705 22.482V5.36084C4.97705 5.11475 5.0708 5.021 5.31689 5.021H22.438C22.6958 5.021 22.7778 5.11475 22.7778 5.36084V22.482C22.7778 22.7398 22.6958 22.8218 22.438 22.8218H5.31689C5.0708 22.8218 4.97705 22.7398 4.97705 22.482Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36961">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.09033 3.13428)"/>
</clipPath>
</defs>
</svg>

`;

export const SquareshapeSplit3x3 = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
