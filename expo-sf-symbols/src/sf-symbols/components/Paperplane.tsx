
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
<g clip-path="url(#clip0_2207_32964)">
<path d="M16.7034 27.0137C17.5471 27.0137 18.1448 26.2871 18.5784 25.1621L26.2542 5.11132C26.4651 4.57226 26.5823 4.09179 26.5823 3.69335C26.5823 2.93163 26.1135 2.46289 25.3518 2.46289C24.9534 2.46289 24.4729 2.58007 23.9338 2.79101L3.77758 10.5137C2.79321 10.8887 2.03149 11.4863 2.03149 12.3418C2.03149 13.4199 2.85181 13.7832 3.9768 14.123L12.4377 16.6074L14.8987 24.9629C15.2503 26.1465 15.6135 27.0137 16.7034 27.0137ZM12.9651 14.8262L4.87915 12.3535C4.69165 12.2949 4.63305 12.248 4.63305 12.166C4.63305 12.084 4.67993 12.0254 4.85571 11.9551L20.6995 5.95507C21.637 5.60351 22.5393 5.13476 23.4065 4.73632C22.6331 5.36913 21.6721 6.11913 21.0276 6.76367L12.9651 14.8262ZM16.8909 24.4355C16.7971 24.4355 16.7503 24.3535 16.6917 24.166L14.219 16.0801L22.2815 8.01757C22.9143 7.38476 23.6995 6.40039 24.3206 5.60351C23.9221 6.49413 23.4417 7.39648 23.0901 8.3457L17.0901 24.1894C17.0198 24.3652 16.9729 24.4355 16.8909 24.4355Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_32964">
<rect width="24.5508" height="25.9102" fill="currentColor" transform="translate(2.03149 1.10352)"/>
</clipPath>
</defs>
</svg>

`;

export const Paperplane = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
