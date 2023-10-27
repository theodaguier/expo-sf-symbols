
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
<g clip-path="url(#clip0_2207_36583)">
<path d="M0.0966797 21.0585C0.0966797 23.4844 1.32715 24.6915 3.77637 24.6915H24.0498C26.5108 24.6915 27.7295 23.4727 27.7295 21.0585V6.75C27.7295 4.33594 26.5108 3.11719 24.0498 3.11719H3.77637C1.32715 3.11719 0.0966797 4.32422 0.0966797 6.75V21.0585ZM1.9834 20.9648V9.02344H25.8428V20.9648C25.8428 22.1835 25.1865 22.8046 24.0264 22.8046H3.7998C2.62793 22.8046 1.9834 22.1835 1.9834 20.9648Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M3.81151 7.11328C3.23729 7.11328 2.76855 6.62109 2.76855 6.07031C2.76855 5.51953 3.23729 5.02734 3.81151 5.02734C4.38573 5.02734 4.8662 5.51953 4.8662 6.07031C4.8662 6.62109 4.38573 7.11328 3.81151 7.11328Z" fill="currentColor"/>
<path d="M7.1748 7.11328C6.60059 7.11328 6.13184 6.62109 6.13184 6.07031C6.13184 5.51953 6.60059 5.02734 7.1748 5.02734C7.74902 5.02734 8.22949 5.51953 8.22949 6.07031C8.22949 6.62109 7.74902 7.11328 7.1748 7.11328Z" fill="currentColor"/>
<path d="M10.5381 7.11328C9.96387 7.11328 9.49512 6.62109 9.49512 6.07031C9.49512 5.51953 9.96387 5.02734 10.5381 5.02734C11.1123 5.02734 11.5811 5.51953 11.5811 6.07031C11.5811 6.62109 11.1123 7.11328 10.5381 7.11328Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_36583">
<rect width="27.6328" height="21.5977" fill="currentColor" transform="translate(0.0966797 3.09375)"/>
</clipPath>
</defs>
</svg>

`;

export const Macwindow = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
