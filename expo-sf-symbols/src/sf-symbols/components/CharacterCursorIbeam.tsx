
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
<g clip-path="url(#clip0_2207_37140)">
<path d="M17.801 26.4404H24.6448C25.1839 26.4404 25.4651 26.1826 25.4651 25.749C25.4651 25.3037 25.1839 25.0693 24.6448 25.0693H22.0198V3.40137H24.6448C25.1839 3.40137 25.4651 3.15527 25.4651 2.70996C25.4651 2.27637 25.1839 2.04199 24.6448 2.04199H17.801C17.2737 2.04199 16.9924 2.27637 16.9924 2.70996C16.9924 3.15527 17.2737 3.40137 17.801 3.40137H20.4378V25.0693H17.801C17.2737 25.0693 16.9924 25.3037 16.9924 25.749C16.9924 26.1826 17.2737 26.4404 17.801 26.4404Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M3.07056 22.8779C3.69165 22.8779 3.99634 22.6436 4.21899 21.999L5.73071 17.8506H12.6448L14.1565 21.999C14.3792 22.6436 14.6839 22.8779 15.2932 22.8779C15.9143 22.8779 16.3128 22.5029 16.3128 21.917C16.3128 21.7178 16.2776 21.542 16.1839 21.2842L10.6877 6.65918C10.4182 5.93261 9.93774 5.58105 9.18774 5.58105C8.46118 5.58105 7.96899 5.9209 7.71118 6.64746L2.21509 21.2959C2.10962 21.5537 2.08618 21.7295 2.08618 21.9287C2.08618 22.5147 2.46118 22.8779 3.07056 22.8779ZM6.32837 16.0576L9.17602 8.1709H9.23462L12.0823 16.0576H6.32837Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37140">
<rect width="23.3789" height="24.4805" fill="currentColor" transform="translate(2.08618 2.04199)"/>
</clipPath>
</defs>
</svg>

`;

export const CharacterCursorIbeam = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
