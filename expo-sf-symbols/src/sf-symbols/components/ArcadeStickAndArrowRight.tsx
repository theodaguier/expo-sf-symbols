
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
<g clip-path="url(#clip0_2207_36733)">
<path d="M9.83423 26.6689C13.6663 26.6689 16.6428 24.1494 16.6428 20.915C16.6428 17.6689 13.6663 15.1494 9.83423 15.1494C5.97876 15.1494 3.0022 17.6689 3.0022 20.915C3.0022 24.1494 5.97876 26.6689 9.83423 26.6689ZM9.83423 24.7822C7.04517 24.7822 4.88892 23.0947 4.88892 20.915C4.88892 18.7236 7.04517 17.0361 9.83423 17.0361C12.6233 17.0361 14.7561 18.7236 14.7561 20.915C14.7561 23.0947 12.6233 24.7822 9.83423 24.7822Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.78736 23.4111C11.2756 23.4111 12.4944 22.4971 12.4944 21.1963V7.73145H7.09204V21.1963C7.09204 22.4971 8.32251 23.4111 9.78736 23.4111Z" fill="currentColor"/>
<path d="M9.78735 22.04C10.5256 22.04 11.135 21.6885 11.135 21.1963V9.10254H8.46313V21.1963C8.46313 21.6885 9.04907 22.04 9.78735 22.04ZM9.78735 12.0791C12.5647 12.0791 14.803 9.81739 14.803 7.02832C14.803 4.2627 12.5413 2.0127 9.78735 2.0127C7.01 2.0127 4.73657 4.28614 4.73657 7.02832C4.73657 9.84082 7.01 12.0791 9.78735 12.0791Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M16.1155 12.4071C16.1155 12.9228 16.5256 13.3329 17.0413 13.3329H20.2874V14.9032C20.2874 15.7118 21.0725 16.0048 21.717 15.5126L24.9866 13.0517C25.4202 12.7235 25.4084 12.1259 24.9866 11.8095L21.717 9.33685C21.096 8.8681 20.2874 9.11419 20.2874 9.94622V11.5048H17.0413C16.5256 11.5048 16.1155 11.9033 16.1155 12.4071Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36733">
<rect width="22.3052" height="24.668" fill="currentColor" transform="translate(3.0022 2.0127)"/>
</clipPath>
</defs>
</svg>

`;

export const ArcadeStickAndArrowRight = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
