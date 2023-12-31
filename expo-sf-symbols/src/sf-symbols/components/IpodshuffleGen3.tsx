
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
<g clip-path="url(#clip0_2207_35422)">
<path d="M11.2422 26.9043H17.3594C19.3164 26.9043 20.5469 25.7207 20.5469 23.8574V5.13086C20.5469 3.26757 19.3164 2.08398 17.3594 2.08398H11.2422C9.28516 2.08398 8.05469 3.26757 8.05469 5.13086V23.8574C8.05469 25.7207 9.28516 26.9043 11.2422 26.9043ZM11.4883 25.0176C10.5039 25.0176 9.94141 24.4785 9.94141 23.5528V5.43554C9.94141 4.50976 10.5039 3.9707 11.4883 3.9707H17.125C18.0977 3.9707 18.6602 4.50976 18.6602 5.43554V23.5528C18.6602 24.4785 18.0977 25.0176 17.125 25.0176H11.4883Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35422">
<rect width="12.4922" height="24.832" fill="currentColor" transform="translate(8.05469 2.08398)"/>
</clipPath>
</defs>
</svg>

`;

export const IpodshuffleGen3 = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
