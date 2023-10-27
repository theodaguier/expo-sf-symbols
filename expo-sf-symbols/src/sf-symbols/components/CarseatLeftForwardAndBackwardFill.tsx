
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="29" height="34" viewBox="0 0 29 34" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_36012)">
<path d="M1.25117 19.8686C2.28243 23.6889 3.34883 24.8608 5.7629 24.8608H19.4387C21.1731 24.8608 22.3332 23.9116 22.7668 22.1538L27.1731 4.271C27.8879 1.36475 26.4348 0.0405273 24.7473 0.0405273C22.509 0.0405273 20.0715 2.43115 21.4426 6.29834L21.7824 4.86865C18.2551 6.7085 16.6496 11.0093 17.2942 16.2358L17.716 15.6616C15.302 15.146 12.1496 14.8413 9.11446 14.8413C2.84493 14.8413 0.290236 16.3647 1.25117 19.8686Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M15.6184 33.0053C15.6184 33.6382 16.134 33.9077 16.6848 33.5678L20.8449 31.0366C21.3723 30.7085 21.3606 30.0874 20.8449 29.771L16.6731 27.2163C16.1223 26.8764 15.6184 27.1694 15.6184 27.7905V33.0053Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.53638 33.0053V27.7905C9.53638 27.1694 9.03248 26.8764 8.4817 27.2163L4.32154 29.771C3.7942 30.0874 3.78248 30.7085 4.32154 31.0366L8.4817 33.5678C9.03248 33.9077 9.53638 33.6382 9.53638 33.0053Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36012">
<rect width="26.3049" height="33.8789" fill="currentColor" transform="translate(1.05469 0.0405273)"/>
</clipPath>
</defs>
</svg>

`;

export const CarseatLeftForwardAndBackwardFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
