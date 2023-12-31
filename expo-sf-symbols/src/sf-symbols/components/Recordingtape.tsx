
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="35" height="29" viewBox="0 0 35 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_37054)">
<path d="M0.0712891 13.7583C0.0712891 17.9771 3.49317 21.3989 7.71191 21.3989H27.2705C31.501 21.3989 34.9111 17.9771 34.9111 13.7583C34.9111 9.52784 31.501 6.11768 27.2705 6.11768C23.0518 6.11768 19.6299 9.53956 19.6299 13.7583C19.6299 16.02 20.6377 18.0474 22.2666 19.395H12.7158C14.3447 18.0474 15.3525 16.02 15.3525 13.7583C15.3525 9.52784 11.9307 6.11768 7.71191 6.11768C3.48145 6.11768 0.0712891 9.53956 0.0712891 13.7583ZM2.0752 13.7466C2.0752 10.6411 4.60645 8.10987 7.72363 8.10987C10.8291 8.10987 13.3486 10.6411 13.3486 13.7466C13.3486 16.8638 10.8291 19.395 7.72363 19.395C4.60645 19.395 2.0752 16.8638 2.0752 13.7466ZM21.6338 13.7466C21.6338 10.6411 24.1533 8.10987 27.2588 8.10987C30.376 8.10987 32.9072 10.6411 32.9072 13.7466C32.9072 16.8638 30.376 19.395 27.2588 19.395C24.1533 19.395 21.6338 16.8638 21.6338 13.7466Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37054">
<rect width="34.8398" height="15.293" fill="currentColor" transform="translate(0.0712891 6.11768)"/>
</clipPath>
</defs>
</svg>

`;

export const Recordingtape = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
