
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
<g clip-path="url(#clip0_2207_34893)">
<path d="M3.65051 25.7529H23.5372C25.963 25.7529 27.1583 24.5811 27.1583 22.1787V10.7764C27.1583 8.37402 25.963 7.20215 23.5372 7.20215H3.65051C1.23645 7.20215 0.0294189 8.37402 0.0294189 10.7764V22.1787C0.0294189 24.5811 1.23645 25.7529 3.65051 25.7529ZM7.64661 8.22168H9.46301V6.14746C9.46301 5.25683 9.99036 4.75293 10.9044 4.75293H16.2833C17.1974 4.75293 17.713 5.25683 17.713 6.14746V8.19824H19.5294V6.27637C19.5294 4.07324 18.3692 3.04199 16.2482 3.04199H10.9278C8.92395 3.04199 7.64661 4.07324 7.64661 6.27637V8.22168Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34893">
<rect width="27.1289" height="22.7227" fill="currentColor" transform="translate(0.0294189 3.04199)"/>
</clipPath>
</defs>
</svg>

`;

export const CaseFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
