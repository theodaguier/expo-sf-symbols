
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
<g clip-path="url(#clip0_2207_33476)">
<path d="M13.9677 25.9863C20.5068 25.9863 25.9208 20.5606 25.9208 14.0332C25.9208 7.49414 20.4951 2.08008 13.956 2.08008C7.42871 2.08008 2.01465 7.49414 2.01465 14.0332C2.01465 20.5606 7.44043 25.9863 13.9677 25.9863Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.9678 14.959C10.335 14.959 7.47559 13.6465 7.47559 11.9824C7.47559 10.3535 10.335 9.07617 13.9678 9.07617C17.6005 9.07617 20.4599 10.3535 20.4599 11.9824C20.4599 13.6465 17.6005 14.959 13.9678 14.959ZM13.9678 18.9785C10.2998 18.9785 7.47559 17.3379 7.47559 15.3223V13.8692C8.74121 15.0996 11.249 15.8262 13.9678 15.8262C16.6982 15.8262 19.206 15.0996 20.4599 13.8692V15.3223C20.4599 17.3379 17.6241 18.9785 13.9678 18.9785Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_33476">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.01465 2.08008)"/>
</clipPath>
</defs>
</svg>

`;

export const HockeyPuckCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
