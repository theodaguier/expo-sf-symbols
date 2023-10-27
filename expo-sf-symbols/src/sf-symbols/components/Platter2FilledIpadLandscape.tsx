
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
<g clip-path="url(#clip0_2207_35518)">
<path d="M3.72168 24.7081H23.9951C26.4561 24.7081 27.6748 23.4893 27.6748 21.0752V6.7666C27.6748 4.35254 26.4561 3.13379 23.9951 3.13379H3.72168C1.27246 3.13379 0.0419922 4.34082 0.0419922 6.7666V21.0752C0.0419922 23.501 1.27246 24.7081 3.72168 24.7081ZM3.74511 22.8213C2.57324 22.8213 1.92871 22.2002 1.92871 20.9815V6.86035C1.92871 5.6416 2.57324 5.02051 3.74511 5.02051H23.9717C25.1318 5.02051 25.7881 5.6416 25.7881 6.86035V20.9815C25.7881 22.2002 25.1318 22.8213 23.9717 22.8213H3.74511Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M5.19824 16.7042H11.667C12.2881 16.7042 12.71 16.2823 12.71 15.6377V12.2041C12.71 11.5479 12.2881 11.1377 11.667 11.1377H5.19824C4.56543 11.1377 4.15527 11.5479 4.15527 12.2041V15.6377C4.15527 16.2823 4.56543 16.7042 5.19824 16.7042ZM15.8154 16.7042H22.2959C22.917 16.7042 23.3389 16.2823 23.3389 15.6377V12.2041C23.3389 11.5479 22.917 11.1377 22.2959 11.1377H15.8154C15.1943 11.1377 14.7725 11.5479 14.7725 12.2041V15.6377C14.7725 16.2823 15.1943 16.7042 15.8154 16.7042Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35518">
<rect width="27.6328" height="21.5977" fill="currentColor" transform="translate(0.0419922 3.11035)"/>
</clipPath>
</defs>
</svg>

`;

export const Platter2FilledIpadLandscape = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
