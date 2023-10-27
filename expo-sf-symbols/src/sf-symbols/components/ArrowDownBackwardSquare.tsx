
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
<g clip-path="url(#clip0_2207_37384)">
<path d="M6.69239 24.6119H20.9072C23.3682 24.6119 24.5869 23.3931 24.5869 20.979V6.67041C24.5869 4.25635 23.3682 3.0376 20.9072 3.0376H6.69239C4.24317 3.0376 3.0127 4.24463 3.0127 6.67041V20.979C3.0127 23.4048 4.24317 24.6119 6.69239 24.6119ZM6.71582 22.7251C5.54395 22.7251 4.89942 22.104 4.89942 20.8853V6.76416C4.89942 5.54541 5.54395 4.92432 6.71582 4.92432H20.8838C22.0439 4.92432 22.7002 5.54541 22.7002 6.76416V20.8853C22.7002 22.104 22.0439 22.7251 20.8838 22.7251H6.71582Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.126 10.9009C9.61036 10.9009 9.27051 11.2876 9.27051 11.8384V17.3697C9.27051 18.0611 9.64551 18.3306 10.2432 18.3306H15.7979C16.3486 18.3306 16.7002 17.9908 16.7002 17.4751C16.7002 16.9595 16.3369 16.6197 15.7744 16.6197H13.6416L11.9072 16.8072L13.7354 15.0962L18.0596 10.7837C18.2236 10.6196 18.3408 10.3853 18.3408 10.1509C18.3408 9.62354 17.9893 9.28369 17.4736 9.28369C17.1924 9.28369 16.9815 9.38916 16.8057 9.55322L12.4932 13.8658L10.8057 15.6704L10.9814 13.8423V11.8149C10.9814 11.2524 10.6416 10.9009 10.126 10.9009Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37384">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.0127 3.01416)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowDownBackwardSquare = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
