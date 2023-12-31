
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
<g clip-path="url(#clip0_2207_34187)">
<path d="M3.71118 24.6972H23.9846C26.4456 24.6972 27.6643 23.4902 27.6643 21.0761V6.75586C27.6643 4.3418 26.4456 3.12305 23.9846 3.12305H3.71118C1.26196 3.12305 0.0314941 4.3418 0.0314941 6.75586V21.0761C0.0314941 23.4902 1.26196 24.6972 3.71118 24.6972ZM3.73461 22.8105C2.56274 22.8105 1.91821 22.1894 1.91821 20.9707V6.86133C1.91821 5.64258 2.56274 5.00977 3.73461 5.00977H23.9612C25.1213 5.00977 25.7776 5.64258 25.7776 6.86133V20.9707C25.7776 22.1894 25.1213 22.8105 23.9612 22.8105H3.73461Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M14.8557 21.2168H23.1526C23.8909 21.2168 24.1838 20.9121 24.1838 20.1621V7.66992C24.1838 6.91992 23.8909 6.61523 23.1526 6.61523H14.8557C14.1174 6.61523 13.8245 6.91992 13.8245 7.66992V20.1621C13.8245 20.9121 14.1174 21.2168 14.8557 21.2168Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34187">
<rect width="27.6328" height="21.5742" fill="currentColor" transform="translate(0.0314941 3.12305)"/>
</clipPath>
</defs>
</svg>

`;

export const RectangleTrailinghalfInsetFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
