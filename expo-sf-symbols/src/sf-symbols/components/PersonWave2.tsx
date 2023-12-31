
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
<g clip-path="url(#clip0_2207_33258)">
<path d="M24.3047 16.3772C24.7383 16.6702 25.2774 16.5647 25.5938 16.1194C27.0938 14.0569 27.9727 11.221 27.9727 8.32645C27.9727 5.43192 27.1055 2.57254 25.5938 0.533478C25.2774 0.0764471 24.7383 -0.0173029 24.3047 0.275666C23.8828 0.568635 23.8008 1.11942 24.1524 1.59988C25.4297 3.40457 26.1563 5.83035 26.1563 8.32645C26.1563 10.8225 25.4063 13.2249 24.1524 15.053C23.8125 15.5335 23.8828 16.0842 24.3047 16.3772Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M19.9688 13.3186C20.3555 13.5882 20.918 13.5061 21.2227 13.0491C22.125 11.8655 22.6641 10.1194 22.6641 8.32646C22.6641 6.53349 22.125 4.79911 21.2227 3.59208C20.918 3.14677 20.3555 3.05302 19.9688 3.33427C19.4883 3.66239 19.418 4.24833 19.7813 4.7288C20.4727 5.6663 20.8477 6.96708 20.8477 8.32646C20.8477 9.68583 20.4609 10.9749 19.7813 11.9241C19.4297 12.4163 19.4883 12.9788 19.9688 13.3186Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M3.9375 24.8382H18.6563C20.6016 24.8382 21.5274 24.2522 21.5274 22.9632C21.5274 19.8928 17.6602 15.4514 11.2969 15.4514C4.9336 15.4514 1.05469 19.8928 1.05469 22.9632C1.05469 24.2522 1.98047 24.8382 3.9375 24.8382ZM3.375 23.0686C3.07031 23.0686 2.94141 22.9866 2.94141 22.7405C2.94141 20.8069 5.91797 17.221 11.2969 17.221C16.6758 17.221 19.6406 20.8069 19.6406 22.7405C19.6406 22.9866 19.5235 23.0686 19.2188 23.0686H3.375ZM11.2969 13.9866C14.0859 13.9866 16.3594 11.5139 16.3594 8.49048C16.3594 5.49048 14.1094 3.13501 11.2969 3.13501C8.51953 3.13501 6.23438 5.53735 6.23438 8.51392C6.2461 11.5257 8.51953 13.9866 11.2969 13.9866ZM11.2969 12.2171C9.58594 12.2171 8.1211 10.5882 8.1211 8.51392C8.1211 6.47485 9.5625 4.90454 11.2969 4.90454C13.0547 4.90454 14.4727 6.4397 14.4727 8.49048C14.4727 10.5647 13.0313 12.2171 11.2969 12.2171Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33258">
<rect width="26.918" height="27.7691" fill="currentColor" transform="translate(1.05469 0.10791)"/>
</clipPath>
</defs>
</svg>

`;

export const PersonWave2 = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
