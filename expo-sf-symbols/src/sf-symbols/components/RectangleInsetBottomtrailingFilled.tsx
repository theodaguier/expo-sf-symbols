
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
<g clip-path="url(#clip0_2207_34207)">
<path d="M3.76587 24.6933H24.0393C26.5003 24.6933 27.719 23.4863 27.719 21.0722V6.75195C27.719 4.33789 26.5003 3.11914 24.0393 3.11914H3.76587C1.31665 3.11914 0.0861816 4.33789 0.0861816 6.75195V21.0722C0.0861816 23.4863 1.31665 24.6933 3.76587 24.6933ZM3.7893 22.8066C2.61743 22.8066 1.9729 22.1855 1.9729 20.9668V6.85742C1.9729 5.63867 2.61743 5.00586 3.7893 5.00586H24.0159C25.176 5.00586 25.8323 5.63867 25.8323 6.85742V20.9668C25.8323 22.1855 25.176 22.8066 24.0159 22.8066H3.7893Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M14.9339 21.213H23.2073C23.9456 21.213 24.2385 20.9083 24.2385 20.1583V14.9551C24.2385 14.2051 23.9456 13.9004 23.2073 13.9004H14.9339C14.1956 13.9004 13.9026 14.2051 13.9026 14.9551V20.1583C13.9026 20.9083 14.1956 21.213 14.9339 21.213Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34207">
<rect width="27.6328" height="21.5742" fill="currentColor" transform="translate(0.0861816 3.11914)"/>
</clipPath>
</defs>
</svg>

`;

export const RectangleInsetBottomtrailingFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
