
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="30" height="29" viewBox="0 0 30 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_34534)">
<path d="M23.1961 23.4751C26.7352 23.4751 29.5008 20.8852 29.5008 17.6626C29.5008 15.2017 28.0829 13.0689 25.7977 12.1079C25.8211 6.88135 22.0594 3.10791 17.2665 3.10791C14.0907 3.10791 11.829 4.80713 10.4227 6.85791C7.53992 6.01416 4.3993 8.20557 4.3407 11.4868C1.69226 11.9087 0.039917 14.2759 0.039917 17.1352C0.039917 20.5806 3.05164 23.4751 7.05945 23.4751H23.1961Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.99304 21.4009C9.8368 19.5024 12.0516 17.3931 15.5907 17.3931C19.1297 17.3931 21.3446 19.5024 22.1883 21.4009H8.99304ZM15.5907 15.9399C13.8211 15.9165 12.4149 14.3345 12.4032 12.4477C12.4032 10.5845 13.8211 9.04932 15.5907 9.04932C17.3485 9.04932 18.7782 10.5845 18.7782 12.4477C18.7782 14.3345 17.3485 15.9634 15.5907 15.9399Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_34534">
<rect width="29.4609" height="22.2773" fill="currentColor" transform="translate(0.039917 3.10791)"/>
</clipPath>
</defs>
</svg>

`;

export const PersonIcloudFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
