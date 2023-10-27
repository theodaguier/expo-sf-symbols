
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
<g clip-path="url(#clip0_2207_37221)">
<path d="M13.6826 8.60693C14.6435 8.60693 15.4169 7.82177 15.4169 6.88427C15.4169 5.92334 14.6435 5.1499 13.6826 5.1499C12.7334 5.1499 11.96 5.92334 11.96 6.88427C11.96 7.82177 12.7334 8.60693 13.6826 8.60693ZM13.6826 22.3882C14.6435 22.3882 15.4169 21.6148 15.4169 20.6539C15.4169 19.7046 14.6435 18.9312 13.6826 18.9312C12.7334 18.9312 11.96 19.7046 11.96 20.6539C11.96 21.6148 12.7334 22.3882 13.6826 22.3882ZM5.05762 14.7827H22.3076C22.8701 14.7827 23.3505 14.3022 23.3505 13.728C23.3505 13.1538 22.8701 12.6851 22.3076 12.6851H5.05762C4.49512 12.6851 4.01465 13.1538 4.01465 13.728C4.01465 14.3022 4.49512 14.7827 5.05762 14.7827Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37221">
<rect width="19.3359" height="17.332" fill="currentColor" transform="translate(4.01465 5.05615)"/>
</clipPath>
</defs>
</svg>

`;

export const Divide = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
