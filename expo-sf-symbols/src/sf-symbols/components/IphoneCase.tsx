
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
<g clip-path="url(#clip0_2207_35519)">
<path d="M9.23792 26.8911H17.9215C19.8316 26.8911 21.109 25.6723 21.109 23.8442V5.1294C21.109 3.30127 19.8316 2.08252 17.9215 2.08252H9.23792C7.32776 2.08252 6.05042 3.30127 6.05042 5.1294V23.8442C6.05042 25.6723 7.32776 26.8911 9.23792 26.8911ZM9.37854 9.30127C8.52308 9.30127 8.00745 8.80908 8.00745 8.01221V5.3169C8.00745 4.52002 8.52308 4.02783 9.37854 4.02783H11.8981C12.7535 4.02783 13.2692 4.52002 13.2692 5.3169V8.01221C13.2692 8.80908 12.7535 9.30127 11.8981 9.30127H9.37854Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35519">
<rect width="15.0586" height="24.832" fill="currentColor" transform="translate(6.05042 2.08252)"/>
</clipPath>
</defs>
</svg>

`;

export const IphoneCase = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
