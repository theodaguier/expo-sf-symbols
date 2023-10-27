
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
<g clip-path="url(#clip0_2207_37603)">
<path d="M13.9553 25.9313C20.4944 25.9313 25.9084 20.5056 25.9084 13.9782C25.9084 7.43921 20.4827 2.02515 13.9436 2.02515C7.41626 2.02515 2.0022 7.43921 2.0022 13.9782C2.0022 20.5056 7.42798 25.9313 13.9553 25.9313Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.7483 17.7165C9.16237 17.7165 8.92799 17.0251 9.23268 16.5095L13.2991 9.61889C13.6038 9.1267 14.3069 9.09155 14.6116 9.61889L18.6663 16.5095C18.9944 17.072 18.7366 17.7165 18.1624 17.7165H9.7483Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37603">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.0022 2.02515)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowtriangleUpCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
