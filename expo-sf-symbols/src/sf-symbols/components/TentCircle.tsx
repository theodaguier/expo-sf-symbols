
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
<g clip-path="url(#clip0_2207_35235)">
<path d="M13.9719 26.0478C20.511 26.0478 25.925 20.6221 25.925 14.0947C25.925 7.55566 20.4993 2.1416 13.9602 2.1416C7.43286 2.1416 2.0188 7.55566 2.0188 14.0947C2.0188 20.6221 7.44458 26.0478 13.9719 26.0478ZM13.9719 24.0557C8.44068 24.0557 4.02271 19.626 4.02271 14.0947C4.02271 8.56348 8.42896 4.13379 13.9602 4.13379C19.4915 4.13379 23.9329 8.56348 23.9329 14.0947C23.9329 19.626 19.5032 24.0557 13.9719 24.0557Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.27661 19.5791H19.6672C20.4641 19.5791 20.675 18.8525 20.3821 18.2666L14.968 7.3916C14.511 6.48926 13.4329 6.51269 13.011 7.36816L7.57349 18.2666C7.28052 18.8525 7.49146 19.5791 8.27661 19.5791ZM10.7844 18.5713L13.5735 12.7002C13.6555 12.5127 13.8196 12.4189 13.9719 12.4189C14.136 12.4189 14.2883 12.5127 14.3704 12.7002L17.1594 18.5713H14.9915L13.9719 14.083L12.9524 18.5713H10.7844Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35235">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.0188 2.1416)"/>
</clipPath>
</defs>
</svg>

`;

export const TentCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
