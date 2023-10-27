
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
<g clip-path="url(#clip0_2207_33934)">
<path d="M0.0187988 21.5431C0.0187988 23.9689 1.24927 25.1759 3.69849 25.1759H23.9719C26.4329 25.1759 27.6516 23.9572 27.6516 21.5431V7.23457C27.6516 4.82051 26.4329 3.60176 23.9719 3.60176H15.7688C15.2532 3.60176 14.8196 4.02363 14.8196 4.53926C14.8196 5.05488 15.2532 5.48848 15.7688 5.48848H23.9485C25.1086 5.48848 25.7649 6.10957 25.7649 7.32832V21.4494C25.7649 22.6681 25.1086 23.2892 23.9485 23.2892H3.72192C2.55005 23.2892 1.90552 22.6681 1.90552 21.4494V7.32832C1.90552 6.10957 2.55005 5.48848 3.72192 5.48848H6.69849V7.22285C6.69849 8.05487 7.27271 8.27753 7.91724 7.82051L11.6555 5.19551C12.1829 4.82051 12.1946 4.25801 11.6555 3.88301L7.92896 1.25801C7.27271 0.789255 6.69849 1.01191 6.69849 1.85566V3.60176H3.69849C1.24927 3.60176 0.0187988 4.80879 0.0187988 7.23457V21.5431Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33934">
<rect width="27.6328" height="26.7206" fill="currentColor" transform="translate(0.0187988 1.01685)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowRectanglepath = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
