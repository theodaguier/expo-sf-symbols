
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="31" height="29" viewBox="0 0 31 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_34041)">
<path d="M6.91064 20.6867C10.6489 20.6867 13.7192 17.6164 13.7192 13.8665C13.7192 10.1282 10.6489 7.04614 6.91064 7.04614C3.13721 7.04614 0.090332 10.1282 0.090332 13.8665C0.090332 17.6164 3.13721 20.6867 6.91064 20.6867ZM6.91064 18.8C4.19189 18.8 1.97705 16.5969 1.97705 13.8665C1.97705 11.1477 4.19189 8.93286 6.91064 8.93286C9.60595 8.93286 11.8325 11.1711 11.8325 13.8665C11.8325 16.5735 9.60595 18.8 6.91064 18.8Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M23.9966 20.6867C27.7349 20.6867 30.8052 17.6164 30.8052 13.8665C30.8052 10.1282 27.7349 7.04614 23.9966 7.04614C20.2349 7.04614 17.1763 10.1282 17.1763 13.8665C17.1763 17.6164 20.2349 20.6867 23.9966 20.6867Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34041">
<rect width="30.7148" height="13.6523" fill="currentColor" transform="translate(0.090332 7.04614)"/>
</clipPath>
</defs>
</svg>

`;

export const CircleGrid2x1RightFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
