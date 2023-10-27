
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
<g clip-path="url(#clip0_2207_37718)">
<path d="M6.71326 24.75H20.9281C23.3891 24.75 24.6078 23.5312 24.6078 21.1171V6.80859C24.6078 4.39453 23.3891 3.17578 20.9281 3.17578H6.71326C4.26404 3.17578 3.03357 4.38281 3.03357 6.80859V21.1171C3.03357 23.5429 4.26404 24.75 6.71326 24.75Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.2406 19.4882C9.72498 19.4882 9.33826 19.125 9.33826 18.6445C9.33826 18.3984 9.39685 18.2343 9.56091 18.0117L12.6195 13.7695L9.72498 9.78516C9.53748 9.51563 9.46716 9.35157 9.46716 9.08204C9.46716 8.58985 9.90076 8.17969 10.4164 8.17969C10.8265 8.17969 11.0609 8.33204 11.3422 8.71876L13.9086 12.4453H13.9789L16.4984 8.73047C16.7563 8.33204 17.0024 8.17969 17.3774 8.17969C17.893 8.17969 18.3031 8.55469 18.3031 9.03516C18.3031 9.25782 18.2328 9.45704 18.057 9.67969L15.0102 13.8281L18.0336 17.9648C18.1977 18.1757 18.268 18.3515 18.268 18.5976C18.268 19.125 17.8695 19.4882 17.3188 19.4882C16.932 19.4882 16.7094 19.3476 16.4047 18.9257L13.8031 15.2109H13.7563L11.1429 18.9257C10.8383 19.3476 10.6273 19.4882 10.2406 19.4882Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37718">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.03357 3.15234)"/>
</clipPath>
</defs>
</svg>

`;

export const XSquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
