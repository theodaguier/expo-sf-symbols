
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
<g clip-path="url(#clip0_2207_34146)">
<path d="M21.335 5.02539C20.1397 3.83008 18.4522 3.64258 16.4483 3.64258H7.31934C5.35059 3.64258 3.66309 3.83008 2.46777 5.02539C1.27246 6.22071 1.09668 7.89649 1.09668 9.86524V18.9942C1.09668 20.9981 1.27246 22.6739 2.46777 23.8692C3.66309 25.0645 5.35059 25.252 7.34277 25.252H16.4483C18.4522 25.252 20.1397 25.0645 21.335 23.8692C22.5303 22.6739 22.7061 20.9981 22.7061 18.9942V9.88868C22.7061 7.88477 22.5303 6.22071 21.335 5.02539Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M20.6436 11.3418C23.7373 11.3418 26.3037 8.78711 26.3037 5.66993C26.3037 2.56446 23.7373 0.00976562 20.6436 0.00976562C17.5264 0.00976562 14.9834 2.56446 14.9834 5.66993C14.9834 8.78711 17.5264 11.3418 20.6436 11.3418Z" fill="currentColor"/>
<path d="M20.6435 9.73632C22.8583 9.73632 24.7099 7.90821 24.7099 5.66992C24.7099 3.44335 22.8583 1.61523 20.6435 1.61523C18.4052 1.61523 16.5771 3.44335 16.5771 5.66992C16.5771 7.90821 18.4052 9.73632 20.6435 9.73632Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34146">
<rect width="25.207" height="28.8867" fill="currentColor" transform="translate(1.09668 0.00976562)"/>
</clipPath>
</defs>
</svg>

`;

export const AppBadgeFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
