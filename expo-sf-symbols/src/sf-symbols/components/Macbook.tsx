
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="34" height="29" viewBox="0 0 34 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_35409)">
<path d="M5.83838 20.5117V7.12891C5.83838 6.37891 6.21338 6.00391 6.96338 6.00391H26.9555C27.7055 6.00391 28.0805 6.37891 28.0805 7.12891V20.5117H5.83838Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.4204 6.00391H13.7133C13.8891 6.00391 13.9829 6.08594 13.9829 6.28516V6.41406C13.9829 6.90625 14.311 7.23437 14.8032 7.23437H19.1391C19.6196 7.23437 19.9243 6.90625 19.9243 6.41406V6.28516C19.9243 6.08594 20.018 6.00391 20.2172 6.00391H20.5102V5.03125H13.4204V6.00391ZM0.0610352 21.8477C0.0610352 22.586 0.658691 23.1835 1.38526 23.1835H32.5337C33.2602 23.1835 33.8579 22.586 33.8579 21.8477C33.8579 21.1094 33.2602 20.5117 32.5337 20.5117H29.9672V6.60156C29.9672 4.96094 29.0883 4.11719 27.4594 4.11719H6.45948C4.91259 4.11719 3.95166 4.96094 3.95166 6.60156V20.5117H1.38526C0.658691 20.5117 0.0610352 21.1094 0.0610352 21.8477ZM5.83838 20.5117V7.12891C5.83838 6.37891 6.21338 6.00391 6.96338 6.00391H26.9555C27.7055 6.00391 28.0805 6.37891 28.0805 7.12891V20.5117H5.83838Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35409">
<rect width="33.7969" height="19.0898" fill="currentColor" transform="translate(0.0610352 4.09375)"/>
</clipPath>
</defs>
</svg>

`;

export const Macbook = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
