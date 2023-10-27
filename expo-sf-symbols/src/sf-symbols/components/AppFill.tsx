
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
<g clip-path="url(#clip0_2207_34134)">
<path d="M23.2405 4.39404C22.0452 3.19873 20.3577 3.01123 18.3538 3.01123H9.22486C7.25611 3.01123 5.56861 3.19873 4.37329 4.39404C3.17798 5.58935 3.0022 7.26514 3.0022 9.23389V18.3628C3.0022 20.3667 3.17798 22.0424 4.37329 23.2378C5.56861 24.4331 7.25611 24.6206 9.24829 24.6206H18.3538C20.3577 24.6206 22.0452 24.4331 23.2405 23.2378C24.4358 22.0424 24.6116 20.3667 24.6116 18.3628V9.25732C24.6116 7.25342 24.4358 5.58935 23.2405 4.39404Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34134">
<rect width="21.6094" height="21.6211" fill="currentColor" transform="translate(3.0022 3.01123)"/>
</clipPath>
</defs>
</svg>

`;

export const AppFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
