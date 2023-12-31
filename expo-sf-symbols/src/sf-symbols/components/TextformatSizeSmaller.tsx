
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
<g clip-path="url(#clip0_2207_37120)">
<path d="M9.97681 20.5996C10.4573 20.5996 10.7737 20.3535 10.9612 19.7793L11.9338 16.9082H16.5159L17.4885 19.7793C17.676 20.377 17.9924 20.5996 18.4846 20.5996C19.0705 20.5996 19.469 20.2364 19.469 19.709C19.469 19.4746 19.4104 19.252 19.3167 19.0059L15.6721 9.32617C15.4026 8.61133 14.9104 8.23633 14.219 8.23633C13.5393 8.23633 13.0471 8.58789 12.7776 9.32617L9.13306 19.0059C9.03931 19.2285 9.00415 19.4629 9.00415 19.709C9.00415 20.2481 9.37915 20.5996 9.97681 20.5996ZM12.4495 15.3848L14.0901 10.498H14.3596L16.0002 15.3848H12.4495Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37120">
<rect width="10.4648" height="12.457" fill="currentColor" transform="translate(9.00415 8.14258)"/>
</clipPath>
</defs>
</svg>

`;

export const TextformatSizeSmaller = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
