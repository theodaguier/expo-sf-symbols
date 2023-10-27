
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
<g clip-path="url(#clip0_2207_35337)">
<path d="M6.75098 24.6929H20.9658C23.4268 24.6929 24.6455 23.4741 24.6455 21.06V6.75146C24.6455 4.3374 23.4268 3.11865 20.9658 3.11865H6.75098C4.30176 3.11865 3.07129 4.32568 3.07129 6.75146V21.06C3.07129 23.4858 4.30176 24.6929 6.75098 24.6929ZM6.77441 22.8061C5.60254 22.8061 4.95801 22.185 4.95801 20.9663V6.84521C4.95801 5.62646 5.60254 5.00537 6.77441 5.00537H20.9424C22.1025 5.00537 22.7588 5.62646 22.7588 6.84521V20.9663C22.7588 22.185 22.1025 22.8061 20.9424 22.8061H6.77441Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.1924 9.50538C11.1924 10.689 11.9775 11.6968 13.0557 12.0366V17.9311C13.0557 19.6421 13.3369 21.1655 13.8643 21.1655C14.4033 21.1655 14.6611 19.6655 14.6611 17.9311V12.0366C15.7627 11.7085 16.5361 10.7007 16.5361 9.50538C16.5361 8.02881 15.3408 6.8335 13.8643 6.8335C12.3994 6.8335 11.1924 8.02881 11.1924 9.50538ZM12.3291 8.81397C12.3174 8.35694 12.7275 7.9585 13.1729 7.9585C13.6416 7.9585 14.0401 8.35694 14.0283 8.81397C14.0283 9.271 13.6416 9.66944 13.1729 9.66944C12.7275 9.66944 12.3291 9.271 12.3291 8.81397Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35337">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.07129 3.09521)"/>
</clipPath>
</defs>
</svg>

`;

export const MappinSquare = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
