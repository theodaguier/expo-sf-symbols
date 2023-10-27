
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
<g clip-path="url(#clip0_2207_36662)">
<path d="M13.9658 13.3916L25.0049 7.12207C24.8291 6.94629 24.6182 6.80567 24.3604 6.66504L16.0869 1.9541C15.3721 1.54395 14.6572 1.32129 13.9658 1.32129C13.2627 1.32129 12.5479 1.54395 11.833 1.9541L3.57129 6.66504C3.31348 6.80567 3.10254 6.94629 2.91504 7.12207L13.9658 13.3916ZM13.1572 26.8213V14.7979L2.16504 8.5166C2.09473 8.77442 2.07129 9.05567 2.07129 9.40723V18.5362C2.07129 20.2354 2.66895 20.8682 3.74707 21.4893L12.9346 26.7159C13.0049 26.7627 13.0752 26.7979 13.1572 26.8213ZM14.7627 26.8213C14.8447 26.7979 14.9151 26.7627 14.9971 26.7159L24.1729 21.4893C25.2627 20.8682 25.8486 20.2354 25.8486 18.5362V9.40723C25.8486 9.05567 25.8252 8.77442 25.7549 8.5166L14.7627 14.7979V26.8213Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36662">
<rect width="23.7773" height="25.7695" fill="currentColor" transform="translate(2.07129 1.05176)"/>
</clipPath>
</defs>
</svg>

`;

export const CubeFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
