
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
<g clip-path="url(#clip0_2207_37480)">
<path d="M3.04932 22.7824C3.67041 22.7824 4.10401 22.3723 4.10401 21.7746V6.05982C4.10401 5.45044 3.67041 5.01685 3.04932 5.01685C2.43994 5.01685 2.00635 5.45044 2.00635 6.05982V21.7746C2.00635 22.3723 2.43994 22.7824 3.04932 22.7824ZM12.9985 22.7824C13.5844 22.7824 14.0297 22.3606 14.0297 21.7746C14.0297 21.5051 13.9243 21.2238 13.7485 21.0363L11.1235 18.3645L6.51807 14.1809L6.28369 14.8254L9.77588 14.9543H25.2211C25.8188 14.9543 26.2524 14.509 26.2524 13.8997C26.2524 13.2903 25.8188 12.8567 25.2211 12.8567H9.77588L6.28369 12.9856L6.51807 13.6418L11.1235 9.43482L13.7485 6.77466C13.9243 6.58716 14.0297 6.30591 14.0297 6.02466C14.0297 5.45044 13.5844 5.01685 12.9985 5.01685C12.729 5.01685 12.4829 5.12231 12.2485 5.34497L4.45557 13.1145C4.22119 13.3489 4.09229 13.6184 4.09229 13.8997C4.09229 14.1926 4.22119 14.4622 4.45557 14.6848L12.2485 22.466C12.4829 22.6887 12.729 22.7824 12.9985 22.7824Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37480">
<rect width="24.2461" height="18.2227" fill="currentColor" transform="translate(2.00635 5.01685)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowLeftToLine = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
