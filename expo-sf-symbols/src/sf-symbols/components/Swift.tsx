
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
<g clip-path="url(#clip0_2207_33956)">
<path d="M1.09863 17.0449C3.06738 20.2559 8.21191 25.2012 15.1377 25.2012C19.5556 25.2012 20.7627 23.1504 23.3291 23.1504C25.4619 23.1504 26.3056 24.5801 26.6338 25.1426C26.7275 25.3184 26.8798 25.4356 26.9853 25.0957C27.0439 24.8496 27.1025 24.5215 27.1025 24.1231C27.1025 22.9981 26.7627 20.8535 24.8877 18.4981C25.2978 17.3379 25.3447 16.0606 25.3447 15.3106C25.3447 11.9004 23.4228 5.9707 17.0595 2.13867C18.3838 4.01367 20.165 6.84961 20.165 10.7988C20.165 12.2285 19.7666 13.7989 19.4502 14.584C15.9931 12.5801 9.38379 7.07226 6.73535 4.25976C8.85644 7.51758 11.3759 10.4707 14.165 13.5645C10.415 11.1973 6.92285 8.53711 3.66504 5.61914C6.78222 10.1543 10.7314 14.6192 15.9345 18.8262C14.4463 19.6465 12.9111 20.3028 10.2979 20.3028C7.11035 20.3028 3.21972 18.7559 1.09863 17.0449Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33956">
<rect width="26.0039" height="23.332" fill="currentColor" transform="translate(1.09863 2.13867)"/>
</clipPath>
</defs>
</svg>

`;

export const Swift = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
