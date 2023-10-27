
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
<g clip-path="url(#clip0_2207_35621)">
<path d="M9.39746 24.6802H18.9365C23.8936 24.6802 26.2373 22.3247 26.2373 17.3794V12.0122H20.3428C20.1201 12.563 19.5928 12.9028 18.9365 12.9028H9.39746C8.75293 12.9028 8.21387 12.563 8.00293 12.0122H2.09668V17.3794C2.09668 22.3247 4.44043 24.6802 9.39746 24.6802ZM14.167 17.6021C13.5576 17.6138 13.042 17.0981 13.042 16.5005C13.042 15.8794 13.5576 15.3755 14.167 15.3755C14.7764 15.3755 15.292 15.8794 15.292 16.5005C15.292 17.063 14.7764 17.5903 14.167 17.6021ZM2.09668 10.8169H7.97949C8.17871 10.2544 8.71777 9.91455 9.3623 9.91455H18.9248C19.5694 9.91455 20.1084 10.2544 20.3194 10.8169H26.1905V10.4067C26.1905 6.08252 23.5655 4.0083 18.8897 4.0083H9.39746C4.7334 4.0083 2.09668 6.08252 2.09668 10.4067V10.8169Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35621">
<rect width="24.1406" height="20.6836" fill="currentColor" transform="translate(2.09668 4.0083)"/>
</clipPath>
</defs>
</svg>

`;

export const AirpodsGen3ChargingcaseWirelessFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
