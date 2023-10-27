
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
<g clip-path="url(#clip0_2207_35527)">
<path d="M14.0141 26.0546C20.5532 26.0546 25.9672 20.6289 25.9672 14.1015C25.9672 7.5625 20.5415 2.14844 14.0024 2.14844C7.47509 2.14844 2.06104 7.5625 2.06104 14.1015C2.06104 20.6289 7.48682 26.0546 14.0141 26.0546ZM14.0141 24.0625C8.48292 24.0625 4.06495 19.6328 4.06495 14.1015C4.06495 8.57032 8.47119 4.14063 14.0024 4.14063C19.5337 4.14063 23.9751 8.57032 23.9751 14.1015C23.9751 19.6328 19.5454 24.0625 14.0141 24.0625Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M14.0024 16.5039C15.0571 16.5039 16.1235 18.2617 18.1977 18.2617C20.2016 18.2617 21.7133 16.4336 21.7133 14.0312C21.7133 10.1172 18.268 9.67188 14.0024 9.67188C9.73681 9.67188 6.2915 10.1172 6.2915 14.0312C6.2915 16.4336 7.80322 18.2617 9.80712 18.2617C11.8813 18.2617 12.9594 16.5039 14.0024 16.5039Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35527">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.06104 2.14844)"/>
</clipPath>
</defs>
</svg>

`;

export const VisionproCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
