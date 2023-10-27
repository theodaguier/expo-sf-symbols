
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
<g clip-path="url(#clip0_2207_37762)">
<path d="M6.04407 15.8511C6.04407 16.2729 6.38391 16.6128 6.80579 16.6128H9.23157V23.855C9.23157 24.4761 9.72376 24.98 10.3448 24.98C10.9659 24.98 11.4698 24.4761 11.4698 23.855V16.6128H15.7823C19.8371 16.6128 22.4152 13.9175 22.4152 10.1558C22.4152 6.40576 19.8605 3.67529 15.8058 3.67529H10.3448C9.66516 3.67529 9.23157 4.13232 9.23157 4.83545V15.0893H6.80579C6.38391 15.0893 6.04407 15.4292 6.04407 15.8511ZM11.4698 14.6675V5.66748H15.255C18.4777 5.66748 20.1183 7.40185 20.1183 10.1558C20.1183 12.9214 18.4543 14.6675 15.255 14.6675H11.4698ZM6.04407 20.3862C6.04407 20.8081 6.38391 21.1597 6.80579 21.1597H17.1652C17.5871 21.1597 17.9269 20.8081 17.9269 20.3862C17.9269 19.9761 17.5871 19.6245 17.1652 19.6245H6.80579C6.38391 19.6245 6.04407 19.9761 6.04407 20.3862Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37762">
<rect width="16.3711" height="21.8555" fill="currentColor" transform="translate(6.04407 3.12451)"/>
</clipPath>
</defs>
</svg>

`;

export const Rublesign = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
