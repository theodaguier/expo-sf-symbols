
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
<g clip-path="url(#clip0_2207_35938)">
<path d="M22.3942 8.48316C24.152 8.48316 25.5465 7.01831 25.5465 5.31909C25.5465 3.54956 24.152 2.11987 22.3942 2.11987C20.6246 2.11987 19.2067 3.54956 19.2067 5.31909C19.2067 7.06519 20.6246 8.48316 22.3942 8.48316ZM3.51523 25.2526C4.11288 25.8855 5.15585 25.8386 5.90585 25.0651L10.9449 19.862C11.109 19.6862 11.2379 19.6394 11.4957 19.7448L15.4332 21.2331C17.9645 22.2058 20.3434 21.3737 21.4567 19.3581L23.9879 14.7526C24.9723 12.9597 24.6559 11.1082 22.9449 10.1941C21.2926 9.29175 19.5817 9.97144 18.5738 11.8113L15.2926 17.7995L12.4918 16.78C11.109 16.2761 9.96054 16.4401 8.85897 17.5886L3.62069 23.0026C2.88241 23.7526 2.95273 24.6901 3.51523 25.2526Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M7.27691 14.0612C7.82769 14.0612 8.26129 13.6276 8.26129 13.0651V7.66284H10.3941C11.3902 7.66284 11.73 6.66675 11.1207 5.98706L7.98004 2.43628C7.53472 1.94409 6.9605 1.94409 6.53863 2.43628L3.38628 5.98706C2.74175 6.70191 3.16363 7.66284 4.12457 7.66284H6.2691V13.0651C6.2691 13.6276 6.71441 14.0612 7.27691 14.0612Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35938">
<rect width="22.4688" height="23.8828" fill="currentColor" transform="translate(3.07764 2.06714)"/>
</clipPath>
</defs>
</svg>

`;

export const FigureSeatedSideAirDistributionUpper = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
