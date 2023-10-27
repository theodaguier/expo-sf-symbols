
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="28" height="29" viewBox="0 0 28 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_34647)">
<path d="M13.8989 1.03357C13.3716 1.03357 12.8794 1.25623 12.4106 2.0531L10.2427 5.67419H6.37549C2.8833 5.67419 1.0083 7.60779 1.0083 11.0414V20.018C1.0083 23.4633 2.8833 25.3852 6.37549 25.3852H21.4692C24.9614 25.3852 26.8364 23.4516 26.8364 20.018V11.0414C26.8364 7.60779 24.9614 5.67419 21.4692 5.67419H17.5552L15.3872 2.0531C14.9185 1.25623 14.4263 1.03357 13.8989 1.03357Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34647">
<rect width="25.8281" height="25.9336" fill="currentColor" transform="translate(1.0083 1.03357)"/>
</clipPath>
</defs>
</svg>

`;

export const BubbleMiddleTopFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
