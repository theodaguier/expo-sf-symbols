
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="29" height="32" viewBox="0 0 29 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_35158)">
<path d="M7.76782 25.8198H13.4631V5.44091H7.76782C5.3186 5.44091 4.08813 6.65967 4.08813 9.07373V22.1987C4.08813 24.6128 5.3186 25.8198 7.76782 25.8198ZM7.79125 23.9331C6.61938 23.9331 5.97485 23.312 5.97485 22.0933V9.1792C5.97485 7.96045 6.61938 7.32763 7.79125 7.32763H11.5764V23.9331H7.79125ZM21.01 25.8198C23.4709 25.8198 24.6897 24.6011 24.6897 22.1987V9.07373C24.6897 6.65967 23.4709 5.44091 21.01 5.44091H15.2912V25.8198H21.01ZM20.9865 23.9331H17.1779V7.32763H20.9865C22.135 7.32763 22.8029 7.96045 22.8029 9.1792V22.0933C22.8029 23.312 22.135 23.9331 20.9865 23.9331ZM14.3772 0.050293C13.8616 0.050293 13.4631 0.460449 13.4631 0.964355V5.44091H15.2912V0.964355C15.2912 0.460449 14.8928 0.050293 14.3772 0.050293ZM14.3772 31.2105C14.8928 31.2105 15.2912 30.812 15.2912 30.2964V25.8198H13.4631V30.2964C13.4631 30.812 13.8616 31.2105 14.3772 31.2105Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35158">
<rect width="20.6016" height="31.1836" fill="currentColor" transform="translate(4.08813 0.050293)"/>
</clipPath>
</defs>
</svg>

`;

export const ContactSensor = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
