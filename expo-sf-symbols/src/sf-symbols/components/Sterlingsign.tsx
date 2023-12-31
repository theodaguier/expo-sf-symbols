
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
<g clip-path="url(#clip0_2207_37742)">
<path d="M7.073 24.4052H21.0535C21.6394 24.4052 22.073 24.0185 22.073 23.4326C22.073 22.8349 21.6394 22.4716 21.0535 22.4716H9.78003V22.413C11.4558 21.8505 12.6746 19.7998 12.6746 17.2568C12.6746 14.3388 11.4324 12.6631 11.4324 9.69824C11.4324 6.97949 13.3191 5.12793 16.5886 5.12793C18.5808 5.12793 19.4832 5.66699 20.1277 5.66699C20.7254 5.66699 21.0066 5.31543 21.0066 4.7998C21.0066 4.30762 20.7136 3.96777 20.0574 3.69824C19.0261 3.28809 17.8191 3.13574 16.4129 3.13574C11.9128 3.13574 9.1355 5.76074 9.1355 9.8623C9.1355 12.499 10.4714 15.1591 10.4714 17.3505C10.4714 19.999 8.86597 21.7334 6.99097 22.2607C6.34644 22.4599 6.06519 22.7998 6.06519 23.3974C6.06519 23.9834 6.48706 24.4052 7.073 24.4052ZM6.21753 13.7763C6.21753 14.2568 6.60425 14.6318 7.08472 14.6318H18.5457C19.0261 14.6318 19.4011 14.2568 19.4011 13.7763C19.4011 13.2959 19.0261 12.9209 18.5457 12.9209H7.08472C6.60425 12.9209 6.21753 13.2959 6.21753 13.7763Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37742">
<rect width="16.0078" height="21.3164" fill="currentColor" transform="translate(6.06519 3.13574)"/>
</clipPath>
</defs>
</svg>

`;

export const Sterlingsign = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
