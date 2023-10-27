
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
<g clip-path="url(#clip0_2207_33658)">
<path d="M4.02905 14.0527C4.02905 8.91992 7.82592 4.74805 12.7712 4.17383C16.1228 6.1543 17.9978 9.63477 17.9978 14.0527C17.9978 18.4707 16.1345 21.9394 12.8181 23.9316C7.84936 23.3691 4.02905 19.1855 4.02905 14.0527Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M2.02515 14.0527C2.02515 20.5801 7.45093 26.0058 13.9782 26.0058C20.5173 26.0058 25.9313 20.5801 25.9313 14.0527C25.9313 7.52539 20.5056 2.09961 13.9665 2.09961C7.43921 2.09961 2.02515 7.51367 2.02515 14.0527ZM4.02906 14.0527C4.02906 8.91992 7.82593 4.74805 12.7712 4.17383C16.1228 6.1543 17.9978 9.63477 17.9978 14.0527C17.9978 18.4707 16.1345 21.9394 12.8181 23.9316C7.84937 23.3691 4.02906 19.1855 4.02906 14.0527Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33658">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.02515 2.09961)"/>
</clipPath>
</defs>
</svg>

`;

export const MoonphaseWaxingCrescentInverse = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
