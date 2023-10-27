
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
<g clip-path="url(#clip0_2207_34366)">
<path d="M2.03149 10.8711C2.03149 15.8633 6.21508 20.7734 12.8245 24.9922C13.0706 25.1445 13.4221 25.3086 13.6682 25.3086C13.9143 25.3086 14.2659 25.1445 14.5237 24.9922C21.1213 20.7734 25.3049 15.8633 25.3049 10.8711C25.3049 6.72265 22.4573 3.79297 18.6604 3.79297C16.4924 3.79297 14.7346 4.82421 13.6682 6.40624C12.6253 4.83593 10.844 3.79297 8.67602 3.79297C4.87915 3.79297 2.03149 6.72265 2.03149 10.8711ZM3.91821 10.8711C3.91821 7.7539 5.93383 5.67968 8.65258 5.67968C10.8557 5.67968 12.1213 7.05078 12.8713 8.22265C13.1877 8.6914 13.387 8.82031 13.6682 8.82031C13.9495 8.82031 14.1253 8.67968 14.4651 8.22265C15.2737 7.07421 16.4924 5.67968 18.6838 5.67968C21.4026 5.67968 23.4182 7.7539 23.4182 10.8711C23.4182 15.2304 18.8127 19.9297 13.9143 23.1875C13.7971 23.2695 13.7151 23.3281 13.6682 23.3281C13.6213 23.3281 13.5393 23.2695 13.4338 23.1875C8.52368 19.9297 3.91821 15.2304 3.91821 10.8711Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34366">
<rect width="23.2734" height="22.2305" fill="currentColor" transform="translate(2.03149 3.07812)"/>
</clipPath>
</defs>
</svg>

`;

export const Heart = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
