
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
<g clip-path="url(#clip0_2207_33569)">
<path d="M6.69239 24.6509H20.9072C23.3682 24.6509 24.5869 23.4321 24.5869 21.018V6.70947C24.5869 4.29541 23.3682 3.07666 20.9072 3.07666H6.69239C4.24317 3.07666 3.0127 4.28369 3.0127 6.70947V21.018C3.0127 23.4438 4.24317 24.6509 6.69239 24.6509Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.2783 17.022L10.3838 7.37745C10.3955 6.93214 10.8643 6.75635 11.1807 7.06104L17.7783 13.8579C18.1065 14.1977 17.8838 14.643 17.4268 14.6548L14.8252 14.7602L16.9932 19.7876C17.0986 20.022 17.0166 20.268 16.7939 20.3735L15.5986 20.854C15.376 20.936 15.1299 20.8305 15.0244 20.5962L12.9619 15.4985L11.1221 17.3501C10.8174 17.643 10.2666 17.5024 10.2783 17.022Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_33569">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.0127 3.05322)"/>
</clipPath>
</defs>
</svg>

`;

export const CursorarrowSquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
