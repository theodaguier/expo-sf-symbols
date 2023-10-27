
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="28" height="29" viewBox="0 0 28 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_37847)">
<path d="M6.0022 4.70507C6.0022 5.31445 6.45923 5.71289 7.06861 5.71289H12.9397V23.8887C12.9397 24.5098 13.4436 25.002 14.0647 25.002C14.6858 25.002 15.178 24.5098 15.178 23.8887V5.71289H21.0608C21.6584 5.71289 22.1272 5.31445 22.1272 4.70507C22.1272 4.0957 21.6584 3.69727 21.0608 3.69727H7.06861C6.45923 3.69727 6.0022 4.0957 6.0022 4.70507ZM9.03736 14.584C8.15845 14.9473 8.72095 16.3535 9.65845 15.9785L19.092 12.0645C19.9006 11.7363 19.5022 10.248 18.3889 10.7168L9.03736 14.584ZM9.03736 19.1895C8.15845 19.5527 8.72095 20.9707 9.65845 20.5957L19.092 16.6699C19.9006 16.3418 19.5022 14.8653 18.3889 15.3223L9.03736 19.1895Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37847">
<rect width="16.125" height="21.8555" fill="currentColor" transform="translate(6.0022 3.14648)"/>
</clipPath>
</defs>
</svg>

`;

export const Tugriksign = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
