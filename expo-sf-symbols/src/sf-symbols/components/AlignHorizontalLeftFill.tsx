
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
<g clip-path="url(#clip0_2207_36613)">
<path d="M7.60241 12.4668H16.4501C18.1961 12.4668 19.1337 11.541 19.1337 9.83007V5.75195C19.1337 4.04101 18.1961 3.11523 16.4501 3.11523H7.60241C5.86803 3.11523 4.91882 4.04101 4.91882 5.75195V9.83007C4.91882 11.541 5.86803 12.4668 7.60241 12.4668ZM7.60241 24.0801H24.7469C26.493 24.0801 27.4305 23.1543 27.4305 21.4434V17.3653C27.4305 15.666 26.493 14.7286 24.7469 14.7286H7.60241C5.86803 14.7286 4.91882 15.666 4.91882 17.3653V21.4434C4.91882 23.1543 5.86803 24.0801 7.60241 24.0801Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M1.89539 27.1739C2.36414 27.1739 2.76258 26.8223 2.76258 26.3653V0.81836C2.76258 0.361328 2.36414 0.00976562 1.89539 0.00976562C1.43835 0.00976562 1.03992 0.361328 1.03992 0.81836V26.3653C1.03992 26.8223 1.43835 27.1739 1.89539 27.1739Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36613">
<rect width="26.3906" height="27.1992" fill="currentColor" transform="translate(1.03992 0.00976562)"/>
</clipPath>
</defs>
</svg>

`;

export const AlignHorizontalLeftFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
