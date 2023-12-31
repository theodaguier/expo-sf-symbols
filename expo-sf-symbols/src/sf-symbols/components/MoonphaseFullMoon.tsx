
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
<g clip-path="url(#clip0_2207_33653)">
<path d="M13.9553 24.0137C8.42407 24.0137 4.0061 19.584 4.0061 14.0527C4.0061 8.52149 8.41235 4.0918 13.9436 4.0918C19.4749 4.0918 23.9163 8.52149 23.9163 14.0527C23.9163 19.584 19.4866 24.0137 13.9553 24.0137Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.9553 26.0058C20.4944 26.0058 25.9084 20.5801 25.9084 14.0527C25.9084 7.51367 20.4827 2.09961 13.9436 2.09961C7.41626 2.09961 2.0022 7.51367 2.0022 14.0527C2.0022 20.5801 7.42798 26.0058 13.9553 26.0058ZM13.9553 24.0137C8.42408 24.0137 4.00611 19.584 4.00611 14.0527C4.00611 8.52149 8.41236 4.0918 13.9436 4.0918C19.4749 4.0918 23.9163 8.52149 23.9163 14.0527C23.9163 19.584 19.4866 24.0137 13.9553 24.0137Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33653">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.0022 2.09961)"/>
</clipPath>
</defs>
</svg>

`;

export const MoonphaseFullMoon = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
