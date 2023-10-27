
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
<g clip-path="url(#clip0_2207_35423)">
<path d="M6.05664 18.5879C6.05664 20.3223 7.11133 21.4238 8.74023 21.4238H19.7324C21.3613 21.4238 22.416 20.3223 22.416 18.5879V8.91992C22.416 7.18554 21.3261 6.08398 19.7324 6.08398H8.74023C7.11133 6.08398 6.05664 7.18554 6.05664 8.91992V18.5879ZM7.94336 18.3535V9.15429C7.94336 8.41601 8.36523 7.9707 9.05664 7.9707H19.416C20.0957 7.9707 20.5293 8.41601 20.5293 9.15429V18.3535C20.5293 19.0918 20.0957 19.5371 19.416 19.5371H9.05664C8.36523 19.5371 7.94336 19.0918 7.94336 18.3535ZM14.2363 18.2949C16.7441 18.2949 18.7832 16.2559 18.7832 13.748C18.7832 11.2402 16.7441 9.20117 14.2363 9.20117C11.7285 9.20117 9.68945 11.2402 9.68945 13.748C9.68945 16.2559 11.7285 18.2949 14.2363 18.2949ZM14.2363 16.7949C12.5371 16.7949 11.1895 15.4473 11.1895 13.748C11.1895 12.0488 12.5371 10.7012 14.2363 10.7012C15.9356 10.7012 17.2832 12.0488 17.2832 13.748C17.2832 15.4473 15.9356 16.7949 14.2363 16.7949Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35423">
<rect width="16.3594" height="15.3398" fill="currentColor" transform="translate(6.05664 6.08398)"/>
</clipPath>
</defs>
</svg>

`;

export const IpodshuffleGen4 = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
