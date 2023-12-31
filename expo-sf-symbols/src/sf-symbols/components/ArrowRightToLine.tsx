
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
<g clip-path="url(#clip0_2207_37491)">
<path d="M15.2778 22.7824C15.559 22.7824 15.8051 22.6887 16.0395 22.466L23.8325 14.6848C24.0668 14.4622 24.184 14.1926 24.184 13.8997C24.184 13.6184 24.0668 13.3489 23.8325 13.1145L16.0395 5.34497C15.8051 5.12231 15.559 5.01685 15.2778 5.01685C14.7036 5.01685 14.2583 5.45044 14.2583 6.02466C14.2583 6.30591 14.352 6.58716 14.5395 6.77466L17.1645 9.43482L21.77 13.6418L22.0044 12.9856L18.5122 12.8567H3.06689C2.45752 12.8567 2.03564 13.2903 2.03564 13.8997C2.03564 14.509 2.45752 14.9543 3.06689 14.9543H18.5122L22.0044 14.8254L21.77 14.1809L17.1645 18.3645L14.5395 21.0363C14.352 21.2238 14.2583 21.5051 14.2583 21.7746C14.2583 22.3606 14.7036 22.7824 15.2778 22.7824ZM25.227 22.7824C25.8364 22.7824 26.2817 22.3723 26.2817 21.7746V6.05982C26.2817 5.45044 25.8364 5.01685 25.227 5.01685C24.6176 5.01685 24.184 5.45044 24.184 6.05982V21.7746C24.184 22.3723 24.6176 22.7824 25.227 22.7824Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37491">
<rect width="24.2461" height="18.2227" fill="currentColor" transform="translate(2.03564 5.01685)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowRightToLine = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
