
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
<g clip-path="url(#clip0_2207_36798)">
<path d="M13.9825 26C20.5216 26 25.9356 20.5742 25.9356 14.0469C25.9356 7.50781 20.5099 2.09375 13.9708 2.09375C7.44348 2.09375 2.02942 7.50781 2.02942 14.0469C2.02942 20.5742 7.4552 26 13.9825 26Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.88098 18.711C9.35364 18.711 9.06067 18.3711 9.06067 17.8321V10.1094C9.06067 9.65234 9.43567 9.27734 9.8927 9.27734C10.3497 9.27734 10.7247 9.65234 10.7247 10.1094V17.293H13.1856C13.5606 17.293 13.8888 17.6094 13.8888 17.9961C13.8888 18.3829 13.5606 18.711 13.1856 18.711H9.88098ZM16.6075 18.8399C16.1388 18.8399 15.7521 18.4649 15.7521 17.9844V10.8008H14.3224C13.9239 10.8008 13.6192 10.4961 13.6192 10.0977C13.6192 9.71094 13.9239 9.40625 14.3224 9.40625H18.8341C19.2091 9.40625 19.5138 9.71094 19.5138 10.0977C19.5138 10.4961 19.2091 10.8008 18.8341 10.8008H17.4396V17.9844C17.4396 18.4649 17.0646 18.8399 16.6075 18.8399Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_36798">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.02942 2.09375)"/>
</clipPath>
</defs>
</svg>

`;

export const LtCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
