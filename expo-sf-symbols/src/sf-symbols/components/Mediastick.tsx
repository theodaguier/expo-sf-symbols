
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
<g clip-path="url(#clip0_2207_35687)">
<path d="M4.01733 20.1304H20.8337C23.822 20.1304 24.7712 18.689 24.7712 14.1187C24.7712 9.53662 23.8337 8.09521 20.8337 8.09521H4.01733C1.01733 8.09521 0.079834 9.53662 0.079834 14.1187C0.079834 18.689 1.01733 20.1304 4.01733 20.1304ZM4.01733 13.2749C3.33764 13.2749 2.79858 12.7358 2.79858 12.0562C2.79858 11.3882 3.33764 10.8608 4.01733 10.8608C4.6853 10.8608 5.21264 11.3882 5.21264 12.0562C5.21264 12.7358 4.6853 13.2749 4.01733 13.2749Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M26.0955 17.4233H28.9432C30.2908 17.4233 31.1815 16.5562 31.1815 15.3022V12.9116C31.1815 11.6694 30.2908 10.7905 28.9432 10.7905H26.0955C26.283 11.7163 26.3651 12.8179 26.3651 14.1187C26.3651 15.396 26.2713 16.4976 26.0955 17.4233Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35687">
<rect width="31.1016" height="12.082" fill="currentColor" transform="translate(0.079834 8.09521)"/>
</clipPath>
</defs>
</svg>

`;

export const Mediastick = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
