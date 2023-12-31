
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
<g clip-path="url(#clip0_2207_34473)">
<path d="M4.79687 21.6739H23.3711C24.4726 21.6739 25.1406 21.1114 25.1406 20.256C25.1406 19.0841 23.9453 18.0294 22.9375 16.9864C22.164 16.1778 21.9531 14.5138 21.8593 13.1661C21.7773 8.66614 20.582 5.57239 17.4648 4.44739C17.0195 2.91223 15.8125 1.7052 14.0781 1.7052C12.3555 1.7052 11.1367 2.91223 10.7031 4.44739C7.58593 5.57239 6.39062 8.66614 6.30859 13.1661C6.21484 14.5138 6.0039 16.1778 5.23046 16.9864C4.21093 18.0294 3.02734 19.0841 3.02734 20.256C3.02734 21.1114 3.68359 21.6739 4.79687 21.6739ZM14.0781 26.3732C16.0703 26.3732 17.5234 24.92 17.6757 23.2794H10.4922C10.6445 24.92 12.0977 26.3732 14.0781 26.3732Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M19.8554 11.3497C22.9492 11.3497 25.5156 8.79504 25.5156 5.68958C25.5156 2.57239 22.9492 0.0294189 19.8554 0.0294189C16.7382 0.0294189 14.1953 2.57239 14.1953 5.68958C14.1953 8.79504 16.7382 11.3497 19.8554 11.3497Z" fill="currentColor"/>
<path d="M19.8554 9.74426C22.0703 9.74426 23.9218 7.91614 23.9218 5.68958C23.9218 3.4513 22.0703 1.62317 19.8554 1.62317C17.6171 1.62317 15.789 3.4513 15.789 5.68958C15.789 7.91614 17.6171 9.74426 19.8554 9.74426Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34473">
<rect width="22.4883" height="28.0195" fill="currentColor" transform="translate(3.02734 0.0294189)"/>
</clipPath>
</defs>
</svg>

`;

export const BellBadgeFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
