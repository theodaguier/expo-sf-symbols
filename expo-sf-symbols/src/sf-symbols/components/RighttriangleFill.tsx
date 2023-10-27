
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
<g clip-path="url(#clip0_2207_33987)">
<path d="M4.75024 24.166H23.1135C24.5081 24.166 25.1409 23.5332 25.1409 22.1386V3.77539C25.1409 2.75586 24.4846 2.12305 23.5003 2.12305C22.8792 2.12305 22.4339 2.4043 21.9768 2.86133L3.82446 21.0136C3.37915 21.4707 3.08618 21.9042 3.08618 22.5371C3.08618 23.5214 3.71899 24.166 4.75024 24.166Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33987">
<rect width="22.0547" height="24.4805" fill="currentColor" transform="translate(3.08618 2.12305)"/>
</clipPath>
</defs>
</svg>

`;

export const RighttriangleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
