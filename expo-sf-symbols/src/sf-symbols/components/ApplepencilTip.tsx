
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
<g clip-path="url(#clip0_2207_35550)">
<path d="M8.98367 25.1674C9.4993 25.1674 9.89774 24.8042 9.92117 24.2182L10.2141 18.5229L11.6321 12.5112L10.4368 13.4487H17.2571L16.0618 12.5112L17.4915 18.5229L17.7727 24.2182C17.8079 24.8042 18.1946 25.1674 18.722 25.1674C19.2376 25.1674 19.6946 24.7807 19.6595 24.1479L19.39 18.4292C19.3782 18.2768 19.3665 18.1596 19.3196 18.019L17.8196 12.1596C17.7493 11.8667 17.5032 11.6792 17.2102 11.6792H10.4837C10.1907 11.6792 9.95633 11.8667 9.8743 12.1596L8.3743 18.019C8.32742 18.1596 8.3157 18.2768 8.3157 18.4292L8.03445 24.1479C8.01102 24.7807 8.45633 25.1674 8.98367 25.1674Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.3548 10.0737H17.2923L14.8431 2.78467C14.679 2.29248 14.3509 2.01123 13.847 2.01123C13.3196 2.01123 12.9446 2.29248 12.7806 2.78467L10.3548 10.0737Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35550">
<rect width="11.6278" height="23.168" fill="currentColor" transform="translate(8.03357 2.01123)"/>
</clipPath>
</defs>
</svg>

`;

export const ApplepencilTip = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
