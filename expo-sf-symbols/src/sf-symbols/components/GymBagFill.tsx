
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="33" height="29" viewBox="0 0 33 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_33498)">
<path d="M8.49963 10.4429H10.4449V7.00927C10.4449 5.15771 11.8863 4.02099 14.1481 4.02099H18.4957C20.7692 4.02099 22.2106 5.15771 22.2106 7.00927V10.4429H24.1559V7.00927C24.1559 3.9624 21.9527 2.07568 18.4957 2.07568H14.1481C10.7027 2.07568 8.49963 3.9624 8.49963 7.00927V10.4429ZM3.96448 25.5015H28.6793C31.0816 25.5015 32.5934 24.0132 32.5934 21.646V14.978C32.5934 11.4858 30.1559 9.08349 26.6285 9.08349H6.01525C2.48792 9.08349 0.050415 11.4858 0.050415 14.978V21.646C0.050415 24.0132 1.56214 25.5015 3.96448 25.5015ZM6.96448 25.5015V9.08349H8.49963V25.5015H6.96448ZM10.4449 25.5015V9.08349H11.9801V25.5015H10.4449ZM11.9801 17.0171V15.4819H20.6754V17.0171H11.9801ZM20.6754 25.5015V9.08349H22.2106V25.5015H20.6754ZM24.1559 25.5015V9.08349H25.691V25.5015H24.1559Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33498">
<rect width="32.543" height="23.4492" fill="currentColor" transform="translate(0.050415 2.07568)"/>
</clipPath>
</defs>
</svg>

`;

export const GymBagFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
