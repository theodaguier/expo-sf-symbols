
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="29" height="31" viewBox="0 0 29 31" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_33495)">
<path d="M1.33644 29.2647C2.78956 30.7178 4.688 30.9639 7.16066 30.0264C11.2036 28.4678 15.8442 25.1045 20.1801 20.7686C28.2778 12.6709 30.8559 6.38968 27.5395 3.07327C24.2231 -0.243139 17.9301 2.32327 9.83253 10.4209C5.49659 14.7569 2.14503 19.4092 0.586434 23.4522C-0.362785 25.9131 -0.104972 27.8116 1.33644 29.2647ZM2.67238 27.9405C1.67628 26.9327 1.60597 25.5147 2.438 23.6749C4.26613 19.7256 7.43019 15.4834 11.1567 11.7452C18.3169 4.58499 23.7192 1.90139 26.2036 4.39749C28.7114 6.89358 26.0161 12.2842 18.8559 19.4444C15.1294 23.1827 10.8755 26.335 6.938 28.1631C5.09816 29.0069 3.66847 28.9366 2.67238 27.9405ZM1.73488 28.1514L2.44972 28.878L27.0473 4.29202L26.3208 3.56546L1.73488 28.1514Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33495">
<rect width="28.9223" height="30.443" fill="currentColor" transform="translate(0.0251465 0.138672)"/>
</clipPath>
</defs>
</svg>

`;

export const Surfboard = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
