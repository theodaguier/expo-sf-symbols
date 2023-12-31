
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_37950)">
<path d="M6.68189 24.6033H20.8967C23.3577 24.6033 24.5764 23.3845 24.5764 20.9704V6.66187C24.5764 4.24781 23.3577 3.02905 20.8967 3.02905H6.68189C4.23267 3.02905 3.0022 4.23609 3.0022 6.66187V20.9704C3.0022 23.3962 4.23267 24.6033 6.68189 24.6033Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.1897 16.0368C9.1897 15.779 9.24829 15.5212 9.38892 15.2751C10.6897 13.0017 11.8616 10.9275 13.1506 8.66577C13.3733 8.26733 13.6311 8.07983 14.0178 8.07983C14.5686 8.07983 14.8733 8.48999 14.8733 8.97045C14.8733 9.15795 14.803 9.34545 14.7092 9.54467C13.5842 11.6072 12.5413 13.4118 11.4514 15.4392H14.803V12.8376C14.803 12.1931 15.1311 11.8181 15.6819 11.8181C16.2561 11.8181 16.5842 12.1814 16.5842 12.8376V15.4392H17.3928C17.9319 15.4392 18.26 15.7439 18.26 16.2126C18.26 16.7165 17.9319 17.0447 17.3928 17.0447H16.5842V18.2868C16.5842 18.9431 16.2561 19.3064 15.6819 19.3064C15.1311 19.3064 14.803 18.9314 14.803 18.2868V17.0447H10.2561C9.59986 17.0447 9.1897 16.6462 9.1897 16.0368Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37950">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.0022 3.00562)"/>
</clipPath>
</defs>
</svg>

`;

export const 4AltSquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
