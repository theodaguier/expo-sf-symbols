
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
<g clip-path="url(#clip0_2207_37710)">
<path d="M6.75733 24.7442H20.9721C23.4331 24.7442 24.6518 23.5254 24.6518 21.1113V6.80273C24.6518 4.38867 23.4331 3.16992 20.9721 3.16992H6.75733C4.30811 3.16992 3.07764 4.37695 3.07764 6.80273V21.1113C3.07764 23.5371 4.30811 24.7442 6.75733 24.7442Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.8823 19.5996C13.144 19.5996 12.7573 19.2832 12.4409 18.4629L9.04248 9.61524C8.98389 9.42774 8.94873 9.28711 8.94873 9.11133C8.94873 8.57227 9.37061 8.18555 9.93311 8.18555C10.4722 8.18555 10.7651 8.44337 10.9644 9.01758L13.8237 17.2793H13.9057L16.7768 9.01758C16.976 8.44337 17.269 8.18555 17.8081 8.18555C18.3706 8.18555 18.7807 8.56055 18.7807 9.11133C18.7807 9.28711 18.7573 9.42774 18.6987 9.61524L15.312 18.4395C15.0073 19.2363 14.5737 19.5996 13.8823 19.5996Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37710">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.07764 3.14648)"/>
</clipPath>
</defs>
</svg>

`;

export const VSquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
