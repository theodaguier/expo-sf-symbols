
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
<g clip-path="url(#clip0_2207_35898)">
<path d="M0.0483398 14.8477C0.0483398 19.7813 2.93115 22.3711 7.94678 22.3711H25.7475C27.5522 22.3711 29.0874 22.5469 30.5171 22.9102C31.7475 23.2149 32.7202 22.711 32.7202 21.4571V15.8438C32.7202 15.0469 32.146 14.4609 31.3374 14.4609H28.3022C27.3295 14.4609 26.8491 14.0391 26.9428 13.125L27.2944 9.69141C27.5874 6.83204 25.9585 5.09766 22.771 5.09766C19.0795 5.10938 12.271 5.25 8.38037 5.70703C3.04834 6.36328 0.0483398 9.6211 0.0483398 14.8477ZM1.93506 14.8477C1.93506 10.7109 4.29053 8.09766 8.54443 7.60547C12.3881 7.17188 19.0913 6.98438 22.771 6.98438C24.7983 6.98438 25.6186 7.80469 25.4311 9.48047L24.5053 17.8008C24.2827 19.7696 23.4389 20.4844 21.2827 20.4844H7.91162C4.1499 20.4844 1.93506 18.5391 1.93506 14.8477Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M1.93506 14.8477C1.93506 10.7109 4.29053 8.09766 8.54443 7.60547C12.3881 7.17188 19.0913 6.98438 22.771 6.98438C24.7983 6.98438 25.6186 7.80469 25.4311 9.48047L24.5053 17.8008C24.2827 19.7696 23.4389 20.4844 21.2827 20.4844H7.91162C4.1499 20.4844 1.93506 18.5391 1.93506 14.8477Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_35898">
<rect width="32.6719" height="18.1523" fill="currentColor" transform="translate(0.0483398 5.09766)"/>
</clipPath>
</defs>
</svg>

`;

export const MirrorSideLeft = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
