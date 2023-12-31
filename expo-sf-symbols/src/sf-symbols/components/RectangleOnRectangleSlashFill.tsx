
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="31" height="31" viewBox="0 0 31 31" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_34233)">
<path d="M3.80603 21.7739H19.8138C22.2631 21.7739 23.4935 20.5552 23.4935 18.1411V7.09034C23.4935 4.67627 22.2631 3.45752 19.8138 3.45752H3.80603C1.35681 3.45752 0.126343 4.67627 0.126343 7.09034V18.1411C0.126343 20.5669 1.35681 21.7739 3.80603 21.7739Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.59508 28.8052H25.6029C28.931 28.8052 30.8881 26.8716 30.8881 23.5669V12.5161C30.8881 9.21143 28.931 7.28955 25.6029 7.28955H9.59508C6.25524 7.28955 4.32166 9.21143 4.32166 12.5161V23.5669C4.32166 26.8833 6.25524 28.8052 9.59508 28.8052Z" fill="currentColor"/>
<path d="M9.59508 27.1997H25.6029C28.0521 27.1997 29.2826 25.981 29.2826 23.5669V12.5161C29.2826 10.1021 28.0521 8.8833 25.6029 8.8833H9.59508C7.14586 8.8833 5.91541 10.1021 5.91541 12.5161V23.5669C5.91541 25.9927 7.14586 27.1997 9.59508 27.1997Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M26.5638 29.8833C27.4545 30.7739 28.9076 30.7739 29.7865 29.8599C30.6537 28.9693 30.6537 27.563 29.7748 26.6724L3.92323 0.809111C3.0326 -0.0697947 1.5912 -0.0815137 0.700569 0.797392C-0.178337 1.6763 -0.178337 3.14115 0.68885 4.02005L26.5638 29.8833Z" fill="currentColor"/>
<path d="M27.5248 28.9224C27.8881 29.2739 28.4623 29.2739 28.8021 28.9224C29.1537 28.5591 29.1537 27.9966 28.8021 27.645L2.95056 1.77004C2.599 1.4302 2.02478 1.41848 1.6615 1.77004C1.32166 2.12161 1.32166 2.70754 1.6615 3.04739L27.5248 28.9224Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34233">
<rect width="30.8482" height="30.4278" fill="currentColor" transform="translate(0.039917 0.120605)"/>
</clipPath>
</defs>
</svg>

`;

export const RectangleOnRectangleSlashFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
