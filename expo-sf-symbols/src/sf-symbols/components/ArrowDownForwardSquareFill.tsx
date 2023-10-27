
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
<g clip-path="url(#clip0_2207_37395)">
<path d="M6.7301 24.6119H20.9449C23.4059 24.6119 24.6246 23.3931 24.6246 20.979V6.67041C24.6246 4.25635 23.4059 3.0376 20.9449 3.0376H6.7301C4.28088 3.0376 3.05042 4.24463 3.05042 6.67041V20.979C3.05042 23.4048 4.28088 24.6119 6.7301 24.6119Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M17.6285 10.8071C18.1559 10.8071 18.5192 11.2056 18.5192 11.7798V17.4751C18.5192 18.19 18.1207 18.4712 17.4996 18.4712H11.7809C11.2067 18.4712 10.8434 18.1197 10.8434 17.5806C10.8434 17.0533 11.2184 16.7017 11.8043 16.7017H13.984L15.777 16.8892L13.8902 15.1197L9.44885 10.7017C9.27307 10.5259 9.1676 10.2798 9.1676 10.0454C9.1676 9.49463 9.51916 9.14307 10.0465 9.14307C10.3395 9.14307 10.5739 9.24854 10.7496 9.42432L15.1676 13.854L16.9137 15.7173L16.7379 13.8306V11.7563C16.7379 11.1704 17.0895 10.8071 17.6285 10.8071Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37395">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.05042 3.01416)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowDownForwardSquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
