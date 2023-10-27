
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
<g clip-path="url(#clip0_2207_34301)">
<path d="M13.5485 0.036377C7.17359 0.036377 3.02515 4.00904 3.02515 10.3372V17.2747C3.02515 23.6028 7.17359 27.5755 13.5485 27.5755C19.9235 27.5755 24.072 23.6028 24.072 17.2747V10.3372C24.072 4.00904 19.9235 0.036377 13.5485 0.036377ZM13.5485 1.9231C18.7751 1.9231 22.1618 5.00513 22.1618 9.9856V17.6262C22.1618 22.6067 18.7751 25.677 13.5485 25.677C8.32203 25.677 4.93531 22.6067 4.93531 17.6262V9.9856C4.93531 5.00513 8.32203 1.9231 13.5485 1.9231Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34301">
<rect width="21.0469" height="27.5508" fill="currentColor" transform="translate(3.02515 0.036377)"/>
</clipPath>
</defs>
</svg>

`;

export const CapsulePortrait = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
