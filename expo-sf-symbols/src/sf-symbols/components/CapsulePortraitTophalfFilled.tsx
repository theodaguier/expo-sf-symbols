
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
<g clip-path="url(#clip0_2207_34305)">
<path d="M13.5612 0.036377C7.18628 0.036377 3.03784 4.00904 3.03784 10.3372V17.2747C3.03784 23.6028 7.18628 27.5755 13.5612 27.5755C19.9362 27.5755 24.0847 23.6028 24.0847 17.2747V10.3372C24.0847 4.00904 19.9362 0.036377 13.5612 0.036377ZM4.948 13.8059H22.1745V17.6262C22.1745 22.6067 18.7878 25.677 13.5612 25.677C8.33472 25.677 4.948 22.6067 4.948 17.6262V13.8059Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34305">
<rect width="21.0469" height="27.5508" fill="currentColor" transform="translate(3.03784 0.036377)"/>
</clipPath>
</defs>
</svg>

`;

export const CapsulePortraitTophalfFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
