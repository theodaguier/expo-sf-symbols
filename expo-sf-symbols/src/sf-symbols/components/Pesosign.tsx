
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
<g clip-path="url(#clip0_2207_37792)">
<path d="M7.40967 23.8032C7.40967 24.4243 7.91358 24.9165 8.53467 24.9165C9.15576 24.9165 9.64795 24.4243 9.64795 23.8032V16.854H13.8667C17.851 16.854 20.5932 14.1587 20.5932 10.2212C20.5932 6.30713 18.0385 3.63525 13.9839 3.63525H8.53467C7.84326 3.63525 7.40967 4.09228 7.40967 4.79541V23.8032ZM9.64795 14.8852V5.62744H13.4331C16.6557 5.62744 18.2964 7.30322 18.2964 10.2212C18.2964 13.1509 16.5034 14.8852 13.3394 14.8852H9.64795ZM5.07764 8.6626C5.07764 9.08447 5.41748 9.42432 5.83936 9.42432H21.7299C22.1518 9.42432 22.5034 9.08447 22.5034 8.6626C22.5034 8.24072 22.1518 7.90088 21.7299 7.90088H5.83936C5.41748 7.90088 5.07764 8.24072 5.07764 8.6626ZM5.07764 12.3892C5.07764 12.811 5.41748 13.1509 5.83936 13.1509H21.7299C22.1518 13.1509 22.5034 12.811 22.5034 12.3892C22.5034 11.9673 22.1518 11.6274 21.7299 11.6274H5.83936C5.41748 11.6274 5.07764 11.9673 5.07764 12.3892Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37792">
<rect width="17.4258" height="21.8086" fill="currentColor" transform="translate(5.07764 3.10791)"/>
</clipPath>
</defs>
</svg>

`;

export const Pesosign = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
