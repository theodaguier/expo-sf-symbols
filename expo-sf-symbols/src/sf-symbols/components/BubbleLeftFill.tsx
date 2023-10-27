
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="28" height="29" viewBox="0 0 28 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_34603)">
<path d="M7.96094 26.9203C8.41797 26.9203 8.75781 26.6859 9.30859 26.1703L13.5391 22.3031H21.4609C24.9531 22.3031 26.8281 20.3813 26.8281 16.9477V7.97107C26.8281 4.53748 24.9531 2.60388 21.4609 2.60388H6.36719C2.875 2.60388 1 4.52576 1 7.97107V16.9477C1 20.393 2.875 22.3031 6.36719 22.3031H6.91797V25.7133C6.91797 26.4398 7.29297 26.9203 7.96094 26.9203Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34603">
<rect width="25.8281" height="25.8867" fill="currentColor" transform="translate(1 1.03357)"/>
</clipPath>
</defs>
</svg>

`;

export const BubbleLeftFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
