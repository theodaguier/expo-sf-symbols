
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
<g clip-path="url(#clip0_2207_34164)">
<path d="M0.0209961 21.0722C0.0209961 23.4863 1.25147 24.6933 3.70069 24.6933H23.9741C26.4351 24.6933 27.6538 23.4863 27.6538 21.0722V6.75195C27.6538 4.33789 26.4351 3.11914 23.9741 3.11914H3.70069C1.25147 3.11914 0.0209961 4.33789 0.0209961 6.75195V21.0722ZM1.90772 13.9003V6.85742C1.90772 5.63867 2.55225 5.00586 3.72412 5.00586H23.9507C25.1108 5.00586 25.7671 5.63867 25.7671 6.85742V13.9003H1.90772Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34164">
<rect width="27.6328" height="21.5742" fill="currentColor" transform="translate(0.0209961 3.11914)"/>
</clipPath>
</defs>
</svg>

`;

export const RectangleBottomhalfFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
