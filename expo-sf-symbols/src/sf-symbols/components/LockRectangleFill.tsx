
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
<g clip-path="url(#clip0_2207_35287)">
<path d="M3.76367 24.6665H24.0371C26.4981 24.6665 27.7168 23.4595 27.7168 21.0454V6.7251C27.7168 4.31104 26.4981 3.09229 24.0371 3.09229H3.76367C1.31445 3.09229 0.0839844 4.31104 0.0839844 6.7251V21.0454C0.0839844 23.4595 1.31445 24.6665 3.76367 24.6665Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.54102 18.6665V13.8618C9.54102 13.0063 9.89258 12.5845 10.6074 12.5376V11.1196C10.6074 8.89306 11.9434 7.40479 13.9121 7.40479C15.8809 7.40479 17.2168 8.89306 17.2168 11.1196V12.5376C17.9199 12.5845 18.2715 13.0063 18.2715 13.8618V18.6665C18.2715 19.5689 17.8731 19.9907 17.041 19.9907H10.7832C9.93946 19.9907 9.54102 19.5689 9.54102 18.6665ZM11.8731 12.5259H15.9512V10.979C15.9512 9.57276 15.1309 8.62354 13.9121 8.62354C12.6817 8.62354 11.8731 9.57276 11.8731 10.979V12.5259Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_35287">
<rect width="27.6328" height="21.5742" fill="currentColor" transform="translate(0.0839844 3.09229)"/>
</clipPath>
</defs>
</svg>

`;

export const LockRectangleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
