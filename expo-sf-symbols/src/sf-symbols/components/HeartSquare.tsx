
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
<g clip-path="url(#clip0_2207_34370)">
<path d="M6.73218 24.6758H20.947C23.408 24.6758 24.6267 23.457 24.6267 21.0429V6.73438C24.6267 4.32031 23.408 3.10156 20.947 3.10156H6.73218C4.28296 3.10156 3.05249 4.30859 3.05249 6.73438V21.0429C3.05249 23.4687 4.28296 24.6758 6.73218 24.6758ZM6.75561 22.789C5.58374 22.789 4.93921 22.1679 4.93921 20.9492V6.82812C4.93921 5.60938 5.58374 4.98828 6.75561 4.98828H20.9236C22.0837 4.98828 22.74 5.60938 22.74 6.82812V20.9492C22.74 22.1679 22.0837 22.789 20.9236 22.789H6.75561Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.0447 8.70312C9.06421 8.70312 7.6228 10.2031 7.6228 12.2773C7.6228 15.3593 10.8689 18.1953 13.283 19.7187C13.4822 19.8359 13.74 20 13.8806 20C14.033 20 14.2673 19.8476 14.4431 19.7187C16.822 18.1601 20.0916 15.3593 20.0916 12.2773C20.0916 10.2031 18.6619 8.70312 16.6697 8.70312C15.4392 8.70312 14.4431 9.41797 13.8572 10.4844C13.283 9.41797 12.2986 8.70312 11.0447 8.70312Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34370">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.05249 3.07812)"/>
</clipPath>
</defs>
</svg>

`;

export const HeartSquare = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
