
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
<g clip-path="url(#clip0_2207_34075)">
<path d="M6.77198 24.7295H20.9868C23.4478 24.7295 24.6665 23.5107 24.6665 21.0966V6.78809C24.6665 4.37403 23.4478 3.15527 20.9868 3.15527H6.77198C4.32276 3.15527 3.09229 4.36231 3.09229 6.78809V21.0966C3.09229 23.5224 4.32276 24.7295 6.77198 24.7295ZM6.79541 22.8427C5.62354 22.8427 4.97901 22.2216 4.97901 21.0029V6.88184C4.97901 5.66309 5.62354 5.042 6.79541 5.042H20.9634C22.1235 5.042 22.7798 5.66309 22.7798 6.88184V21.0029C22.7798 22.2216 22.1235 22.8427 20.9634 22.8427H6.79541Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M7.604 16.585C6.87744 16.585 6.58447 16.8897 6.58447 17.6397V20.1944C6.58447 20.9444 6.87744 21.2491 7.604 21.2491H20.1548C20.8931 21.2491 21.1861 20.9444 21.1861 20.1944V17.6397C21.1861 16.8897 20.8931 16.585 20.1548 16.585H7.604Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34075">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.09229 3.13184)"/>
</clipPath>
</defs>
</svg>

`;

export const SquareBottomthirdInsetFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
