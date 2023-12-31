
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
<g clip-path="url(#clip0_2207_37581)">
<path d="M6.75537 24.6215H20.9702C23.4312 24.6215 24.6499 23.4027 24.6499 20.9886V6.68005C24.6499 4.26599 23.4312 3.04724 20.9702 3.04724H6.75537C4.30615 3.04724 3.07568 4.25427 3.07568 6.68005V20.9886C3.07568 23.4144 4.30615 24.6215 6.75537 24.6215Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.02882 14.473C8.5132 14.18 8.52492 13.4652 9.02882 13.1722L15.9077 9.10582C16.4234 8.78941 17.1148 9.03551 17.1148 9.62145V18.0238C17.1148 18.598 16.4702 18.8793 15.9077 18.5394L9.02882 14.473Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37581">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.07568 3.0238)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowtriangleLeftSquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
