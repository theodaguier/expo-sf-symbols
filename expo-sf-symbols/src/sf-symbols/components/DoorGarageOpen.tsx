
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
<g clip-path="url(#clip0_2207_35094)">
<path d="M0.987915 26.9246C1.51525 26.9246 1.93713 26.5027 1.93713 25.9871V4.56518C1.93713 4.19018 2.18323 3.94409 2.5348 3.94409H26.2184C26.5699 3.94409 26.816 4.19018 26.816 4.56518V25.9871C26.816 26.5027 27.2379 26.9246 27.7535 26.9246C28.2809 26.9246 28.7027 26.5027 28.7027 25.9871V4.44799C28.7027 3.01831 27.7184 2.05737 26.2418 2.05737H2.49963C1.03479 2.05737 0.050415 3.01831 0.050415 4.44799V25.9871C0.050415 26.5027 0.47229 26.9246 0.987915 26.9246Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M3.70667 10.2839H25.0465C25.2692 10.2839 25.4449 10.1082 25.4449 9.89722V5.70191C25.4449 5.47926 25.2692 5.30347 25.0465 5.30347H3.70667C3.48401 5.30347 3.30823 5.47926 3.30823 5.70191V9.89722C3.30823 10.1082 3.48401 10.2839 3.70667 10.2839ZM12.0856 8.36207C11.7457 8.36207 11.5231 8.12769 11.5231 7.79957C11.5231 7.45972 11.7457 7.22535 12.0856 7.22535H16.6676C17.0074 7.22535 17.2301 7.45972 17.2301 7.79957C17.2301 8.12769 17.0074 8.36207 16.6676 8.36207H12.0856Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35094">
<rect width="28.6523" height="24.8789" fill="currentColor" transform="translate(0.050415 2.05737)"/>
</clipPath>
</defs>
</svg>

`;

export const DoorGarageOpen = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
