
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
<g clip-path="url(#clip0_2207_34489)">
<path d="M6.04614 15.571C6.04614 16.028 6.3977 16.3679 6.88989 16.3679H13.511L10.0188 25.8601C9.56176 27.0671 10.8157 27.7116 11.6008 26.7273L22.2531 13.4148C22.4523 13.1687 22.5578 12.9343 22.5578 12.6648C22.5578 12.2195 22.2063 11.8679 21.7141 11.8679H15.093L18.5852 2.37567C19.0422 1.16864 17.7883 0.524105 17.0031 1.5202L6.35083 14.821C6.15161 15.0788 6.04614 15.3132 6.04614 15.571Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34489">
<rect width="16.5117" height="26.3734" fill="currentColor" transform="translate(6.04614 1.03076)"/>
</clipPath>
</defs>
</svg>

`;

export const BoltFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
