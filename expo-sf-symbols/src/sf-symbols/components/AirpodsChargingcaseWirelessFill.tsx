
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
<g clip-path="url(#clip0_2207_35609)">
<path d="M13.6177 15.3911C13.0317 15.4028 12.5396 14.8989 12.5396 14.3247C12.5396 13.7388 13.0317 13.2466 13.6177 13.2466C14.2036 13.2466 14.6958 13.7388 14.6958 14.3247C14.6958 14.8755 14.2036 15.3794 13.6177 15.3911ZM9.99658 25.2817H17.2387C21.2231 25.2817 23.145 23.3599 23.145 19.3755V9.81299H18.188C17.977 10.2817 17.4848 10.6099 16.8637 10.6099H10.3716C9.77392 10.6099 9.27002 10.2817 9.05908 9.81299H4.09033V19.3755C4.09033 23.3599 6.01221 25.2817 9.99658 25.2817ZM4.09033 8.62939H9.05908C9.27002 8.14892 9.77392 7.8208 10.3716 7.8208H16.8637C17.4848 7.8208 17.977 8.14892 18.188 8.62939H23.145V7.91455C23.145 3.93018 21.2231 2.0083 17.2387 2.0083H9.99658C6.01221 2.0083 4.09033 3.93018 4.09033 7.91455V8.62939Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35609">
<rect width="19.0547" height="23.2852" fill="currentColor" transform="translate(4.09033 2.0083)"/>
</clipPath>
</defs>
</svg>

`;

export const AirpodsChargingcaseWirelessFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
