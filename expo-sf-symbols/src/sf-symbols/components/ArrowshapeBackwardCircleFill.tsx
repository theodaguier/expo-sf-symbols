
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
<g clip-path="url(#clip0_2207_33100)">
<path d="M13.9553 25.9405C20.4944 25.9405 25.9084 20.5264 25.9084 13.9873C25.9084 7.45996 20.4827 2.03418 13.9436 2.03418C7.41626 2.03418 2.0022 7.45996 2.0022 13.9873C2.0022 20.5264 7.42798 25.9405 13.9553 25.9405Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M6.57251 13.9873C6.57251 13.7647 6.65454 13.5303 6.91236 13.2725L12.1038 8.43262C12.4553 8.10449 12.6545 7.96387 12.971 7.96387C13.4397 7.96387 13.7678 8.33887 13.7678 8.77246V11.3975H19.2288C20.1897 11.3975 20.7405 11.9482 20.7405 12.8741V15.1123C20.7405 16.0381 20.1897 16.5889 19.2288 16.5889H13.7678V19.2491C13.7678 19.7061 13.4397 20.0108 12.9944 20.0108C12.6663 20.0108 12.4202 19.8702 12.1038 19.5889L6.91236 14.6905C6.65454 14.4561 6.57251 14.1983 6.57251 13.9873Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_33100">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.0022 2.02246)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowshapeBackwardCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
