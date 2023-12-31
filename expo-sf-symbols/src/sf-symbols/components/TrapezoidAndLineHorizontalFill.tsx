
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
<g clip-path="url(#clip0_2207_37023)">
<path d="M7.68591 22.4102L20.3656 24.625C22.6508 25.0235 24.1742 23.8047 24.1742 21.5664V7.28131C24.1742 5.04303 22.6508 3.81256 20.3656 4.22272L7.68591 6.44928C5.43591 6.836 4.2406 8.04303 4.2406 9.94147V18.9063C4.2406 20.793 5.43591 22.0117 7.68591 22.4102ZM0.971069 15.3086C0.385131 15.3086 0.0335693 14.9688 0.0335693 14.4297C0.0335693 13.8673 0.385131 13.5391 0.971069 13.5391H27.4438C28.0297 13.5391 28.3813 13.8673 28.3813 14.4297C28.3813 14.9688 28.0297 15.3086 27.4438 15.3086H0.971069Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37023">
<rect width="28.3477" height="20.7228" fill="currentColor" transform="translate(0.0335693 4.14453)"/>
</clipPath>
</defs>
</svg>

`;

export const TrapezoidAndLineHorizontalFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
