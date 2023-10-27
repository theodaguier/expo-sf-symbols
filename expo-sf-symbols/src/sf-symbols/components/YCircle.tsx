
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
<g clip-path="url(#clip0_2207_37719)">
<path d="M14.0498 26.0585C20.5889 26.0585 26.0029 20.6328 26.0029 14.1054C26.0029 7.5664 20.5772 2.15234 14.0381 2.15234C7.51074 2.15234 2.09668 7.5664 2.09668 14.1054C2.09668 20.6328 7.52246 26.0585 14.0498 26.0585ZM14.0498 24.0664C8.51856 24.0664 4.10059 19.6367 4.10059 14.1054C4.10059 8.57422 8.50684 4.14453 14.0381 4.14453C19.5694 4.14453 24.0108 8.57422 24.0108 14.1054C24.0108 19.6367 19.5811 24.0664 14.0498 24.0664Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M14.0381 19.4726C14.6475 19.4726 14.9873 19.0742 14.9873 18.4179V15.3593L18.2803 9.87501C18.3858 9.71094 18.4326 9.52343 18.4326 9.35938C18.4326 8.8789 18.0811 8.51562 17.5889 8.51562C17.1787 8.51562 16.9678 8.66797 16.7217 9.10157L14.085 13.6015H14.0147L11.3896 9.10157C11.1436 8.65626 10.9209 8.51562 10.499 8.51562C10.0186 8.51562 9.64355 8.89063 9.64355 9.33594C9.64355 9.51173 9.69043 9.68751 9.7959 9.87501L13.1123 15.3828V18.4179C13.1123 19.0507 13.4405 19.4726 14.0381 19.4726Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37719">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.09668 2.15234)"/>
</clipPath>
</defs>
</svg>

`;

export const YCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
