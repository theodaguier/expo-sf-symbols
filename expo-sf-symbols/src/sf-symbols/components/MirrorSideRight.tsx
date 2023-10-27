
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="33" height="29" viewBox="0 0 33 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_35899)">
<path d="M32.7266 14.8477C32.7266 9.6211 29.7149 6.36328 24.3945 5.70703C20.4922 5.25 13.6836 5.10938 10.0039 5.09766C6.81641 5.09766 5.1875 6.83204 5.46875 9.69141L5.82031 13.125C5.92578 14.0391 5.44531 14.4609 4.46094 14.4609H1.4375C0.628906 14.4609 0.0546875 15.0469 0.0546875 15.8438V21.4571C0.0546875 22.711 1.01563 23.2149 2.2461 22.9102C3.6875 22.5469 5.22266 22.3711 7.02735 22.3711H24.8281C29.7969 22.3711 32.7266 19.7344 32.7266 14.8477ZM30.8399 14.8477C30.8399 18.5039 28.5899 20.4844 24.8633 20.4844H11.4805C9.33594 20.4844 8.49219 19.7696 8.26953 17.8008L7.33203 9.48047C7.15625 7.80469 7.96485 6.98438 10.0039 6.98438C13.6836 6.98438 20.3867 7.17188 24.2305 7.60547C28.4844 8.09766 30.8399 10.7109 30.8399 14.8477Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M30.8399 14.8477C30.8399 18.5039 28.5899 20.4844 24.8633 20.4844H11.4805C9.336 20.4844 8.49225 19.7696 8.26959 17.8008L7.33209 9.48047C7.15631 7.80469 7.9649 6.98438 10.004 6.98438C13.6836 6.98438 20.3867 7.17188 24.2305 7.60547C28.4844 8.09766 30.8399 10.7109 30.8399 14.8477Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_35899">
<rect width="32.6719" height="18.1523" fill="currentColor" transform="translate(0.0546875 5.09766)"/>
</clipPath>
</defs>
</svg>

`;

export const MirrorSideRight = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
