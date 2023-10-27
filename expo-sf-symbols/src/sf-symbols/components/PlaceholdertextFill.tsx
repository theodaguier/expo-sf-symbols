
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
<g clip-path="url(#clip0_2207_34054)">
<path d="M11.4324 3.11035C8.61987 3.11035 7.03784 4.58691 7.03784 7.39941V20.3721C7.03784 23.1963 8.61987 24.6846 11.4324 24.6846H17.6316C20.444 24.6846 21.9909 23.1963 21.9909 20.3721V7.39941C21.9909 4.58691 20.444 3.11035 17.6316 3.11035H11.4324Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34054">
<rect width="14.9531" height="21.5742" fill="currentColor" transform="translate(7.03784 3.11035)"/>
</clipPath>
</defs>
</svg>

`;

export const PlaceholdertextFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
