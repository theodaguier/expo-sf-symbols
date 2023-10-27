
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
<g clip-path="url(#clip0_2207_37862)">
<path d="M7.14685 25.2085C7.82654 25.2085 8.27185 24.7632 8.27185 24.0483V16.6538C8.27185 11.3101 10.5101 8.73194 13.9437 8.73194C17.3774 8.73194 19.6156 11.3101 19.6156 16.6538V24.0483C19.6156 24.7632 20.0609 25.2085 20.7289 25.2085C21.3969 25.2085 21.8539 24.7632 21.8539 24.0483V16.478C21.8539 10.0444 18.6898 6.66943 13.9437 6.66943C9.18591 6.66943 6.03357 10.0444 6.03357 16.478V24.0483C6.03357 24.7632 6.47888 25.2085 7.14685 25.2085ZM13.0531 24.3296C13.0531 24.8218 13.4515 25.2085 13.9437 25.2085C14.4359 25.2085 14.8226 24.8218 14.8226 24.3296V3.97412C14.8226 3.48193 14.4359 3.09521 13.9437 3.09521C13.4515 3.09521 13.0531 3.48193 13.0531 3.97412V24.3296Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37862">
<rect width="15.8203" height="22.3242" fill="currentColor" transform="translate(6.03357 3.09521)"/>
</clipPath>
</defs>
</svg>

`;

export const Manatsign = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
