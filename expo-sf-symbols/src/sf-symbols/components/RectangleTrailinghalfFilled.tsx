
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
<g clip-path="url(#clip0_2207_34162)">
<path d="M0.0294189 21.0761C0.0294189 23.4902 1.25989 24.6972 3.70911 24.6972H23.9825C26.4435 24.6972 27.6622 23.4902 27.6622 21.0761V6.75586C27.6622 4.3418 26.4435 3.12305 23.9825 3.12305H3.70911C1.25989 3.12305 0.0294189 4.3418 0.0294189 6.75586V21.0761ZM1.91614 20.9707V6.86133C1.91614 5.64258 2.56067 5.00977 3.73254 5.00977H13.8692V22.8105H3.73254C2.56067 22.8105 1.91614 22.1894 1.91614 20.9707Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34162">
<rect width="27.6328" height="21.5742" fill="currentColor" transform="translate(0.0294189 3.12305)"/>
</clipPath>
</defs>
</svg>

`;

export const RectangleTrailinghalfFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
