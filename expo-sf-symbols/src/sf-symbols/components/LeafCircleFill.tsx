
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
<g clip-path="url(#clip0_2207_36360)">
<path d="M13.9677 25.9941C20.5068 25.9941 25.9208 20.5684 25.9208 14.041C25.9208 7.50195 20.4951 2.08789 13.956 2.08789C7.42871 2.08789 2.01465 7.50195 2.01465 14.041C2.01465 20.5684 7.44043 25.9941 13.9677 25.9941Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.08496 9.44735C8.15527 9.07235 8.4834 9.04891 8.71777 9.28328C9.51465 10.0919 10.499 10.1973 11.3779 10.1973C12.1866 10.1973 13.1827 9.97469 14.0733 9.97469C16.6749 9.97469 18.538 11.252 18.538 13.9122C18.538 14.1583 18.5264 14.4161 18.503 14.5802C18.4561 14.756 18.2451 14.8614 18.0576 14.6739C15.6904 12.5411 13.3584 13.9122 11.4131 12.213C11.2022 12.0489 11.0146 12.2013 11.085 12.3771C12.0224 14.8263 15.6552 13.5255 18.0576 15.7286C18.6318 16.2442 19.7099 17.5685 19.7099 18.3185C19.7099 18.7989 19.3702 19.1505 18.9717 19.1505C18.7959 19.1505 18.5967 19.0568 18.5264 18.7989C18.2334 17.8614 17.9755 17.1818 17.5068 16.5607C16.9794 17.2286 15.8545 18.0138 14.0498 18.0138C10.335 18.0138 7.90918 15.295 7.90918 11.2169C7.90918 10.7247 7.97949 9.99813 8.08496 9.44735Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_36360">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.01465 2.08789)"/>
</clipPath>
</defs>
</svg>

`;

export const LeafCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
