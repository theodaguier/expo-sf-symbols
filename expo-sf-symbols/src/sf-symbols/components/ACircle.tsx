
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_37623)">
<path d="M13.9553 25.9145C20.4944 25.9145 25.9084 20.4888 25.9084 13.9614C25.9084 7.42236 20.4827 2.0083 13.9436 2.0083C7.41626 2.0083 2.0022 7.42236 2.0022 13.9614C2.0022 20.4888 7.42798 25.9145 13.9553 25.9145ZM13.9553 23.9224C8.42408 23.9224 4.00611 19.4927 4.00611 13.9614C4.00611 8.43018 8.41236 4.00049 13.9436 4.00049C19.4749 4.00049 23.9163 8.43018 23.9163 13.9614C23.9163 19.4927 19.4866 23.9224 13.9553 23.9224Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.0881 19.481C10.51 19.481 10.8147 19.2817 10.9905 18.731L11.8459 16.2349H16.0413L16.8967 18.731C17.0725 19.27 17.3655 19.481 17.7991 19.481C18.3147 19.481 18.6663 19.1411 18.6663 18.6724C18.6663 18.4849 18.6194 18.3208 18.5374 18.063L15.2444 9.21533C15.0217 8.60596 14.5764 8.28955 13.9319 8.28955C13.2991 8.28955 12.8655 8.60596 12.6311 9.21533L9.34986 18.063C9.25611 18.3208 9.22095 18.4849 9.22095 18.6606C9.22095 19.1528 9.56079 19.481 10.0881 19.481ZM12.3147 14.8286L13.8733 10.2935H14.0022L15.5608 14.8286H12.3147Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37623">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.0022 2.0083)"/>
</clipPath>
</defs>
</svg>

`;

export const ACircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
