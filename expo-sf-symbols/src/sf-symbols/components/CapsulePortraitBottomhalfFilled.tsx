
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
<g clip-path="url(#clip0_2207_34306)">
<path d="M13.5507 27.5755C19.9257 27.5755 24.0742 23.6028 24.0742 17.2747V10.3372C24.0742 4.00904 19.9257 0.036377 13.5507 0.036377C7.17578 0.036377 3.02734 4.00904 3.02734 10.3372V17.2747C3.02734 23.6028 7.17578 27.5755 13.5507 27.5755ZM4.9375 13.8059V9.9856C4.9375 5.00513 8.32422 1.9231 13.5507 1.9231C18.7773 1.9231 22.164 5.00513 22.164 9.9856V13.8059H4.9375Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34306">
<rect width="21.0469" height="27.5508" fill="currentColor" transform="translate(3.02734 0.036377)"/>
</clipPath>
</defs>
</svg>

`;

export const CapsulePortraitBottomhalfFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
