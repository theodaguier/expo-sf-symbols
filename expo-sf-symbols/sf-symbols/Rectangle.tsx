

  /*
  * This file was generated by expo-sf-symbols
  *
  * 
  */

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
<g clip-path="url(#clip0_2207_34155)">
<path d="M3.75733 24.6919H24.0307C26.4917 24.6919 27.7104 23.4849 27.7104 21.0708V6.75049C27.7104 4.33643 26.4917 3.11768 24.0307 3.11768H3.75733C1.30811 3.11768 0.0776367 4.33643 0.0776367 6.75049V21.0708C0.0776367 23.4849 1.30811 24.6919 3.75733 24.6919ZM3.78076 22.8052C2.60889 22.8052 1.96436 22.1841 1.96436 20.9654V6.85596C1.96436 5.63721 2.60889 5.0044 3.78076 5.0044H24.0073C25.1674 5.0044 25.8237 5.63721 25.8237 6.85596V20.9654C25.8237 22.1841 25.1674 22.8052 24.0073 22.8052H3.78076Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34155">
<rect width="27.6328" height="21.5742" fill="currentColor" transform="translate(0.0776367 3.11768)"/>
</clipPath>
</defs>
</svg>

`;

export const Rectangle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
  