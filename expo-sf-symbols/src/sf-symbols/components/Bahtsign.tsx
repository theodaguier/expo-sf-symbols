
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
<g clip-path="url(#clip0_2207_37872)">
<path d="M8.51196 24.675H14.1487C18.5315 24.675 21.1682 22.5305 21.1682 18.9446C21.1682 16.1204 19.2346 14.1633 16.3752 13.8118V13.718C18.508 13.3313 20.1018 11.3391 20.1018 9.10083C20.1018 6.0188 17.6994 3.96802 14.1252 3.96802H8.51196C7.63306 3.96802 7.05884 4.54223 7.05884 5.42114V23.2219C7.05884 24.1008 7.63306 24.675 8.51196 24.675ZM9.29712 5.93677H13.6096C16.2698 5.93677 17.8635 7.15552 17.8635 9.3352C17.8635 11.7141 16.0706 13.0149 12.9651 13.0149H9.29712V5.93677ZM9.29712 22.7063V14.9954H13.5276C16.9963 14.9954 18.8947 16.3196 18.8947 18.8508C18.8947 21.3704 17.0549 22.7063 13.7971 22.7063H9.29712ZM12.3206 26.5618C12.3206 26.9836 12.6721 27.3352 13.094 27.3352C13.5159 27.3352 13.8557 26.9836 13.8557 26.5618V1.88208C13.8557 1.46021 13.5159 1.10864 13.094 1.10864C12.6721 1.10864 12.3206 1.46021 12.3206 1.88208V26.5618Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37872">
<rect width="14.1094" height="26.3086" fill="currentColor" transform="translate(7.05884 1.02661)"/>
</clipPath>
</defs>
</svg>

`;

export const Bahtsign = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
