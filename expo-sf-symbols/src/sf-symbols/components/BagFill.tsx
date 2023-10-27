
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
<g clip-path="url(#clip0_2207_34764)">
<path d="M7.7301 25.6047H21.5231C23.6207 25.6047 24.8512 24.386 24.8512 21.9719V9.84302C24.8512 7.42895 23.609 6.2102 21.1715 6.2102H7.7301C5.28088 6.2102 4.05042 7.41723 4.05042 9.84302V21.9719C4.05042 24.3977 5.28088 25.6047 7.7301 25.6047ZM9.82775 6.66723L11.7145 6.67895C11.7145 5.00317 12.816 3.80786 14.4449 3.80786C16.0738 3.80786 17.1871 5.00317 17.1871 6.67895L19.0738 6.66723C19.0738 4.07739 17.0699 2.02661 14.4449 2.02661C11.8199 2.02661 9.82775 4.07739 9.82775 6.66723Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34764">
<rect width="20.8008" height="23.5898" fill="currentColor" transform="translate(4.05042 2.02661)"/>
</clipPath>
</defs>
</svg>

`;

export const BagFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
