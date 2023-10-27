
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
<g clip-path="url(#clip0_2207_36674)">
<path d="M2.08618 21.9097C2.08618 24.687 7.04321 26.7261 13.8753 26.7261C20.7073 26.7261 25.6643 24.687 25.6643 21.9097C25.6643 21.5347 25.4885 20.9722 25.219 20.4683L14.9768 1.91748C14.6604 1.34326 14.2503 1.22607 13.8753 1.22607C13.5003 1.22607 13.0901 1.34326 12.7737 1.91748L2.53149 20.4683C2.26196 20.9722 2.08618 21.5347 2.08618 21.9097Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36674">
<rect width="23.5781" height="25.6758" fill="currentColor" transform="translate(2.08618 1.05029)"/>
</clipPath>
</defs>
</svg>

`;

export const ConeFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
