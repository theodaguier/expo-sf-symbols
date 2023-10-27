
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="29" height="28" viewBox="0 0 29 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_33440)">
<path d="M3.09863 21.7344C3.09863 22.25 3.52051 22.6836 4.03613 22.6836C4.56347 22.6836 4.98535 22.25 4.98535 21.7344V5.96094C4.98535 5.44531 4.56347 5.02344 4.03613 5.02344C3.52051 5.02344 3.09863 5.44531 3.09863 5.96094V21.7344ZM22.7861 21.7344C22.7861 22.25 23.2197 22.6836 23.7353 22.6836C24.2509 22.6836 24.6728 22.25 24.6728 21.7344V5.96094C24.6728 5.44531 24.2509 5.02344 23.7353 5.02344C23.2197 5.02344 22.7861 5.44531 22.7861 5.96094V21.7344Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M14.4072 18.6523C14.9111 18.6523 15.2158 18.3008 15.2158 17.7969V10.3906C15.2158 9.80469 14.8525 9.47656 14.2783 9.47656C13.8095 9.47656 13.4814 9.67578 13.1064 9.95703L11.7822 10.9414C11.5596 11.1172 11.4072 11.3047 11.4072 11.5977C11.4072 11.9258 11.6533 12.1953 11.9932 12.1953C12.1572 12.1953 12.2744 12.1367 12.4033 12.043L13.5634 11.1641H13.5869V17.7969C13.5869 18.3008 13.8916 18.6523 14.4072 18.6523Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33440">
<rect width="21.5742" height="17.6836" fill="currentColor" transform="translate(3.09863 5)"/>
</clipPath>
</defs>
</svg>

`;

export const 1Lane = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
