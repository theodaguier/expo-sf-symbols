
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
<g clip-path="url(#clip0_2207_37866)">
<path d="M6.72168 24.6929H20.9365C23.3975 24.6929 24.6162 23.4741 24.6162 21.06V6.75146C24.6162 4.3374 23.3975 3.11865 20.9365 3.11865H6.72168C4.27246 3.11865 3.04199 4.32568 3.04199 6.75146V21.06C3.04199 23.4858 4.27246 24.6929 6.72168 24.6929Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.3193 19.478C9.85058 19.478 9.51074 19.1733 9.51074 18.6694V14.7202C9.51074 11.5444 10.9522 9.73975 13.167 9.4585V8.2046C13.167 7.78272 13.4482 7.54834 13.835 7.54834C14.1748 7.54834 14.4912 7.78272 14.4912 8.2046V9.44678C16.7061 9.72803 18.1709 11.5327 18.1709 14.7202V18.6694C18.1709 19.1733 17.8545 19.478 17.374 19.478C16.917 19.478 16.6006 19.1733 16.6006 18.6694V14.8257C16.6006 12.5405 15.792 11.2515 14.4912 10.9585V18.81C14.4912 19.2085 14.1748 19.478 13.835 19.478C13.4482 19.478 13.167 19.2085 13.167 18.81V10.9702C11.8897 11.2983 11.1045 12.5757 11.1045 14.8257V18.6694C11.1045 19.1733 10.7881 19.478 10.3193 19.478Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37866">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.04199 3.09521)"/>
</clipPath>
</defs>
</svg>

`;

export const ManatsignSquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
