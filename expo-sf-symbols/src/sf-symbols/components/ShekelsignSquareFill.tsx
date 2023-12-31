
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
<g clip-path="url(#clip0_2207_37861)">
<path d="M6.75318 24.7237H20.968C23.429 24.7237 24.6477 23.5049 24.6477 21.0908V6.78223C24.6477 4.36817 23.429 3.14941 20.968 3.14941H6.75318C4.30396 3.14941 3.07349 4.35645 3.07349 6.78223V21.0908C3.07349 23.5166 4.30396 24.7237 6.75318 24.7237Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.22583 19.2158V9.36036C9.22583 8.78614 9.61255 8.41114 10.1868 8.41114H12.636C14.6516 8.41114 15.6243 9.36036 15.6243 11.54V15.958C15.6243 16.4151 15.343 16.708 14.9094 16.708C14.4876 16.708 14.1829 16.4151 14.1829 15.958V11.751C14.1829 10.3564 13.6087 9.96973 12.2844 9.96973H10.679V19.2041C10.679 19.6494 10.3977 19.9658 9.97583 19.9658C9.55396 19.9658 9.22583 19.6612 9.22583 19.2158ZM11.7337 18.8877V12.2549C11.7337 11.7979 12.0383 11.5166 12.4719 11.5166C12.8821 11.5166 13.1751 11.7979 13.1751 12.2549V18.2666H14.8743C16.2337 18.2666 16.6673 17.9971 16.6673 16.4502V9.03223C16.6673 8.5752 16.9602 8.28223 17.3938 8.28223C17.8274 8.28223 18.1087 8.58692 18.1087 9.03223V16.4502C18.1087 18.876 17.2297 19.8252 15.1673 19.8252H12.6594C12.0852 19.8252 11.7337 19.4619 11.7337 18.8877Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37861">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.07349 3.12598)"/>
</clipPath>
</defs>
</svg>

`;

export const ShekelsignSquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
