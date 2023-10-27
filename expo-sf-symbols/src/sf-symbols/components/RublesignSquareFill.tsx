
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
<g clip-path="url(#clip0_2207_37766)">
<path d="M6.73218 24.7222H20.947C23.408 24.7222 24.6267 23.5034 24.6267 21.0893V6.78076C24.6267 4.3667 23.408 3.14795 20.947 3.14795H6.73218C4.28296 3.14795 3.05249 4.35498 3.05249 6.78076V21.0893C3.05249 23.5151 4.28296 24.7222 6.73218 24.7222Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.8064 19.9643C11.3377 19.9643 11.0095 19.6362 11.0095 19.1675V17.9487H9.94311C9.59155 17.9487 9.35718 17.7026 9.35718 17.3511C9.35718 17.0112 9.59155 16.7534 9.94311 16.7534H11.0095V15.5815H9.9314C9.57983 15.5815 9.33374 15.312 9.33374 14.9722C9.33374 14.6323 9.57983 14.3745 9.9314 14.3745H11.0095V9.1831C11.0095 8.70263 11.3142 8.37451 11.7947 8.37451H14.6658C16.9158 8.37451 18.3337 9.89795 18.3337 11.9722C18.3337 14.0698 16.9041 15.5698 14.6541 15.5698H12.5915V16.7534H15.4041C15.7556 16.7534 15.99 17.0112 15.99 17.3511C15.99 17.7026 15.7556 17.9487 15.4041 17.9487H12.5915V19.1675C12.5915 19.6362 12.2634 19.9643 11.8064 19.9643ZM12.6033 14.1518L14.3845 14.1753C15.9314 14.1753 16.74 13.3315 16.74 11.9839C16.74 10.6597 15.9431 9.82763 14.3845 9.82763H12.6033V14.1518Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37766">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.05249 3.12451)"/>
</clipPath>
</defs>
</svg>

`;

export const RublesignSquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
