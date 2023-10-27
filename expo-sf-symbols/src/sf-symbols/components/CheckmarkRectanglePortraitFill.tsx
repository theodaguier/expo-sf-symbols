
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
<g clip-path="url(#clip0_2207_37280)">
<path d="M4.09033 22.5005C4.09033 24.9497 5.29736 26.1685 7.72314 26.1685H20.1684C22.5942 26.1685 23.8012 24.9497 23.8012 22.5005V4.72315C23.8012 2.28565 22.5942 1.04346 20.1684 1.04346H7.72314C5.29736 1.04346 4.09033 2.28565 4.09033 4.72315V22.5005Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M12.645 19.3365C12.2349 19.3365 11.9185 19.1724 11.6021 18.7623L8.66064 15.1646C8.48486 14.9302 8.39111 14.6607 8.39111 14.4029C8.39111 13.8638 8.78955 13.4302 9.32861 13.4302C9.65674 13.4302 9.92627 13.5474 10.2075 13.9341L12.5864 16.9927L17.602 8.96534C17.813 8.60205 18.1176 8.42627 18.4341 8.42627C18.9497 8.42627 19.4301 8.77784 19.4301 9.3169C19.4301 9.57471 19.2778 9.85596 19.1255 10.0903L13.6177 18.7623C13.3833 19.149 13.0435 19.3365 12.645 19.3365Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37280">
<rect width="19.7109" height="25.1367" fill="currentColor" transform="translate(4.09033 1.04346)"/>
</clipPath>
</defs>
</svg>

`;

export const CheckmarkRectanglePortraitFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
