
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="29" height="30" viewBox="0 0 29 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_35358)">
<path d="M24.7693 10.5368C25.1677 10.5368 25.5076 10.2087 25.5076 9.81023V8.05242C25.5076 4.70085 23.2693 2.43914 19.906 2.43914H19.6599V0.962575C19.6599 0.0953876 19.0037 -0.103831 18.3474 0.388357L15.3943 2.55632C14.9021 2.9196 14.8904 3.34148 15.3943 3.70476L18.3474 5.86101C19.0037 6.34148 19.6599 6.14226 19.6599 5.29851V3.79851H19.8943C22.4373 3.79851 24.0427 5.55632 24.0427 8.05242V9.81023C24.0427 10.2087 24.3709 10.5368 24.7693 10.5368Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M5.03491 25.7475H16.6482C18.6521 25.7475 19.6599 24.7983 19.6599 22.7475V11.1577C19.6599 9.10693 18.6521 8.146 16.6482 8.146H5.03491C3.031 8.146 2.02319 9.10693 2.02319 11.1577V22.7475C2.02319 24.7983 3.031 25.7475 5.03491 25.7475ZM5.07007 23.8608C4.27319 23.8608 3.90991 23.5327 3.90991 22.7124V11.1811C3.90991 10.3608 4.27319 10.0327 5.07007 10.0327H16.613C17.4216 10.0327 17.7732 10.3608 17.7732 11.1811V22.7124C17.7732 23.5327 17.4216 23.8608 16.613 23.8608H5.07007Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35358">
<rect width="23.4844" height="29.6722" fill="currentColor" transform="translate(2.02319 0.124512)"/>
</clipPath>
</defs>
</svg>

`;

export const RotateLeft = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
