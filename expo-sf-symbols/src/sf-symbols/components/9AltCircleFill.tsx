
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
<g clip-path="url(#clip0_2207_37976)">
<path d="M14.0351 25.9133C20.5742 25.9133 25.9882 20.4876 25.9882 13.9602C25.9882 7.42114 20.5625 2.00708 14.0234 2.00708C7.49609 2.00708 2.08203 7.42114 2.08203 13.9602C2.08203 20.4876 7.50781 25.9133 14.0351 25.9133Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.83984 12.0501C9.83984 9.78833 11.5625 8.2063 14.0703 8.2063C16.5781 8.2063 18.3008 9.80005 18.3008 12.1438C18.3008 13.4563 17.7734 14.6868 16.6601 16.1751C16.0039 17.0305 15.1015 18.2024 14.4687 18.9876C14.1289 19.4212 13.9414 19.7024 13.4726 19.7024C12.9804 19.7024 12.664 19.3509 12.664 18.9876C12.664 18.7532 12.7578 18.5305 12.957 18.2962C13.6718 17.4173 14.4687 16.4563 15.1367 15.6009C15.4062 15.2844 15.5937 15.0266 15.6875 14.8509H15.5351C15.125 15.2727 14.2695 15.554 13.4726 15.554C11.375 15.554 9.83984 14.0774 9.83984 12.0501ZM11.5508 11.9797C11.5508 13.2571 12.6406 14.1946 14.082 14.1946C15.5 14.1946 16.5781 13.2688 16.5781 11.9797C16.5781 10.7141 15.4882 9.75317 14.0703 9.75317C12.6406 9.75317 11.5508 10.7024 11.5508 11.9797Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37976">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.08203 2.00708)"/>
</clipPath>
</defs>
</svg>

`;

export const 9AltCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
