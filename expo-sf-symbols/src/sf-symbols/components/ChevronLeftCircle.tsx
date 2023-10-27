
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
<g clip-path="url(#clip0_2207_37286)">
<path d="M14.0141 25.9511C20.5532 25.9511 25.9672 20.5254 25.9672 13.998C25.9672 7.45898 20.5415 2.04492 14.0024 2.04492C7.47509 2.04492 2.06104 7.45898 2.06104 13.998C2.06104 20.5254 7.48682 25.9511 14.0141 25.9511ZM14.0141 23.959C8.48292 23.959 4.06495 19.5293 4.06495 13.998C4.06495 8.4668 8.47119 4.03711 14.0024 4.03711C19.5337 4.03711 23.9751 8.4668 23.9751 13.998C23.9751 19.5293 19.5454 23.959 14.0141 23.959Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M16.3227 19.7988C16.686 19.4355 16.6743 18.873 16.3344 18.5449L11.5181 13.998L16.3344 9.47462C16.686 9.14649 16.6743 8.56055 16.311 8.22071C15.9829 7.90431 15.4438 7.91602 15.0805 8.25587L10.2056 12.8613C9.5376 13.4707 9.5376 14.5488 10.2056 15.1582L15.0805 19.7637C15.4087 20.0683 16.018 20.0918 16.3227 19.7988Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37286">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.06104 2.04492)"/>
</clipPath>
</defs>
</svg>

`;

export const ChevronLeftCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
