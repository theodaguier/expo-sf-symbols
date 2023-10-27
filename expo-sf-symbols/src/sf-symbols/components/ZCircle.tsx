
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
<g clip-path="url(#clip0_2207_37723)">
<path d="M13.9719 26.0605C20.511 26.0605 25.925 20.6348 25.925 14.1074C25.925 7.56836 20.4993 2.1543 13.9602 2.1543C7.43286 2.1543 2.0188 7.56836 2.0188 14.1074C2.0188 20.6348 7.44458 26.0605 13.9719 26.0605ZM13.9719 24.0684C8.44068 24.0684 4.02271 19.6387 4.02271 14.1074C4.02271 8.57618 8.42896 4.14649 13.9602 4.14649C19.4915 4.14649 23.9329 8.57618 23.9329 14.1074C23.9329 19.6387 19.5032 24.0684 13.9719 24.0684Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.5852 19.334H17.4524C17.8977 19.334 18.2376 19.041 18.2376 18.5723C18.2376 18.0918 17.8977 17.7988 17.4524 17.7988H12.1907V17.7051L17.5696 10.2402C17.804 9.92382 17.8508 9.75976 17.8508 9.49023C17.8508 8.99804 17.4993 8.6582 16.9836 8.6582H10.4797C10.0344 8.6582 9.7063 8.95117 9.7063 9.41991C9.7063 9.90038 10.0344 10.1934 10.4797 10.1934H15.4485V10.2871L10.0579 17.752C9.80005 18.1152 9.74146 18.2793 9.74146 18.5371C9.74146 19.0059 10.0813 19.334 10.5852 19.334Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37723">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.0188 2.1543)"/>
</clipPath>
</defs>
</svg>

`;

export const ZCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
