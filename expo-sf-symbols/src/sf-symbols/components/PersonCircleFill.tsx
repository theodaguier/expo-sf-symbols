
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
<g clip-path="url(#clip0_2207_33218)">
<path d="M13.9951 26.0244C20.5342 26.0244 25.9482 20.6103 25.9482 14.0712C25.9482 7.54395 20.5225 2.11816 13.9834 2.11816C7.45605 2.11816 2.04199 7.54395 2.04199 14.0712C2.04199 20.6103 7.46777 26.0244 13.9951 26.0244Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.47558 20.2119C7.9834 20.2119 7.76074 19.8955 7.76074 19.4502C7.76074 18.1376 9.75293 14.7041 13.9951 14.7041C18.2373 14.7041 20.2295 18.1376 20.2295 19.4502C20.2295 19.8955 20.0068 20.2119 19.5147 20.2119H8.47558ZM13.9951 13.708C12.2842 13.6962 10.8897 12.2548 10.8897 10.3096C10.8897 8.50488 12.2842 7.00488 13.9951 7.00488C15.7061 7.00488 17.1006 8.50488 17.1006 10.3096C17.1006 12.2548 15.7061 13.7197 13.9951 13.708Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_33218">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.04199 2.10645)"/>
</clipPath>
</defs>
</svg>

`;

export const PersonCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
