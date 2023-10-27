
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="30" height="29" viewBox="0 0 30 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_37079)">
<path d="M12.5396 21.6963H28.5591C29.0865 21.6963 29.4966 21.2861 29.4966 20.7588C29.4966 20.2197 29.0865 19.8096 28.5591 19.8096H12.5396C12.0123 19.8096 11.6021 20.2197 11.6021 20.7588C11.6021 21.2861 12.0123 21.6963 12.5396 21.6963Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M7.35986 22.2353C8.18017 22.2353 8.83642 21.5674 8.83642 20.7588C8.83642 19.9385 8.18017 19.2822 7.35986 19.2822C6.55126 19.2822 5.8833 19.9385 5.8833 20.7588C5.8833 21.5674 6.55126 22.2353 7.35986 22.2353Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.60986 14.6182H25.6294C26.1567 14.6182 26.5668 14.1963 26.5668 13.6689C26.5668 13.1416 26.1567 12.7314 25.6294 12.7314H9.60986C9.08252 12.7314 8.67236 13.1416 8.67236 13.6689C8.67236 14.1963 9.08252 14.6182 9.60986 14.6182Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M4.44189 15.1455C5.25048 15.1455 5.91845 14.4893 5.91845 13.6689C5.91845 12.8486 5.25048 12.1924 4.44189 12.1924C3.62158 12.1924 2.96533 12.8486 2.96533 13.6689C2.96533 14.4893 3.62158 15.1455 4.44189 15.1455Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M6.6919 7.52832H22.6997C23.227 7.52832 23.6489 7.11816 23.6489 6.59082C23.6489 6.05176 23.227 5.6416 22.6997 5.6416H6.6919C6.15284 5.6416 5.74268 6.05176 5.74268 6.59082C5.74268 7.11816 6.15284 7.52832 6.6919 7.52832Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M1.5122 8.05566C2.33252 8.05566 2.98876 7.39941 2.98876 6.59082C2.98876 5.77051 2.33252 5.11426 1.5122 5.11426C0.691895 5.11426 0.0356445 5.77051 0.0356445 6.59082C0.0356445 7.39941 0.691895 8.05566 1.5122 8.05566Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37079">
<rect width="29.4609" height="17.1445" fill="currentColor" transform="translate(0.0356445 5.09082)"/>
</clipPath>
</defs>
</svg>

`;

export const ListBulletIndent = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
