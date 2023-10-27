
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
<g clip-path="url(#clip0_2207_37418)">
<path d="M4.18774 4.01685C3.56665 4.01685 3.2854 4.41528 3.19165 4.88403C3.10962 5.24732 3.08618 5.82154 3.08618 6.51294C3.08618 12.1848 5.35962 14.6223 10.9143 14.6223H19.1057L21.9768 14.4582L18.0276 18.0559L15.426 20.7043C15.2385 20.9035 15.1448 21.173 15.1448 21.4543C15.1448 22.0402 15.5901 22.4621 16.176 22.4621C16.4456 22.4621 16.7034 22.3566 16.9612 22.1106L24.719 14.3645C24.9651 14.1301 25.0823 13.8606 25.0823 13.5676C25.0823 13.2864 24.9651 13.0051 24.719 12.7825L16.9378 5.00122C16.7034 4.77856 16.4456 4.68481 16.176 4.68481C15.5901 4.68481 15.1448 5.10669 15.1448 5.69263C15.1448 5.97388 15.2503 6.24341 15.426 6.43091L18.0276 9.07935L21.9885 12.7004L19.1057 12.5247H11.0198C6.71899 12.5247 5.20727 10.7551 5.20727 6.40747C5.20727 5.84497 5.24243 5.46997 5.24243 5.0481C5.24243 4.43872 4.79712 4.01685 4.18774 4.01685Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37418">
<rect width="21.9961" height="19.6992" fill="currentColor" transform="translate(3.08618 4.01685)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowTurnDownRight = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
