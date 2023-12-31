
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_35613)">
<path d="M8.10376 24.4473H20.4319C25.2249 24.4473 27.5334 22.1504 27.5334 17.3809V11.0762C27.5334 6.30665 25.2249 4.00977 20.4319 4.00977H8.10376C3.32251 4.00977 1.0022 6.30665 1.0022 11.0762V17.3809C1.0022 22.1504 3.32251 24.4473 8.10376 24.4473ZM8.10376 22.5606C4.50611 22.5606 2.88892 20.9551 2.88892 17.3809V11.0762C2.88892 7.50196 4.50611 5.89649 8.10376 5.89649H20.4319C24.0413 5.89649 25.6467 7.50196 25.6467 11.0762V17.3809C25.6467 20.9551 24.0413 22.5606 20.4319 22.5606H8.10376ZM1.95142 11.873H26.5842V10.6895H1.95142V11.873ZM9.58032 12.6816H18.967C19.7874 12.6816 20.3733 12.1074 20.3733 11.2754C20.3733 10.4551 19.7874 9.88086 18.967 9.88086H9.58032C8.78345 9.88086 8.16236 10.4551 8.16236 11.2754C8.16236 12.1074 8.78345 12.6816 9.58032 12.6816ZM14.2678 16.6778C14.8889 16.666 15.4045 16.1504 15.4045 15.5645C15.4045 14.9434 14.8889 14.4278 14.2678 14.4278C13.6467 14.4278 13.1428 14.9434 13.1428 15.5645C13.1428 16.1739 13.6467 16.6895 14.2678 16.6778Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35613">
<rect width="26.5312" height="20.4492" fill="currentColor" transform="translate(1.0022 4.00977)"/>
</clipPath>
</defs>
</svg>

`;

export const AirpodsproChargingcaseWireless = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
