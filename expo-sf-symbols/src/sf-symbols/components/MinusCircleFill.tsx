
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="28" height="29" viewBox="0 0 28 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_37202)">
<path d="M13.9553 26.0039C20.4944 26.0039 25.9084 20.5782 25.9084 14.0508C25.9084 7.51172 20.4827 2.09766 13.9436 2.09766C7.41626 2.09766 2.0022 7.51172 2.0022 14.0508C2.0022 20.5782 7.42798 26.0039 13.9553 26.0039Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.23267 15.0821C8.54126 15.0821 8.07251 14.7188 8.07251 14.0743C8.07251 13.418 8.51782 13.043 9.23267 13.043H18.7014C19.4045 13.043 19.8381 13.418 19.8381 14.0743C19.8381 14.7188 19.3811 15.0821 18.7014 15.0821H9.23267Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37202">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.0022 2.09766)"/>
</clipPath>
</defs>
</svg>

`;

export const MinusCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
