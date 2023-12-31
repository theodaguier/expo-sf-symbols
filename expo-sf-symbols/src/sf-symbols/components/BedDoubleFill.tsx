
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="30" height="29" viewBox="0 0 30 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_35189)">
<path d="M0.0126953 22.8028C0.0126953 23.4122 0.399414 23.7989 1.00879 23.7989H1.71192C2.30958 23.7989 2.70801 23.4122 2.70801 22.8028V21.0685C2.83692 21.1036 3.22364 21.1271 3.50489 21.1271H26.2158C26.4971 21.1271 26.8838 21.1036 27.0127 21.0685V22.8028C27.0127 23.4122 27.4111 23.7989 28.0088 23.7989H28.7119C29.3213 23.7989 29.708 23.4122 29.708 22.8028V15.8185C29.708 13.5802 28.4658 12.3497 26.2275 12.3497H3.49317C1.25489 12.3497 0.0126953 13.5802 0.0126953 15.8185V22.8028Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M2.8252 10.6739H5.80176V8.98645C5.80176 7.89661 6.41114 7.29895 7.52442 7.29895H11.8955C12.9971 7.29895 13.6065 7.89661 13.6065 8.98645V10.6739H16.2666V8.98645C16.2666 7.89661 16.876 7.29895 18.0479 7.29895H22.1494C23.3213 7.29895 23.9307 7.89661 23.9307 8.98645V10.6739H26.9189V7.31067C26.9189 5.1427 25.7471 4.02942 23.6377 4.02942H6.09473C3.98536 4.02942 2.8252 5.1427 2.8252 7.31067V10.6739Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35189">
<rect width="29.6953" height="19.793" fill="currentColor" transform="translate(0.0126953 4.02942)"/>
</clipPath>
</defs>
</svg>

`;

export const BedDoubleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
