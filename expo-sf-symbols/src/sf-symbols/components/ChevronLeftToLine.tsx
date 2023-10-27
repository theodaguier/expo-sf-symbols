
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
<g clip-path="url(#clip0_2207_33516)">
<path d="M20.6065 23.334C20.6065 23.041 20.501 22.7832 20.2901 22.5722L11.0205 13.502V14.9433L20.2901 5.88476C20.501 5.68554 20.6065 5.41601 20.6065 5.12304C20.6065 4.50195 20.1377 4.04492 19.5401 4.04492C19.2236 4.04492 18.9893 4.16211 18.7666 4.36133L9.47363 13.4434C9.2627 13.6543 9.13379 13.9238 9.13379 14.2285C9.13379 14.5332 9.2627 14.791 9.48535 15.0137L18.7666 24.084C18.9775 24.3066 19.2236 24.4121 19.5283 24.4121C20.1377 24.4121 20.6065 23.9433 20.6065 23.334ZM9.16895 23.3926V5.08789C9.16895 4.47852 8.73535 4.04492 8.11426 4.04492C7.50488 4.04492 7.07129 4.47852 7.07129 5.08789V23.3926C7.07129 23.9902 7.50488 24.4121 8.11426 24.4121C8.73535 24.4121 9.16895 23.9902 9.16895 23.3926Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33516">
<rect width="13.5352" height="20.3789" fill="currentColor" transform="translate(7.07129 4.04492)"/>
</clipPath>
</defs>
</svg>

`;

export const ChevronLeftToLine = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
