
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="38" height="29" viewBox="0 0 38 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_35534)">
<path d="M16.6719 19.7578C18.9102 19.7578 21.2422 23.5312 25.6953 23.5312C30.0195 23.5312 33.2774 19.6054 33.2774 14.4492C33.2774 6 25.8359 5.0625 16.6719 5.0625C7.4961 5.0625 0.0546875 6.01172 0.0546875 14.4492C0.0546875 19.6054 3.3125 23.5312 7.63672 23.5312C12.0899 23.5312 14.4219 19.7578 16.6719 19.7578Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M29.7969 16.2656C33.9219 16.2656 37.3555 12.832 37.3555 8.70703C37.3555 4.5586 33.9453 1.14844 29.7969 1.14844C25.6602 1.14844 22.25 4.57032 22.25 8.70703C22.25 12.8672 25.6485 16.2656 29.7969 16.2656Z" fill="currentColor"/>
<path d="M29.7969 14.6601C33.0312 14.6601 35.75 11.9648 35.75 8.70703C35.75 5.4375 33.0663 2.75391 29.7969 2.75391C26.5391 2.75391 23.8438 5.44922 23.8438 8.70703C23.8438 11.9882 26.5391 14.6601 29.7969 14.6601Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M29.7969 12.5039C29.2578 12.5039 28.8125 12.0703 28.8125 11.5195C28.8125 10.9805 29.2578 10.5234 29.7969 10.5234C30.3477 10.5234 30.793 10.9805 30.793 11.5195C30.7813 12.0703 30.3477 12.5039 29.7969 12.5039ZM29.7969 9.71485C29.3867 9.71485 29.1055 9.4336 29.0938 9.03516L29 5.6836C28.9883 5.20313 29.3047 4.875 29.7969 4.875C30.2891 4.875 30.6172 5.20313 30.6055 5.6836L30.5117 9.03516C30.5 9.4336 30.207 9.71485 29.7969 9.71485Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_35534">
<rect width="37.3008" height="26.7305" fill="currentColor" transform="translate(0.0546875 1.14844)"/>
</clipPath>
</defs>
</svg>

`;

export const VisionproBadgeExclamationmarkFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
