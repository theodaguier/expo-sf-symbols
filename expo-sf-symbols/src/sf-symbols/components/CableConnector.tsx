
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
<g clip-path="url(#clip0_2207_35688)">
<path d="M12.8687 27.7771H14.8257V16.5271H12.8687V27.7771ZM11.4624 18.3083H16.2202C17.2397 18.3083 17.6499 17.8982 17.6499 16.8669V7.85522C17.6499 6.83569 17.2397 6.41382 16.2202 6.41382H11.4624C10.4312 6.41382 10.021 6.83569 10.021 7.85522V16.8669C10.021 17.8982 10.4312 18.3083 11.4624 18.3083Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.5562 5.04272H16.1147V2.47632C16.1147 1.44507 15.6929 1.03491 14.6733 1.03491H13.0093C11.978 1.03491 11.5562 1.44507 11.5562 2.47632V5.04272Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35688">
<rect width="7.62891" height="26.7539" fill="currentColor" transform="translate(10.021 1.03491)"/>
</clipPath>
</defs>
</svg>

`;

export const CableConnector = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
