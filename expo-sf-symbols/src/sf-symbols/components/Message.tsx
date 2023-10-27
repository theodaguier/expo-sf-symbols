
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
<g clip-path="url(#clip0_2207_34573)">
<path d="M6.10059 26.6475C7.68262 26.6475 10.917 25.0537 13.2958 23.3545C21.4638 23.5772 27.5927 18.8897 27.5927 12.749C27.5927 6.85449 21.6865 2.09668 14.3037 2.09668C6.9209 2.09668 1.01465 6.85449 1.01465 12.749C1.01465 16.5928 3.47559 20.0029 7.17871 21.7139C6.65137 22.7334 5.66699 24.1162 5.13965 24.8076C4.51856 25.6279 4.89356 26.6475 6.10059 26.6475ZM7.33106 24.7022C7.23731 24.7373 7.20215 24.667 7.26074 24.585C7.91699 23.7764 8.85449 22.5576 9.25293 21.8076C9.58106 21.1983 9.49903 20.6592 8.74903 20.3076C5.06934 18.5967 2.95996 15.8662 2.95996 12.749C2.95996 7.94434 7.98731 4.03027 14.3037 4.03027C20.6318 4.03027 25.6591 7.94434 25.6591 12.749C25.6591 17.542 20.6318 21.4561 14.3037 21.4561C14.0693 21.4561 13.706 21.4444 13.2373 21.4326C12.7451 21.4326 12.3701 21.585 11.9248 21.9365C10.4834 22.9795 8.39746 24.2686 7.33106 24.7022Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34573">
<rect width="26.5781" height="24.5508" fill="currentColor" transform="translate(1.01465 2.09668)"/>
</clipPath>
</defs>
</svg>

`;

export const Message = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
