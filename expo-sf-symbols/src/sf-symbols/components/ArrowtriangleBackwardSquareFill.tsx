
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
<g clip-path="url(#clip0_2207_37587)">
<path d="M6.71326 24.6215H20.9281C23.3891 24.6215 24.6078 23.4027 24.6078 20.9886V6.68005C24.6078 4.26599 23.3891 3.04724 20.9281 3.04724H6.71326C4.26404 3.04724 3.03357 4.25427 3.03357 6.68005V20.9886C3.03357 23.4144 4.26404 24.6215 6.71326 24.6215Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.9867 14.473C8.47108 14.18 8.4828 13.4652 8.9867 13.1722L15.8656 9.10582C16.3813 8.78941 17.0727 9.03551 17.0727 9.62145V18.0238C17.0727 18.598 16.4281 18.8793 15.8656 18.5394L8.9867 14.473Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37587">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.03357 3.0238)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowtriangleBackwardSquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
