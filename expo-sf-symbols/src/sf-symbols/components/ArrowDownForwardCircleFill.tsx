
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
<g clip-path="url(#clip0_2207_37393)">
<path d="M13.9992 25.9204C20.5383 25.9204 25.9523 20.4947 25.9523 13.9673C25.9523 7.42822 20.5266 2.01416 13.9875 2.01416C7.4602 2.01416 2.04614 7.42822 2.04614 13.9673C2.04614 20.4947 7.47192 25.9204 13.9992 25.9204Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M17.7844 10.9673C18.3117 10.9673 18.675 11.3657 18.675 11.9399V17.6353C18.675 18.3501 18.2766 18.6314 17.6555 18.6314H11.9368C11.3626 18.6314 10.9993 18.2798 10.9993 17.7408C10.9993 17.2134 11.3743 16.8619 11.9602 16.8619H14.1399L15.9328 17.0494L14.0461 15.2798L9.60474 10.8618C9.42896 10.686 9.31177 10.4399 9.31177 10.2056C9.31177 9.65478 9.67506 9.30322 10.2024 9.30322C10.4954 9.30322 10.718 9.40869 10.9055 9.58447L15.3234 14.0142L17.0695 15.8775L16.8938 13.9908V11.9165C16.8938 11.3306 17.2453 10.9673 17.7844 10.9673Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37393">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.04614 2.01416)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowDownForwardCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
