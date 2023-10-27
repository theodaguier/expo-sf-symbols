
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="28" height="33" viewBox="0 0 28 33" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_34285)">
<path d="M19.3186 5.39502C19.3186 2.9458 18.1116 1.71533 15.6975 1.71533H4.63501C2.22095 1.71533 1.0022 2.9458 1.0022 5.39502V21.4028C1.0022 23.8521 2.22095 25.0825 4.63501 25.0825H15.6975C18.1116 25.0825 19.3186 23.8521 19.3186 21.4028V5.39502Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M26.3499 11.1841C26.3499 7.84424 24.428 5.91064 21.1116 5.91064H10.0608C6.74439 5.91064 4.83423 7.84424 4.83423 11.1841V27.1919C4.83423 30.52 6.75611 32.4771 10.0608 32.4771H21.1116C24.4163 32.4771 26.3499 30.52 26.3499 27.1919V11.1841Z" fill="currentColor"/>
<path d="M24.7444 11.1841C24.7444 8.73486 23.5374 7.50439 21.1116 7.50439H10.0608C7.63501 7.50439 6.42798 8.73486 6.42798 11.1841V27.1919C6.42798 29.6411 7.64673 30.8716 10.0608 30.8716H21.1116C23.5256 30.8716 24.7444 29.6411 24.7444 27.1919V11.1841Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34285">
<rect width="25.3477" height="32.3555" fill="currentColor" transform="translate(1.0022 0.121582)"/>
</clipPath>
</defs>
</svg>

`;

export const RectanglePortraitOnRectanglePortraitFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
