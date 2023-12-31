
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="28" height="29" viewBox="0 0 28 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_36301)">
<path d="M6.19922 26.6455H22.207C24.1992 26.6455 25.4062 25.2627 25.4062 23.4697C25.4062 22.8721 25.1133 22.0752 24.5625 21.2783L18.6094 12.7354V3.05566H9.79688V12.7354L3.73828 21.4307C3.24609 22.1338 3 22.8721 3 23.4697C3 25.2627 4.20703 26.6455 6.19922 26.6455ZM9.71484 4.04004H18.6797C19.2656 4.04004 19.6758 3.58301 19.6758 3.04395C19.6758 2.50488 19.2656 2.07129 18.6797 2.07129H9.71484C9.12891 2.07129 8.73047 2.50488 8.73047 3.04395C8.73047 3.58301 9.12891 4.04004 9.71484 4.04004Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.6719 7.0752V5.7041H13.793C14.168 5.7041 14.4844 6.02051 14.4844 6.38379C14.4844 6.78223 14.1914 7.0752 13.8047 7.0752H11.6719ZM11.6719 10.4268V9.05567H13.8047C14.1797 9.05567 14.4961 9.36035 14.4961 9.72363C14.4961 10.1221 14.2031 10.4268 13.8164 10.4268H11.6719ZM11.6719 13.7666V12.3955H13.8164C14.1914 12.3955 14.4961 12.7119 14.4961 13.0752C14.4961 13.4736 14.2031 13.7666 13.8164 13.7666H11.6719Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_36301">
<rect width="22.4062" height="24.5977" fill="currentColor" transform="translate(3 2.07129)"/>
</clipPath>
</defs>
</svg>

`;

export const FlaskFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
