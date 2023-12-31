
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
<g clip-path="url(#clip0_2207_35025)">
<path d="M14.0434 26.0195C20.5825 26.0195 25.9965 20.5938 25.9965 14.0664C25.9965 7.52734 20.5708 2.11328 14.0317 2.11328C7.50439 2.11328 2.09033 7.52734 2.09033 14.0664C2.09033 20.5938 7.51611 26.0195 14.0434 26.0195Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M14.0434 10.0586C13.1997 10.0586 12.4965 9.35547 12.4965 8.51172C12.4965 7.66797 13.1997 6.96484 14.0434 6.96484C14.8872 6.96484 15.5903 7.66797 15.5903 8.51172C15.5903 9.35547 14.8872 10.0586 14.0434 10.0586ZM8.74658 16.4336C7.49267 16.4336 6.47314 15.4024 6.47314 14.1485C6.47314 12.8945 7.49267 11.8633 8.74658 11.8633C10.0239 11.8633 11.0317 12.8945 11.0317 14.1485C11.0317 15.4024 10.0239 16.4336 8.74658 16.4336ZM19.3403 16.4336C18.063 16.4336 17.0551 15.4024 17.0551 14.1485C17.0551 12.8945 18.063 11.8633 19.3403 11.8633C20.5942 11.8633 21.6137 12.8945 21.6137 14.1485C21.6137 15.4024 20.5942 16.4336 19.3403 16.4336Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_35025">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.09033 2.11328)"/>
</clipPath>
</defs>
</svg>

`;

export const PoweroutletTypeEFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
