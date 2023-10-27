
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
<g clip-path="url(#clip0_2207_37374)">
<path d="M6.69239 24.6174H20.9072C23.3682 24.6174 24.5869 23.3986 24.5869 20.9845V6.6759C24.5869 4.26184 23.3682 3.04309 20.9072 3.04309H6.69239C4.24317 3.04309 3.0127 4.25012 3.0127 6.6759V20.9845C3.0127 23.4103 4.24317 24.6174 6.69239 24.6174ZM6.71582 22.7306C5.54395 22.7306 4.89942 22.1095 4.89942 20.8908V6.76965C4.89942 5.5509 5.54395 4.92981 6.71582 4.92981H20.8838C22.0439 4.92981 22.7002 5.5509 22.7002 6.76965V20.8908C22.7002 22.1095 22.0439 22.7306 20.8838 22.7306H6.71582Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M17.4736 16.7189C17.9893 16.7189 18.3408 16.3205 18.3408 15.7814V10.2501C18.3408 9.55871 17.9541 9.28918 17.3565 9.28918H11.8018C11.251 9.28918 10.8994 9.62903 10.8994 10.1447C10.8994 10.6603 11.2627 11.0001 11.8252 11.0001H13.958L15.6924 10.8126L13.8643 12.5118L9.54004 16.8361C9.37598 17.0002 9.27051 17.2345 9.27051 17.4689C9.27051 17.9963 9.61036 18.3361 10.126 18.3361C10.4072 18.3361 10.6299 18.2306 10.7939 18.0666L15.1065 13.7541L16.7939 11.9493L16.6182 13.7775V15.8049C16.6182 16.3556 16.958 16.7189 17.4736 16.7189Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37374">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.0127 3.01965)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowUpForwardSquare = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
