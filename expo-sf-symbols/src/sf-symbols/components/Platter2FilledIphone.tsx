
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
<g clip-path="url(#clip0_2207_35487)">
<path d="M9.23157 26.919H17.9269C19.8371 26.919 21.1144 25.7002 21.1144 23.8721V5.15723C21.1144 3.3291 19.8371 2.11035 17.9269 2.11035H9.23157C7.32141 2.11035 6.04407 3.3291 6.04407 5.15723V23.8721C6.04407 25.7002 7.32141 26.919 9.23157 26.919ZM9.47766 25.0323C8.48157 25.0323 7.93079 24.5049 7.93079 23.5674V5.46191C7.93079 4.52441 8.48157 3.99707 9.47766 3.99707H17.6925C18.6769 3.99707 19.2277 4.52441 19.2277 5.46191V23.5674C19.2277 24.5049 18.6769 25.0323 17.6925 25.0323H9.47766Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.4738 12.0596H16.6964C17.3175 12.0596 17.7394 11.6377 17.7394 10.9932V8.80176C17.7394 8.15723 17.3175 7.73535 16.6964 7.73535H10.4738C9.84095 7.73535 9.43079 8.15723 9.43079 8.80176V10.9932C9.43079 11.6377 9.84095 12.0596 10.4738 12.0596ZM10.4738 21.2588H16.6964C17.3175 21.2588 17.7394 20.8487 17.7394 20.1924V18.0127C17.7394 17.3565 17.3175 16.9463 16.6964 16.9463H10.4738C9.84095 16.9463 9.43079 17.3565 9.43079 18.0127V20.1924C9.43079 20.8487 9.84095 21.2588 10.4738 21.2588Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35487">
<rect width="15.0703" height="24.832" fill="currentColor" transform="translate(6.04407 2.11035)"/>
</clipPath>
</defs>
</svg>

`;

export const Platter2FilledIphone = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
