
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
<g clip-path="url(#clip0_2207_34192)">
<path d="M3.70703 24.6972H23.9804C26.4414 24.6972 27.6601 23.4902 27.6601 21.0761V6.75586C27.6601 4.3418 26.4414 3.12305 23.9804 3.12305H3.70703C1.25781 3.12305 0.0273438 4.3418 0.0273438 6.75586V21.0761C0.0273438 23.4902 1.25781 24.6972 3.70703 24.6972ZM3.73046 22.8105C2.55859 22.8105 1.91406 22.1894 1.91406 20.9707V6.86133C1.91406 5.64258 2.55859 5.00977 3.73046 5.00977H23.957C25.1171 5.00977 25.7734 5.64258 25.7734 6.86133V20.9707C25.7734 22.1894 25.1171 22.8105 23.957 22.8105H3.73046Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M4.53906 11.2793H23.1484C23.8867 11.2793 24.1796 10.9746 24.1796 10.2246V7.66992C24.1796 6.91992 23.8867 6.61523 23.1484 6.61523H4.53906C3.8125 6.61523 3.51953 6.91992 3.51953 7.66992V10.2246C3.51953 10.9746 3.8125 11.2793 4.53906 11.2793Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34192">
<rect width="27.6328" height="21.5742" fill="currentColor" transform="translate(0.0273438 3.12305)"/>
</clipPath>
</defs>
</svg>

`;

export const RectangleTopthirdInsetFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
