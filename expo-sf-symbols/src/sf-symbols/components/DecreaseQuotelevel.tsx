
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
<g clip-path="url(#clip0_2207_37084)">
<path d="M8.92725 24.9087C9.43115 24.9087 9.81787 24.4985 9.81787 24.0063V3.94385C9.81787 3.45166 9.43115 3.05322 8.92725 3.05322C8.43506 3.05322 8.04834 3.45166 8.04834 3.94385V24.0063C8.04834 24.4985 8.43506 24.9087 8.92725 24.9087Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M18.5952 17.5727C19.4506 18.147 20.4233 17.8188 20.4233 16.7759V11.2212C20.4233 10.1431 19.4975 9.80322 18.5952 10.4126L14.7163 13.0493C14.0483 13.5063 14.0131 14.5141 14.7163 14.9829L18.5952 17.5727Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37084">
<rect width="12.375" height="21.9258" fill="currentColor" transform="translate(8.04834 3.05322)"/>
</clipPath>
</defs>
</svg>

`;

export const DecreaseQuotelevel = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
