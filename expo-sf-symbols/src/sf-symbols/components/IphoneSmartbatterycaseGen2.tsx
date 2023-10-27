
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
<g clip-path="url(#clip0_2207_35491)">
<path d="M9.47973 25.0059C8.48364 25.0059 7.93286 24.4785 7.93286 23.541V5.43554C7.93286 4.49804 8.48364 3.9707 9.47973 3.9707H17.6828C18.6672 3.9707 19.218 4.49804 19.218 5.43554V23.541C19.218 24.4785 18.6672 25.0059 17.6828 25.0059H9.47973Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.23364 26.8926H17.9172C19.8273 26.8926 21.1047 25.6738 21.1047 23.8457V5.13086C21.1047 3.30273 19.8273 2.08398 17.9172 2.08398H9.23364C7.32348 2.08398 6.04614 3.30273 6.04614 5.13086V23.8457C6.04614 25.6738 7.32348 26.8926 9.23364 26.8926ZM9.47973 25.0059C8.48364 25.0059 7.93286 24.4785 7.93286 23.541V5.43554C7.93286 4.49804 8.48364 3.9707 9.47973 3.9707H17.6828C18.6672 3.9707 19.218 4.49804 19.218 5.43554V23.541C19.218 24.4785 18.6672 25.0059 17.6828 25.0059H9.47973ZM11.7649 25.2754H15.3977V24.6074C15.3977 24.127 15.0813 23.7988 14.6008 23.7988H12.5735C12.0813 23.7988 11.7649 24.127 11.7649 24.6074V25.2754Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35491">
<rect width="15.0586" height="24.832" fill="currentColor" transform="translate(6.04614 2.08398)"/>
</clipPath>
</defs>
</svg>

`;

export const IphoneSmartbatterycaseGen2 = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
