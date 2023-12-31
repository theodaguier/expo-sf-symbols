
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
<g clip-path="url(#clip0_2207_34832)">
<path d="M6.70484 24.6524H20.9196C23.3806 24.6524 24.5993 23.4336 24.5993 21.0195V6.71094C24.5993 4.29688 23.3806 3.07812 20.9196 3.07812H6.70484C4.25562 3.07812 3.02515 4.28516 3.02515 6.71094V21.0195C3.02515 23.4453 4.25562 24.6524 6.70484 24.6524ZM6.72827 22.7656C5.5564 22.7656 4.91187 22.1445 4.91187 20.9258V6.80469C4.91187 5.58594 5.5564 4.96485 6.72827 4.96485H20.8962C22.0563 4.96485 22.7126 5.58594 22.7126 6.80469V20.9258C22.7126 22.1445 22.0563 22.7656 20.8962 22.7656H6.72827Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M19.0915 10.4961C20.1228 10.5078 20.9782 9.64063 20.9782 8.57422C20.9782 7.53125 20.1228 6.6875 19.0915 6.6875C18.0368 6.6875 17.1696 7.53125 17.1696 8.57422C17.1696 9.64063 18.0368 10.4727 19.0915 10.4961ZM8.5564 21.043C9.58765 21.043 10.4548 20.1875 10.4548 19.1328C10.4548 18.0781 9.58765 17.2344 8.5564 17.2344C7.50171 17.2344 6.65796 18.0781 6.65796 19.1328C6.65796 20.1875 7.50171 21.043 8.5564 21.043Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34832">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.02515 3.05469)"/>
</clipPath>
</defs>
</svg>

`;

export const DieFace2 = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
