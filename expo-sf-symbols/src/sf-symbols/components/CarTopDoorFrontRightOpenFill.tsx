
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="28" height="31" viewBox="0 0 28 31" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_36106)">
<path d="M11.4417 30.2971C17.3597 30.2971 19.8792 28.9963 19.8792 25.8088V5.46509C19.8792 2.04322 16.7737 0.0393066 11.4417 0.0393066C6.12134 0.0393066 3.00415 2.04322 3.00415 5.46509V25.8088C3.00415 28.9963 5.5354 30.2971 11.4417 30.2971ZM11.4534 12.5198C10.3049 12.5198 8.54712 12.6018 7.92603 12.6018C7.02368 12.6018 6.62524 12.2502 6.53149 11.3127L6.34399 9.03931C6.17993 7.29322 7.4104 6.59009 11.4534 6.59009C15.4846 6.59009 16.715 7.29322 16.5511 9.03931L16.3636 11.3127C16.2698 12.2502 15.883 12.6018 14.969 12.6018C14.3597 12.6018 12.5315 12.5198 11.4534 12.5198ZM11.4534 25.4221C7.37524 25.4221 6.13306 24.8127 6.39087 23.0315L6.54321 21.9299C6.74243 20.4885 7.94946 19.9963 11.4534 19.9963C14.9455 19.9963 16.1526 20.4885 16.3519 21.9299L16.5042 23.0315C16.762 24.8127 15.5198 25.4221 11.4534 25.4221ZM19.0003 8.20728V10.9612L23.3479 15.2971C23.7346 15.6838 24.344 15.6721 24.7308 15.2971C25.1058 14.9104 25.1058 14.2893 24.7308 13.9026L19.0003 8.20728Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36106">
<rect width="22.0078" height="30.2695" fill="currentColor" transform="translate(3.00415 0.0393066)"/>
</clipPath>
</defs>
</svg>

`;

export const CarTopDoorFrontRightOpenFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
