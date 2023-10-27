
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
<g clip-path="url(#clip0_2207_34409)">
<path d="M13.6658 25.7862C13.8533 25.7862 14.1462 25.7158 14.4392 25.5635C21.1071 22.0713 23.2517 20.3252 23.2517 16.1182V7.28223C23.2517 6.0752 22.736 5.68848 21.7517 5.27832C20.3806 4.71582 15.9978 3.12207 14.6384 2.65332C14.322 2.54785 13.9939 2.48926 13.6658 2.48926C13.3376 2.48926 13.0095 2.55957 12.7048 2.65332C11.3337 3.09863 6.95092 4.72754 5.57983 5.27832C4.60718 5.67676 4.07983 6.0752 4.07983 7.28223V16.1182C4.07983 20.3252 6.34155 21.8721 12.8923 25.5635C13.197 25.7276 13.4783 25.7862 13.6658 25.7862Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34409">
<rect width="19.1719" height="23.6602" fill="currentColor" transform="translate(4.07983 2.12598)"/>
</clipPath>
</defs>
</svg>

`;

export const ShieldFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
