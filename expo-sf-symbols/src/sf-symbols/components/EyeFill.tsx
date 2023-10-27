
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="32" height="29" viewBox="0 0 32 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_36400)">
<path d="M15.9809 23.9966C25.3676 23.9966 31.8598 16.4028 31.8598 14.0356C31.8598 11.6567 25.3559 4.07471 15.9809 4.07471C6.71142 4.07471 0.090332 11.6567 0.090332 14.0356C0.090332 16.4028 6.71142 23.9966 15.9809 23.9966ZM15.9809 20.563C12.3247 20.563 9.41845 17.5982 9.41845 14.0356C9.41845 10.3794 12.3247 7.5083 15.9809 7.5083C19.602 7.5083 22.5317 10.3794 22.5317 14.0356C22.5317 17.5982 19.602 20.563 15.9809 20.563ZM15.9809 16.3911C17.2817 16.3911 18.3598 15.3247 18.3598 14.0356C18.3598 12.7349 17.2817 11.6685 15.9809 11.6685C14.6684 11.6685 13.5903 12.7349 13.5903 14.0356C13.5903 15.3247 14.6684 16.3911 15.9809 16.3911Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36400">
<rect width="31.7695" height="19.9336" fill="currentColor" transform="translate(0.090332 4.06299)"/>
</clipPath>
</defs>
</svg>

`;

export const EyeFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
