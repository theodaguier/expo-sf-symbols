
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
<g clip-path="url(#clip0_2207_34833)">
<path d="M6.70703 24.6524H20.9218C23.3828 24.6524 24.6015 23.4336 24.6015 21.0195V6.71094C24.6015 4.29688 23.3828 3.07812 20.9218 3.07812H6.70703C4.25781 3.07812 3.02734 4.28516 3.02734 6.71094V21.0195C3.02734 23.4453 4.25781 24.6524 6.70703 24.6524Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M19.2578 10.3906C18.1679 10.3672 17.2656 9.51171 17.2656 8.41015C17.2656 7.33202 18.1679 6.46484 19.2578 6.46484C20.3242 6.46484 21.2031 7.33202 21.2031 8.41015C21.2031 9.51171 20.3242 10.4141 19.2578 10.3906ZM8.39453 21.2656C7.30468 21.2656 6.4375 20.3867 6.4375 19.2969C6.4375 18.207 7.30468 17.3399 8.39453 17.3399C9.46093 17.3399 10.3516 18.207 10.3516 19.2969C10.3516 20.3867 9.46093 21.2656 8.39453 21.2656Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_34833">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.02734 3.05469)"/>
</clipPath>
</defs>
</svg>

`;

export const DieFace2Fill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
