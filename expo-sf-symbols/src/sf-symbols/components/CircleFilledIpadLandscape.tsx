
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
<g clip-path="url(#clip0_2207_35515)">
<path d="M3.75318 24.6438H24.0266C26.4876 24.6438 27.7063 23.425 27.7063 21.0109V6.70239C27.7063 4.28833 26.4876 3.06958 24.0266 3.06958H3.75318C1.30396 3.06958 0.0734863 4.27661 0.0734863 6.70239V21.0109C0.0734863 23.4367 1.30396 24.6438 3.75318 24.6438ZM3.77661 22.757C2.60474 22.757 1.96021 22.1359 1.96021 20.9172V6.79614C1.96021 5.57739 2.60474 4.9563 3.77661 4.9563H24.0032C25.1633 4.9563 25.8196 5.57739 25.8196 6.79614V20.9172C25.8196 22.1359 25.1633 22.757 24.0032 22.757H3.77661Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.8899 19.6633C17.0891 19.6633 19.7141 17.0617 19.7141 13.8391C19.7141 10.6399 17.0891 8.03833 13.8899 8.03833C10.6907 8.03833 8.07739 10.6399 8.07739 13.8391C8.07739 17.0617 10.6907 19.6633 13.8899 19.6633Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35515">
<rect width="27.6328" height="21.5977" fill="currentColor" transform="translate(0.0734863 3.04614)"/>
</clipPath>
</defs>
</svg>

`;

export const CircleFilledIpadLandscape = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
