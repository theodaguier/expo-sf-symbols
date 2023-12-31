
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
<g clip-path="url(#clip0_2207_34830)">
<path d="M6.70069 24.6524H20.9155C23.3765 24.6524 24.5952 23.4336 24.5952 21.0195V6.71094C24.5952 4.29688 23.3765 3.07812 20.9155 3.07812H6.70069C4.25147 3.07812 3.021 4.28516 3.021 6.71094V21.0195C3.021 23.4453 4.25147 24.6524 6.70069 24.6524ZM6.72412 22.7656C5.55225 22.7656 4.90772 22.1445 4.90772 20.9258V6.80469C4.90772 5.58594 5.55225 4.96485 6.72412 4.96485H20.8921C22.0522 4.96485 22.7085 5.58594 22.7085 6.80469V20.9258C22.7085 22.1445 22.0522 22.7656 20.8921 22.7656H6.72412Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.8257 15.7578C14.8569 15.7695 15.7241 14.9141 15.7241 13.8477C15.7241 12.793 14.8569 11.9492 13.8257 11.9492C12.771 11.9492 11.9155 12.793 11.9155 13.8477C11.9155 14.9141 12.771 15.7461 13.8257 15.7578Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34830">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.021 3.05469)"/>
</clipPath>
</defs>
</svg>

`;

export const DieFace1 = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
