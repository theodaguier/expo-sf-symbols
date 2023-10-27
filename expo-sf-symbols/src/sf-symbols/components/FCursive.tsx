
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
<g clip-path="url(#clip0_2207_37142)">
<path d="M9.75989 24.7715C12.42 24.7715 14.1779 23.2481 14.5997 20.1895L16.0763 9.49023C16.3693 7.33398 17.2833 6.43164 18.8888 6.43164C20.0724 6.43164 20.4356 6.58398 20.9161 6.58398C21.42 6.58398 21.7716 6.26757 21.7716 5.71679C21.7716 4.81445 20.4005 4.56836 19.0411 4.56836C16.381 4.56836 14.6232 6.09179 14.2013 9.15039L12.7364 19.8614C12.4435 22.0176 11.5177 22.9083 9.91223 22.9083C8.74036 22.9083 8.3888 22.7559 7.89661 22.7559C7.38098 22.7559 7.02942 23.0723 7.02942 23.6231C7.02942 24.5372 8.40051 24.7715 9.75989 24.7715ZM9.16223 14.7989H20.5763C21.1388 14.7989 21.5372 14.4122 21.5372 13.873C21.5372 13.334 21.1271 12.9355 20.5646 12.9355H9.15051C8.58801 12.9355 8.18958 13.3223 8.18958 13.873C8.18958 14.4122 8.59973 14.7989 9.16223 14.7989Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37142">
<rect width="14.7422" height="20.707" fill="currentColor" transform="translate(7.02942 4.06445)"/>
</clipPath>
</defs>
</svg>

`;

export const FCursive = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
