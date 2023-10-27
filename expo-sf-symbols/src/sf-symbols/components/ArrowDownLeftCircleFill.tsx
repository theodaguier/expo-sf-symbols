
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
<g clip-path="url(#clip0_2207_37378)">
<path d="M14.0393 25.9204C20.5784 25.9204 25.9924 20.4947 25.9924 13.9673C25.9924 7.42822 20.5667 2.01416 14.0276 2.01416C7.50024 2.01416 2.08618 7.42822 2.08618 13.9673C2.08618 20.4947 7.51196 25.9204 14.0393 25.9204Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.2424 10.9673C10.7815 10.9673 11.1331 11.3306 11.1331 11.9165V13.9908L10.9573 15.8775L12.7034 14.0142L17.1214 9.58447C17.2971 9.40869 17.5315 9.30322 17.8245 9.30322C18.3518 9.30322 18.7151 9.65478 18.7151 10.2056C18.7151 10.4399 18.5979 10.686 18.4221 10.8618L13.9807 15.2798L12.094 17.0494L13.887 16.8619H16.0667C16.6526 16.8619 17.0276 17.2134 17.0276 17.7408C17.0276 18.2798 16.6643 18.6314 16.0901 18.6314H10.3713C9.75025 18.6314 9.35181 18.3501 9.35181 17.6353V11.9399C9.35181 11.3657 9.7151 10.9673 10.2424 10.9673Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37378">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.08618 2.01416)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowDownLeftCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
