
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="28" height="29" viewBox="0 0 28 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_35005)">
<path d="M8.64111 27.0625H18.5552C20.9692 27.0625 22.188 25.8437 22.188 23.3945V4.82031C22.188 2.38281 20.9692 1.14062 18.5552 1.14062H8.64111C6.21533 1.14062 5.0083 2.38281 5.0083 4.82031V23.3945C5.0083 25.8437 6.21533 27.0625 8.64111 27.0625Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.40283 11.957C8.64111 11.957 8.32471 11.6523 8.32471 10.9023V5.40624C8.32471 4.64453 8.64111 4.35156 9.40283 4.35156H17.7349C18.5083 4.35156 18.8247 4.64453 18.8247 5.40624V10.9023C18.8247 11.6523 18.5083 11.957 17.7349 11.957H9.40283ZM9.40283 23.8633C8.64111 23.8633 8.32471 23.5703 8.32471 22.8086V17.3125C8.32471 16.5625 8.64111 16.2578 9.40283 16.2578H17.7349C18.5083 16.2578 18.8247 16.5625 18.8247 17.3125V22.8086C18.8247 23.5703 18.5083 23.8633 17.7349 23.8633H9.40283Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_35005">
<rect width="17.1797" height="25.9336" fill="currentColor" transform="translate(5.0083 1.14062)"/>
</clipPath>
</defs>
</svg>

`;

export const SwitchProgrammableFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
