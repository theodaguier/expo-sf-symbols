
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
<g clip-path="url(#clip0_2207_35361)">
<path d="M2.75598 10.5368C3.15442 10.5368 3.49426 10.2087 3.49426 9.81023V8.05242C3.49426 5.55632 5.09973 3.79851 7.6427 3.79851H7.86536V5.29851C7.86536 6.14226 8.52161 6.34148 9.17786 5.86101L12.131 3.70476C12.6349 3.34148 12.6232 2.9196 12.131 2.55632L9.17786 0.388357C8.52161 -0.103831 7.86536 0.0953876 7.86536 0.962575V2.43914H7.63098C4.25598 2.43914 2.02942 4.70085 2.02942 8.05242V9.81023C2.02942 10.2087 2.35754 10.5368 2.75598 10.5368Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M22.4903 25.7475C24.4942 25.7475 25.5021 24.7983 25.5021 22.7475V11.1577C25.5021 9.10693 24.4942 8.146 22.4903 8.146H10.8771C8.87317 8.146 7.86536 9.10693 7.86536 11.1577V22.7475C7.86536 24.7983 8.87317 25.7475 10.8771 25.7475H22.4903Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35361">
<rect width="23.4727" height="29.6722" fill="currentColor" transform="translate(2.02942 0.124512)"/>
</clipPath>
</defs>
</svg>

`;

export const RotateRightFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
