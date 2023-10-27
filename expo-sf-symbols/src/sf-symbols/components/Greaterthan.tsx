
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
<g clip-path="url(#clip0_2207_37236)">
<path d="M7.00879 21.6499C7.33692 21.6499 7.55958 21.5445 7.79395 21.4273L20.9658 15.5093C21.6455 15.1929 22.1611 14.6772 22.1611 13.9272C22.1611 13.189 21.6455 12.6499 20.9658 12.3452L7.79395 6.28662C7.57129 6.16943 7.36036 6.0874 7.05567 6.0874C6.43457 6.0874 6.0127 6.50928 6.0127 7.13037C6.0127 7.66943 6.29395 7.97412 6.78613 8.20849L19.3955 13.7749V13.9038L6.78613 19.5171C6.29395 19.7515 6.0127 20.0562 6.0127 20.5952C6.0127 21.2398 6.42285 21.6499 7.00879 21.6499Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37236">
<rect width="16.1484" height="15.5742" fill="currentColor" transform="translate(6.0127 6.07568)"/>
</clipPath>
</defs>
</svg>

`;

export const Greaterthan = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
