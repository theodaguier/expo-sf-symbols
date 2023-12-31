
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
<g clip-path="url(#clip0_2207_34157)">
<path d="M3.94507 24.9742H24.2302C26.6795 24.9742 27.9099 23.7671 27.9099 21.3531V7.03271C27.9099 4.61865 26.6795 3.3999 24.2302 3.3999H3.94507C1.50757 3.3999 0.265381 4.61865 0.265381 7.03271V21.3531C0.265381 23.7671 1.50757 24.9742 3.94507 24.9742ZM3.98023 23.0874C2.80835 23.0874 2.1521 22.4664 2.1521 21.2476V7.13818C2.1521 5.91943 2.80835 5.28662 3.98023 5.28662H24.1951C25.3552 5.28662 26.0232 5.91943 26.0232 7.13818V21.2476C26.0232 22.4664 25.3552 23.0874 24.1951 23.0874H3.98023Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M24.3123 27.5874C25.2146 28.4781 26.656 28.4781 27.5349 27.564C28.4021 26.6734 28.4021 25.2554 27.5232 24.3765L3.9568 0.810088C3.06617 -0.0688182 1.62477 -0.0805371 0.734138 0.798369C-0.144768 1.67727 -0.144768 3.15384 0.722419 4.02102L24.3123 27.5874Z" fill="currentColor"/>
<path d="M25.2849 26.6148C25.6365 26.9664 26.2107 26.9781 26.5623 26.6148C26.9021 26.2632 26.9138 25.689 26.5623 25.3374L2.98413 1.78273C2.63257 1.43117 2.05835 1.41945 1.69507 1.78273C1.35523 2.12258 1.35523 2.70851 1.69507 3.06008L25.2849 26.6148Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34157">
<rect width="28.1104" height="28.1309" fill="currentColor" transform="translate(0.0734863 0.121582)"/>
</clipPath>
</defs>
</svg>

`;

export const RectangleSlash = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
