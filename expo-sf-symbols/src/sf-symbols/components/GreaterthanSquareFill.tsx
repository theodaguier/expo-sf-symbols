
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
<g clip-path="url(#clip0_2207_37240)">
<path d="M6.70069 24.6734H20.9155C23.3765 24.6734 24.5952 23.4546 24.5952 21.0405V6.73193C24.5952 4.31787 23.3765 3.09912 20.9155 3.09912H6.70069C4.25147 3.09912 3.021 4.30615 3.021 6.73193V21.0405C3.021 23.4663 4.25147 24.6734 6.70069 24.6734Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.6851 18.8257C10.1108 18.8257 9.67725 18.4038 9.67725 17.853C9.67725 17.3843 9.88819 17.1148 10.3921 16.8804L16.521 13.8687V13.7984L10.3921 10.7163C9.89991 10.4819 9.67725 10.189 9.67725 9.73194C9.67725 9.19288 10.0991 8.771 10.6616 8.771C10.9312 8.771 11.0835 8.8296 11.2827 8.92335L18.4898 12.8022C18.9585 13.0718 19.2046 13.4116 19.2046 13.8687C19.2046 14.3726 18.9819 14.6773 18.4898 14.9351L11.2827 18.6851C11.0952 18.7671 10.9312 18.8257 10.6851 18.8257Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37240">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.021 3.07568)"/>
</clipPath>
</defs>
</svg>

`;

export const GreaterthanSquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
