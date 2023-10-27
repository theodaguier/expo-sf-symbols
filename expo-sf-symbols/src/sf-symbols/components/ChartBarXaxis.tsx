
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="28" height="29" viewBox="0 0 28 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_36944)">
<path d="M1.00635 23.7505C1.00635 24.2779 1.43994 24.688 1.94385 24.688H26.2016C26.7172 24.688 27.1508 24.2779 27.1508 23.7505C27.1508 23.2349 26.7172 22.813 26.2016 22.813H1.94385C1.43994 22.813 1.00635 23.2349 1.00635 23.7505Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M21.1508 19.8365C21.1508 20.4927 21.561 20.8794 22.2407 20.8794H24.9477C25.6157 20.8794 26.0375 20.4927 26.0375 19.8365V12.0903C26.0375 11.4341 25.6157 11.0356 24.9477 11.0356H22.2407C21.561 11.0356 21.1508 11.4341 21.1508 12.0903V19.8365Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M14.7993 19.8365C14.7993 20.4927 15.2211 20.8794 15.8891 20.8794H18.5961C19.2758 20.8794 19.6977 20.4927 19.6977 19.8365V6.75829C19.6977 6.10204 19.2758 5.71533 18.5961 5.71533H15.8891C15.2211 5.71533 14.7993 6.10204 14.7993 6.75829V19.8365Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.45947 19.8365C8.45947 20.4927 8.86963 20.8794 9.5376 20.8794H12.2564C12.9244 20.8794 13.3462 20.4927 13.3462 19.8365V4.08643C13.3462 3.43018 12.9244 3.04346 12.2564 3.04346H9.5376C8.86963 3.04346 8.45947 3.43018 8.45947 4.08643V19.8365Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M2.10791 19.8365C2.10791 20.4927 2.52979 20.8794 3.19776 20.8794H5.90479C6.58447 20.8794 7.00635 20.4927 7.00635 19.8365V9.46533C7.00635 8.82079 6.58447 8.42236 5.90479 8.42236H3.19776C2.52979 8.42236 2.10791 8.82079 2.10791 9.46533V19.8365Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36944">
<rect width="26.1445" height="21.6445" fill="currentColor" transform="translate(1.00635 3.04346)"/>
</clipPath>
</defs>
</svg>

`;

export const ChartBarXaxis = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
