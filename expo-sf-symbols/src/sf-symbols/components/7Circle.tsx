
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="29" height="28" viewBox="0 0 29 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_37963)">
<path d="M14.0119 25.9133C20.551 25.9133 25.965 20.4876 25.965 13.9602C25.965 7.42114 20.5393 2.00708 14.0002 2.00708C7.4729 2.00708 2.05884 7.42114 2.05884 13.9602C2.05884 20.4876 7.48462 25.9133 14.0119 25.9133ZM14.0119 23.9212C8.48072 23.9212 4.06275 19.4915 4.06275 13.9602C4.06275 8.42896 8.469 3.99927 14.0002 3.99927C19.5315 3.99927 23.9729 8.42896 23.9729 13.9602C23.9729 19.4915 19.5432 23.9212 14.0119 23.9212Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M12.4299 19.5266C12.8283 19.5266 13.0979 19.3391 13.344 18.8821L17.715 10.6907C17.9377 10.2688 17.9963 10.0227 17.9963 9.77661C17.9963 9.13208 17.4807 8.65161 16.719 8.65161H10.9885C10.5784 8.65161 10.2971 8.94458 10.2971 9.36646C10.2971 9.78833 10.5901 10.093 10.9885 10.093H15.969V10.1868L11.6565 18.0852C11.5393 18.2844 11.4924 18.4485 11.4924 18.6829C11.4924 19.1751 11.9026 19.5266 12.4299 19.5266Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37963">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.05884 2.00708)"/>
</clipPath>
</defs>
</svg>

`;

export const 7Circle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
