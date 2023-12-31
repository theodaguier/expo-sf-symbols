
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="28" height="30" viewBox="0 0 28 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_35752)">
<path d="M6.68799 22.6323H21.5005C23.9614 22.6323 25.1802 21.4135 25.1802 18.9995V10.9253C25.1802 8.51123 23.9614 7.29248 21.5005 7.29248H6.68799C4.22705 7.29248 3.0083 8.49951 3.0083 10.9253V18.9995C3.0083 21.4253 4.22705 22.6323 6.68799 22.6323ZM6.71142 20.7456C5.53955 20.7456 4.89502 20.1128 4.89502 18.9057V11.019C4.89502 9.80029 5.53955 9.1792 6.71142 9.1792H21.4771C22.6372 9.1792 23.2935 9.80029 23.2935 11.019V18.9057C23.2935 20.1128 22.6372 20.7456 21.4771 20.7456H6.71142Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.481 5.7339H16.7075C17.3286 5.7339 17.6216 5.22999 17.2817 4.67921L14.7271 0.519055C14.4106 -0.00828841 13.7778 -0.0200075 13.4614 0.519055L10.9185 4.66749C10.5786 5.21827 10.8482 5.7339 11.481 5.7339ZM11.481 24.1909C10.8482 24.1909 10.5786 24.6948 10.9185 25.2456L13.4614 29.4057C13.7778 29.9448 14.4106 29.9331 14.7271 29.4057L17.2817 25.2456C17.6216 24.6948 17.3286 24.1909 16.7075 24.1909H11.481Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35752">
<rect width="22.1719" height="29.6865" fill="currentColor" transform="translate(3.0083 0.119141)"/>
</clipPath>
</defs>
</svg>

`;

export const RectangleArrowtriangle2Outward = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
