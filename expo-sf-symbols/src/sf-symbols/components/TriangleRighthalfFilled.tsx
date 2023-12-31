
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
<g clip-path="url(#clip0_2207_34325)">
<path d="M2.0127 22.1182C2.0127 23.9228 3.25489 25.3525 5.24708 25.3525H23.2822C25.2744 25.3525 26.5166 23.9228 26.5166 22.1182C26.5166 21.5791 26.376 21.04 26.083 20.5361L17.0479 4.78613C16.4385 3.71973 15.3604 3.14551 14.2588 3.14551C13.1689 3.14551 12.0908 3.71973 11.4814 4.78613L2.44629 20.5244C2.16504 21.0283 2.0127 21.5791 2.0127 22.1182ZM3.91114 22.1182C3.91114 21.9072 3.95801 21.6611 4.08692 21.4267L13.0986 5.67676C13.3565 5.21973 13.8018 5.02051 14.2588 5.02051V23.5127H5.27051C4.46192 23.5127 3.91114 22.8447 3.91114 22.1182Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34325">
<rect width="24.5039" height="22.2773" fill="currentColor" transform="translate(2.0127 3.14551)"/>
</clipPath>
</defs>
</svg>

`;

export const TriangleRighthalfFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
