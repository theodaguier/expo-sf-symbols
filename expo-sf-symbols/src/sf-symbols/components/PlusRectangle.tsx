
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
<g clip-path="url(#clip0_2207_37194)">
<path d="M3.7301 24.686H24.0035C26.4645 24.686 27.6832 23.479 27.6832 21.0649V6.74463C27.6832 4.33057 26.4645 3.11182 24.0035 3.11182H3.7301C1.28088 3.11182 0.050415 4.33057 0.050415 6.74463V21.0649C0.050415 23.479 1.28088 24.686 3.7301 24.686ZM3.75354 22.7993C2.58167 22.7993 1.93713 22.1782 1.93713 20.9595V6.8501C1.93713 5.63135 2.58167 4.99854 3.75354 4.99854H23.9801C25.1402 4.99854 25.7965 5.63135 25.7965 6.8501V20.9595C25.7965 22.1782 25.1402 22.7993 23.9801 22.7993H3.75354Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.44104 13.893C8.44104 14.4673 8.8512 14.854 9.44886 14.854H12.8942V18.311C12.8942 18.897 13.2926 19.3071 13.8551 19.3071C14.4527 19.3071 14.8629 18.9087 14.8629 18.311V14.854H18.3199C18.9059 14.854 19.3043 14.4673 19.3043 13.893C19.3043 13.3071 18.9059 12.897 18.3199 12.897H14.8629V9.45166C14.8629 8.85401 14.4527 8.44385 13.8551 8.44385C13.2926 8.44385 12.8942 8.85401 12.8942 9.45166V12.897H9.44886C8.8512 12.897 8.44104 13.3071 8.44104 13.893Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37194">
<rect width="27.6328" height="21.5742" fill="currentColor" transform="translate(0.050415 3.11182)"/>
</clipPath>
</defs>
</svg>

`;

export const PlusRectangle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
