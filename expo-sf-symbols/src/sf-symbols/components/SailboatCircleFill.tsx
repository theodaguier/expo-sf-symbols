
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
<g clip-path="url(#clip0_2207_35804)">
<path d="M14.0393 26.0425C20.5784 26.0425 25.9924 20.6284 25.9924 14.0893C25.9924 7.56201 20.5667 2.13623 14.0276 2.13623C7.50024 2.13623 2.08618 7.56201 2.08618 14.0893C2.08618 20.6284 7.51196 26.0425 14.0393 26.0425Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.50421 20.7222C8.8128 20.7222 8.41436 20.4175 8.26202 19.8784L7.73468 18.0972C7.5589 17.4995 7.85186 17.0776 8.41436 17.0776H13.3479V15.5659H9.17608C8.60186 15.5659 8.28546 14.8862 8.84796 14.4643C11.5081 12.5542 13.3479 8.92139 13.3479 6.89404V6.39013C13.3479 6.09717 13.5823 5.85107 13.887 5.85107C14.1917 5.85107 14.4495 6.09717 14.4495 6.39013V6.98779C16.8167 8.31201 19.1135 10.8667 19.1135 13.0698C19.1135 14.605 18.0354 15.5659 16.2542 15.5659H14.4495V17.0776H20.1331C20.7893 17.0776 21.0823 17.7339 20.6839 18.1909L18.844 20.2886C18.5745 20.5933 18.2698 20.7222 17.8596 20.7222H9.50421ZM14.4378 14.5347C15.3518 13.8901 15.7737 12.8003 15.7737 11.6987C15.7737 10.2925 15.1643 8.85107 14.4378 8.14795V14.5347Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_35804">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.08618 2.12451)"/>
</clipPath>
</defs>
</svg>

`;

export const SailboatCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
