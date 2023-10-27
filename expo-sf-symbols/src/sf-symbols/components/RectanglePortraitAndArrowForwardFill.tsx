
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
<g clip-path="url(#clip0_2207_32900)">
<path d="M3.68323 26.2573H16.1285C18.5543 26.2573 19.7613 25.0268 19.7613 22.5776V14.8433H11.1012C10.4801 14.8433 9.95275 14.3159 9.95275 13.6831C9.95275 13.0503 10.4801 12.5112 11.1012 12.5112H19.7613V4.8003C19.7613 2.3628 18.5543 1.13232 16.1285 1.13232H3.68323C1.25745 1.13232 0.050415 2.3628 0.050415 4.8003V22.5776C0.050415 25.0268 1.25745 26.2573 3.68323 26.2573Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M18.8473 13.6831C18.8473 14.187 19.2574 14.6089 19.7496 14.6089H23.1598L24.9176 14.5386L24.0856 15.3354L22.1988 17.105C22.0113 17.269 21.9176 17.5151 21.9176 17.7378C21.9176 18.23 22.2574 18.5933 22.7379 18.5933C22.984 18.5933 23.1715 18.4995 23.359 18.3237L27.1793 14.3628C27.4137 14.1284 27.484 13.9175 27.484 13.6831C27.484 13.437 27.4137 13.2378 27.1793 13.0034L23.359 9.04249C23.1715 8.8667 22.984 8.76123 22.7379 8.76123C22.2574 8.76123 21.9176 9.1128 21.9176 9.60499C21.9176 9.83936 22.0113 10.0855 22.1988 10.2495L24.0856 12.0308L24.9176 12.8276L23.1598 12.7456H19.7496C19.2574 12.7456 18.8473 13.1792 18.8473 13.6831Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_32900">
<rect width="27.4336" height="25.1367" fill="currentColor" transform="translate(0.050415 1.12061)"/>
</clipPath>
</defs>
</svg>

`;

export const RectanglePortraitAndArrowForwardFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
