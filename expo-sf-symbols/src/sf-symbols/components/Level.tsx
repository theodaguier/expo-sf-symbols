
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
<g clip-path="url(#clip0_2207_34850)">
<path d="M4.80518 19.4551H5.93018V9.44727H4.80518V19.4551ZM22.8051 19.4551H23.9301V9.44727H22.8051V19.4551ZM14.3676 14.9902C17.895 14.9902 20.5083 12.7871 20.7661 9.44727H19.5122C19.3129 12.1426 17.2036 13.9238 14.3676 13.9238C11.52 13.9238 9.41065 12.1426 9.21143 9.44727H7.95753C8.22706 12.7871 10.8403 14.9902 14.3676 14.9902Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M3.21142 20.8027H25.5239C27.6215 20.8027 28.6997 19.7246 28.6997 17.6504V11.252C28.6997 9.17773 27.6098 8.09961 25.5122 8.09961H3.1997C1.10205 8.09961 0.0356445 9.17773 0.0356445 11.252V17.6504C0.0356445 19.7246 1.11376 20.8027 3.21142 20.8027ZM3.49267 18.916C2.49658 18.916 1.92236 18.3652 1.92236 17.3106V11.5918C1.92236 10.5371 2.49658 9.98633 3.50439 9.98633H25.2309C26.2387 9.98633 26.8012 10.5371 26.8012 11.5918V17.3106C26.8012 18.3652 26.2387 18.916 25.2192 18.916H3.49267ZM14.3676 12.1895C15.9614 12.1895 17.1333 11.1934 17.2622 9.68164H11.4731C11.5903 11.1934 12.7622 12.1895 14.3676 12.1895Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34850">
<rect width="28.6641" height="12.7148" fill="currentColor" transform="translate(0.0356445 8.08789)"/>
</clipPath>
</defs>
</svg>

`;

export const Level = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
