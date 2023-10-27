
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
<g clip-path="url(#clip0_2207_37291)">
<path d="M13.9658 25.9511C20.5049 25.9511 25.9189 20.5254 25.9189 13.998C25.9189 7.45898 20.4932 2.04492 13.9541 2.04492C7.42675 2.04492 2.0127 7.45898 2.0127 13.998C2.0127 20.5254 7.43848 25.9511 13.9658 25.9511ZM13.9658 23.959C8.43458 23.959 4.01661 19.5293 4.01661 13.998C4.01661 8.4668 8.42285 4.03711 13.9541 4.03711C19.4854 4.03711 23.9268 8.4668 23.9268 13.998C23.9268 19.5293 19.4971 23.959 13.9658 23.959Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M16.2744 19.7988C16.6377 19.4355 16.626 18.873 16.2861 18.5449L11.4697 13.998L16.2861 9.47462C16.6377 9.14649 16.626 8.56055 16.2627 8.22071C15.9346 7.90431 15.3955 7.91602 15.0322 8.25587L10.1572 12.8613C9.48926 13.4707 9.48926 14.5488 10.1572 15.1582L15.0322 19.7637C15.3604 20.0683 15.9697 20.0918 16.2744 19.7988Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37291">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.0127 2.04492)"/>
</clipPath>
</defs>
</svg>

`;

export const ChevronBackwardCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
