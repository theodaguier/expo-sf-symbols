
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
<g clip-path="url(#clip0_2207_37486)">
<path d="M3.08289 22.7783C3.70398 22.7783 4.13758 22.3682 4.13758 21.7705V6.05567C4.13758 5.44629 3.70398 5.0127 3.08289 5.0127C2.47351 5.0127 2.03992 5.44629 2.03992 6.05567V21.7705C2.03992 22.3682 2.47351 22.7783 3.08289 22.7783ZM13.0321 22.7783C13.618 22.7783 14.0633 22.3565 14.0633 21.7705C14.0633 21.501 13.9579 21.2197 13.7821 21.0322L11.1571 18.3604L6.55164 14.1768L6.31726 14.8213L9.80945 14.9502H25.2547C25.8524 14.9502 26.286 14.5049 26.286 13.8955C26.286 13.2861 25.8524 12.8525 25.2547 12.8525H9.80945L6.31726 12.9814L6.55164 13.6377L11.1571 9.43067L13.7821 6.77051C13.9579 6.58301 14.0633 6.30176 14.0633 6.02051C14.0633 5.44629 13.618 5.0127 13.0321 5.0127C12.7626 5.0127 12.5165 5.11816 12.2821 5.34082L4.48914 13.1104C4.25476 13.3447 4.12586 13.6143 4.12586 13.8955C4.12586 14.1885 4.25476 14.458 4.48914 14.6807L12.2821 22.4619C12.5165 22.6846 12.7626 22.7783 13.0321 22.7783Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37486">
<rect width="24.2461" height="18.2227" fill="currentColor" transform="translate(2.03992 5.0127)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowBackwardToLine = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
