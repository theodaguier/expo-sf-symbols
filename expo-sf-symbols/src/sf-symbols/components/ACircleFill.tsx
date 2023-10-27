
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_37624)">
<path d="M13.9573 25.9145C20.4964 25.9145 25.9104 20.4888 25.9104 13.9614C25.9104 7.42236 20.4846 2.0083 13.9455 2.0083C7.41821 2.0083 2.00415 7.42236 2.00415 13.9614C2.00415 20.4888 7.42993 25.9145 13.9573 25.9145Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.98463 19.6216C9.43385 19.6216 9.08228 19.2817 9.08228 18.7895C9.08228 18.6021 9.10571 18.4263 9.21118 18.1567L12.598 9.03955C12.844 8.40674 13.2894 8.07861 13.9456 8.07861C14.6136 8.07861 15.0706 8.40674 15.305 9.03955L18.7034 18.1567C18.7972 18.4263 18.8323 18.6021 18.8323 18.7895C18.8323 19.2817 18.469 19.6216 17.93 19.6216C17.4847 19.6216 17.18 19.4106 16.9925 18.8481L16.1136 16.2817H11.801L10.9221 18.8481C10.7346 19.4224 10.4182 19.6216 9.98463 19.6216ZM12.2815 14.8169H15.6214L14.0159 10.1528H13.887L12.2815 14.8169Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37624">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.00415 2.0083)"/>
</clipPath>
</defs>
</svg>

`;

export const ACircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
