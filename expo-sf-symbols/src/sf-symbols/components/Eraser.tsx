
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
<g clip-path="url(#clip0_2207_32906)">
<path d="M3.43823 19.5506L7.97339 24.074C9.74292 25.8318 11.7234 25.9021 13.3874 24.2381L24.6843 12.9295C25.7273 11.8982 25.7155 10.4099 24.6491 9.34348L18.1687 2.87473C17.1023 1.80833 15.6257 1.78489 14.5827 2.82786L3.28589 14.1248C1.62183 15.8006 1.68042 17.781 3.43823 19.5506ZM4.77417 18.2146C3.87183 17.3006 3.82495 16.2576 4.68042 15.3904L15.8366 4.23411C16.1413 3.92942 16.5632 3.92942 16.8562 4.22239L23.3015 10.6677C23.5944 10.9607 23.5827 11.3708 23.2898 11.6638L12.1218 22.8318C11.2664 23.699 10.2234 23.6521 9.30933 22.7381L4.77417 18.2146ZM5.14917 13.5506L13.9616 22.3748L15.1335 21.2029L6.34448 12.4138L5.14917 13.5506Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_32906">
<rect width="23.3802" height="23.5786" fill="currentColor" transform="translate(2.07764 2.06006)"/>
</clipPath>
</defs>
</svg>

`;

export const Eraser = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
