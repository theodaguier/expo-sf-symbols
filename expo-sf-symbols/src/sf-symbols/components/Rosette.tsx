
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
<g clip-path="url(#clip0_2207_33499)">
<path d="M5.0127 10.4878C5.0127 13.2417 6.23145 15.7378 8.15332 17.4487L8.16504 26.2964C8.16504 26.9995 8.52832 27.2925 9.00879 27.2925C9.41895 27.2925 9.72364 27.0581 10.04 26.7417L13.8486 22.9448C14.0596 22.7573 14.2002 22.687 14.3408 22.687C14.4814 22.687 14.6338 22.7573 14.833 22.9448L18.6416 26.7417C18.9697 27.0698 19.2861 27.2925 19.6729 27.2925C20.1768 27.2925 20.5283 26.9995 20.5283 26.2964V17.4136C22.4268 15.7143 23.6338 13.23 23.6455 10.4878C23.6572 5.33154 19.4385 1.12451 14.3291 1.12451C9.20801 1.12451 5.0127 5.33154 5.0127 10.4878ZM6.92286 10.4878C6.92286 6.32763 10.1689 2.98779 14.3408 2.98779C18.501 2.98779 21.7471 6.32763 21.7588 10.4878C21.7705 14.6362 18.501 17.9761 14.3408 17.9643C10.1689 17.9526 6.92286 14.6362 6.92286 10.4878Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33499">
<rect width="18.6328" height="26.3789" fill="currentColor" transform="translate(5.0127 1.12451)"/>
</clipPath>
</defs>
</svg>

`;

export const Rosette = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
