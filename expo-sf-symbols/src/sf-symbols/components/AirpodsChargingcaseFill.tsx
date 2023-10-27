
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="29" height="28" viewBox="0 0 29 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_35607)">
<path d="M9.99243 25.2817H17.2346C21.219 25.2817 23.1409 23.3599 23.1409 19.3755V9.81299H18.1839C17.9729 10.2817 17.4807 10.6099 16.8596 10.6099H10.3674C9.76977 10.6099 9.26587 10.2817 9.05493 9.81299H4.08618V19.3755C4.08618 23.3599 6.00806 25.2817 9.99243 25.2817ZM4.08618 8.62939H9.05493C9.26587 8.14892 9.76977 7.8208 10.3674 7.8208H16.8596C17.4807 7.8208 17.9729 8.14892 18.1839 8.62939H23.1409V7.91455C23.1409 3.93018 21.219 2.0083 17.2346 2.0083H9.99243C6.00806 2.0083 4.08618 3.93018 4.08618 7.91455V8.62939Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35607">
<rect width="19.0547" height="23.2852" fill="currentColor" transform="translate(4.08618 2.0083)"/>
</clipPath>
</defs>
</svg>

`;

export const AirpodsChargingcaseFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
