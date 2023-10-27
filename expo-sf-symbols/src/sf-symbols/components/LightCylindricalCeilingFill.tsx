
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
<g clip-path="url(#clip0_2207_34985)">
<path d="M14.508 14.0527C19.7932 14.0527 23.8713 15.3535 25.969 17.6152V8.42773C25.969 4.60742 21.4455 2.08789 14.508 2.08789C7.58228 2.08789 3.05884 4.60742 3.05884 8.42773V17.6152C5.1565 15.3535 9.2229 14.0527 14.508 14.0527ZM14.508 26.2754C21.0705 26.2754 25.9221 24.1895 25.9221 20.9668C25.9221 17.7441 21.0705 15.6582 14.508 15.6582C7.95728 15.6582 3.10571 17.7441 3.10571 20.9668C3.10571 24.1895 7.95728 26.2754 14.508 26.2754ZM14.508 20.5918C11.9299 20.5918 9.79712 19.2676 9.64478 17.627C11.051 17.3223 12.7034 17.1465 14.508 17.1465C16.3244 17.1465 17.965 17.3223 19.383 17.627C19.2307 19.2676 17.0861 20.5918 14.508 20.5918Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34985">
<rect width="22.9102" height="24.1992" fill="currentColor" transform="translate(3.05884 2.08789)"/>
</clipPath>
</defs>
</svg>

`;

export const LightCylindricalCeilingFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
