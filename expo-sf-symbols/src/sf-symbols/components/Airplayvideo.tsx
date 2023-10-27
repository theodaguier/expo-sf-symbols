
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
<g clip-path="url(#clip0_2207_35712)">
<path d="M24.4126 2.59033H3.07276C1.20948 2.59033 0.0610352 3.73877 0.0610352 5.60205V17.4145C0.0610352 19.2778 1.20948 20.4263 3.07276 20.4263H24.4126C26.2758 20.4263 27.4243 19.2778 27.4243 17.4145V5.60205C27.4243 3.73877 26.2758 2.59033 24.4126 2.59033ZM1.94776 17.3911V5.63721C1.94776 4.91064 2.38135 4.47705 3.10792 4.47705H24.3774C25.104 4.47705 25.5376 4.91064 25.5376 5.63721V17.3911C25.5376 18.106 25.104 18.5395 24.3774 18.5395H3.10792C2.38135 18.5395 1.94776 18.106 1.94776 17.3911Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M1.94775 17.3911V5.63721C1.94775 4.91064 2.38134 4.47705 3.10791 4.47705H24.3774C25.104 4.47705 25.5376 4.91064 25.5376 5.63721V17.3911C25.5376 18.106 25.104 18.5395 24.3774 18.5395H3.10791C2.38134 18.5395 1.94775 18.106 1.94775 17.3911Z" fill="currentColor"/>
<path d="M20.9087 26.4028C22.8305 26.4028 23.7915 24.1997 22.5258 22.7817L15.4477 14.7778C14.5454 13.7583 12.9516 13.7583 12.0493 14.7778L4.97115 22.7817C3.70552 24.1997 4.66646 26.4028 6.58833 26.4028H20.9087Z" fill="currentColor"/>
<path d="M20.9087 24.7974C21.4594 24.7974 21.6704 24.2349 21.3188 23.8364L14.2524 15.8325C13.9829 15.5278 13.5141 15.5278 13.2446 15.8325L6.17818 23.8364C5.82661 24.2349 6.03755 24.7974 6.58833 24.7974H20.9087Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35712">
<rect width="27.3633" height="25.3945" fill="currentColor" transform="translate(0.0610352 1.0083)"/>
</clipPath>
</defs>
</svg>

`;

export const Airplayvideo = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
