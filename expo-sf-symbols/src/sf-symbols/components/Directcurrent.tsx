
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
<g clip-path="url(#clip0_2207_33541)">
<path d="M2.07129 11.0625C2.07129 11.6133 2.5166 12.0586 3.06738 12.0586H24.3838C24.9346 12.0586 25.3916 11.6133 25.3916 11.0625C25.3916 10.5117 24.9346 10.0547 24.3838 10.0547H3.06738C2.5166 10.0547 2.07129 10.5117 2.07129 11.0625ZM2.07129 16.7344C2.07129 17.2852 2.5166 17.7422 3.06738 17.7422H7.2041C7.75488 17.7422 8.2002 17.2852 8.2002 16.7344C8.2002 16.1836 7.75488 15.7383 7.2041 15.7383H3.06738C2.5166 15.7383 2.07129 16.1836 2.07129 16.7344ZM10.6611 16.7344C10.6611 17.2852 11.1182 17.7422 11.6689 17.7422H15.7822C16.333 17.7422 16.7783 17.2852 16.7783 16.7344C16.7783 16.1836 16.333 15.7383 15.7822 15.7383H11.6689C11.1182 15.7383 10.6611 16.1836 10.6611 16.7344ZM19.2393 16.7344C19.2393 17.2852 19.6846 17.7422 20.2354 17.7422H24.2901C24.8408 17.7422 25.2979 17.2852 25.2979 16.7344C25.2979 16.1836 24.8408 15.7383 24.2901 15.7383H20.2354C19.6846 15.7383 19.2393 16.1836 19.2393 16.7344Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33541">
<rect width="23.3203" height="7.69922" fill="currentColor" transform="translate(2.07129 10.0547)"/>
</clipPath>
</defs>
</svg>

`;

export const Directcurrent = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
