
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
<g clip-path="url(#clip0_2207_37216)">
<path d="M6.38942 21.4146C6.78786 21.8247 7.47926 21.813 7.8777 21.4146L13.8777 15.4028L19.8894 21.4146C20.2879 21.813 20.9676 21.8247 21.366 21.4146C21.7879 21.0044 21.7762 20.3247 21.366 19.9263L15.366 13.9146L21.366 7.91457C21.7762 7.51613 21.7879 6.82472 21.366 6.42629C20.9676 6.01613 20.2879 6.02785 19.8894 6.42629L13.8777 12.438L7.8777 6.42629C7.47926 6.02785 6.78786 6.01613 6.38942 6.42629C5.97926 6.82472 5.99098 7.51613 6.38942 7.91457L12.4011 13.9146L6.38942 19.9263C5.99098 20.3247 5.97926 21.0044 6.38942 21.4146Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37216">
<rect width="15.5918" height="15.6182" fill="currentColor" transform="translate(6.08618 6.09961)"/>
</clipPath>
</defs>
</svg>

`;

export const Multiply = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
