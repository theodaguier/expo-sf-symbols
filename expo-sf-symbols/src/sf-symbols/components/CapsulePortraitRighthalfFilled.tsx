
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
<g clip-path="url(#clip0_2207_34304)">
<path d="M13.559 0.036377C7.18408 0.036377 3.03564 4.00904 3.03564 10.3372V17.2747C3.03564 23.6028 7.18408 27.5755 13.559 27.5755C19.934 27.5755 24.0825 23.6028 24.0825 17.2747V10.3372C24.0825 4.00904 19.934 0.036377 13.559 0.036377ZM13.559 1.9231V25.677C8.33252 25.677 4.9458 22.6067 4.9458 17.6262V9.9856C4.9458 5.00513 8.33252 1.9231 13.559 1.9231Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34304">
<rect width="21.0469" height="27.5508" fill="currentColor" transform="translate(3.03564 0.036377)"/>
</clipPath>
</defs>
</svg>

`;

export const CapsulePortraitRighthalfFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
