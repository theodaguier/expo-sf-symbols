
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
<g clip-path="url(#clip0_2207_33012)">
<path d="M13.9677 25.9189C20.5068 25.9189 25.9208 20.4932 25.9208 13.9658C25.9208 7.42676 20.4951 2.0127 13.956 2.0127C7.42871 2.0127 2.01465 7.42676 2.01465 13.9658C2.01465 20.4932 7.44043 25.9189 13.9677 25.9189ZM13.9677 23.9268C8.43653 23.9268 4.01856 19.4971 4.01856 13.9658C4.01856 8.43458 8.42481 4.00489 13.956 4.00489C19.4873 4.00489 23.9287 8.43458 23.9287 13.9658C23.9287 19.4971 19.499 23.9268 13.9677 23.9268Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.5342 19.8955H17.378C18.6085 19.8955 19.2647 19.2627 19.2647 18.0322V12.1494H8.64746V18.0322C8.64746 19.2744 9.30371 19.8955 10.5342 19.8955ZM11.8936 14.3994C11.6357 14.3994 11.4482 14.2236 11.4482 13.9541V13.7549C11.4482 13.4736 11.6357 13.3096 11.8936 13.3096H16.0185C16.288 13.3096 16.4639 13.4736 16.4639 13.7549V13.9541C16.4639 14.2236 16.288 14.3994 16.0185 14.3994H11.8936ZM8.77637 11.2002H19.1357C19.8505 11.2002 20.2022 10.79 20.2022 10.0986V9.52441C20.2022 8.82128 19.8505 8.39941 19.1357 8.39941H8.77637C8.12012 8.39941 7.72168 8.82128 7.72168 9.52441V10.0986C7.72168 10.79 8.07324 11.2002 8.77637 11.2002Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33012">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.01465 2.0127)"/>
</clipPath>
</defs>
</svg>

`;

export const ArchiveboxCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
