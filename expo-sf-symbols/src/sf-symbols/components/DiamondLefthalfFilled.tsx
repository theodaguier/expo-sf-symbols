
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
<g clip-path="url(#clip0_2207_34337)">
<path d="M2.32456 16.9352L11.7113 26.3219C13.4457 28.0563 15.1566 28.068 16.8792 26.357L26.3128 16.9117C28.0238 15.2008 28.0121 13.4781 26.2777 11.7438L16.9027 2.36875C15.1683 0.634371 13.4574 0.610933 11.7347 2.33359L2.2894 11.7672C0.566743 13.4899 0.590181 15.2008 2.32456 16.9352ZM14.2894 3.09531C14.7347 3.08359 15.1566 3.30625 15.5902 3.72812L24.9183 13.0563C25.7503 13.8883 25.7738 14.7789 24.9066 15.6461L15.6019 24.9508C15.1566 25.3844 14.7347 25.5953 14.2894 25.5953V3.09531Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34337">
<rect width="26.5768" height="26.593" fill="currentColor" transform="translate(1.0105 1.05469)"/>
</clipPath>
</defs>
</svg>

`;

export const DiamondLefthalfFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
