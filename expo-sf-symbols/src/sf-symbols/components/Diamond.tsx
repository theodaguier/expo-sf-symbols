
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
<g clip-path="url(#clip0_2207_34333)">
<path d="M2.41269 16.9337L11.7994 26.3204C13.5338 28.0548 15.2447 28.0665 16.9673 26.3555L26.4009 16.9102C28.1119 15.1993 28.1002 13.4766 26.3658 11.7423L16.9908 2.36728C15.2564 0.632906 13.5455 0.609468 11.8228 2.33212L2.37753 11.7657C0.654878 13.4884 0.678316 15.1993 2.41269 16.9337ZM3.77206 15.6329C2.94003 14.7891 2.91659 13.9102 3.78378 13.043L13.0884 3.73837C13.9556 2.87118 14.8345 2.8829 15.6783 3.72665L25.0064 13.0548C25.8384 13.8868 25.8619 14.7774 24.9947 15.6446L15.69 24.9493C14.8228 25.8165 13.9205 25.793 13.1002 24.9727L3.77206 15.6329Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34333">
<rect width="26.5768" height="26.593" fill="currentColor" transform="translate(1.09863 1.05322)"/>
</clipPath>
</defs>
</svg>

`;

export const Diamond = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
