
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="29" height="28" viewBox="0 0 29 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_37948)">
<path d="M14.0517 25.9104C20.5908 25.9104 26.0048 20.4846 26.0048 13.9573C26.0048 7.41821 20.5791 2.00415 14.04 2.00415C7.51269 2.00415 2.09863 7.41821 2.09863 13.9573C2.09863 20.4846 7.52441 25.9104 14.0517 25.9104Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.44629 16.1955C9.44629 15.9377 9.50488 15.6799 9.64551 15.4338C10.9463 13.1603 12.1181 11.0862 13.3955 8.82446C13.6298 8.42603 13.8877 8.23853 14.2744 8.23853C14.8252 8.23853 15.1181 8.64868 15.1181 9.12915C15.1181 9.31665 15.0595 9.50415 14.9658 9.70337C13.8408 11.7659 12.7978 13.5705 11.708 15.5979H15.0595V12.9963C15.0595 12.3518 15.3877 11.9768 15.9267 11.9768C16.5127 11.9768 16.8408 12.34 16.8408 12.9963V15.5979H17.6494C18.1767 15.5979 18.5166 15.9025 18.5166 16.3713C18.5166 16.8752 18.1767 17.2033 17.6494 17.2033H16.8408V18.4455C16.8408 19.1018 16.5127 19.465 15.9267 19.465C15.3877 19.465 15.0595 19.09 15.0595 18.4455V17.2033H10.5127C9.84472 17.2033 9.44629 16.8049 9.44629 16.1955Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37948">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.09863 2.00415)"/>
</clipPath>
</defs>
</svg>

`;

export const 4AltCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
