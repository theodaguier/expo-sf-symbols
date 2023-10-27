
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
<g clip-path="url(#clip0_2207_34055)">
<path d="M6.69239 24.7295H20.9072C23.3682 24.7295 24.5869 23.5107 24.5869 21.0966V6.78809C24.5869 4.37403 23.3682 3.15527 20.9072 3.15527H6.69239C4.24317 3.15527 3.0127 4.36231 3.0127 6.78809V21.0966C3.0127 23.5224 4.24317 24.7295 6.69239 24.7295ZM6.71582 22.8427C5.54395 22.8427 4.89942 22.2216 4.89942 21.0029V6.88184C4.89942 5.66309 5.54395 5.042 6.71582 5.042H20.8838C22.0439 5.042 22.7002 5.66309 22.7002 6.88184V21.0029C22.7002 22.2216 22.0439 22.8427 20.8838 22.8427H6.71582Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34055">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.0127 3.13184)"/>
</clipPath>
</defs>
</svg>

`;

export const Square = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
