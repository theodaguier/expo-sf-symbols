
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="32" height="29" viewBox="0 0 32 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_36941)">
<path d="M27.6012 24.3858H30.4488C31.1754 24.3858 31.6676 23.8701 31.6676 23.1084V5.31933C31.6676 4.55762 31.1754 4.04199 30.4488 4.04199H27.6012C26.8746 4.04199 26.3707 4.55762 26.3707 5.31933V23.1084C26.3707 23.8701 26.8746 24.3858 27.6012 24.3858Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M18.8356 24.3858H21.6598C22.3863 24.3858 22.8902 23.8701 22.8902 23.1084V9.94824C22.8902 9.18652 22.3863 8.6709 21.6598 8.6709H18.8356C18.0973 8.6709 17.6051 9.18652 17.6051 9.94824V23.1084C17.6051 23.8701 18.0973 24.3858 18.8356 24.3858Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.0582 24.3858H12.8824C13.6207 24.3858 14.1129 23.8701 14.1129 23.1084V14.1904C14.1129 13.4287 13.6207 12.9131 12.8824 12.9131H10.0582C9.31995 12.9131 8.82776 13.4287 8.82776 14.1904V23.1084C8.82776 23.8701 9.31995 24.3858 10.0582 24.3858Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M1.28088 24.3858H4.1051C4.84338 24.3858 5.33558 23.8701 5.33558 23.1084V17.8467C5.33558 17.085 4.84338 16.5811 4.1051 16.5811H1.28088C0.542603 16.5811 0.050415 17.085 0.050415 17.8467V23.1084C0.050415 23.8701 0.542603 24.3858 1.28088 24.3858Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36941">
<rect width="31.6172" height="20.3555" fill="currentColor" transform="translate(0.050415 4.04199)"/>
</clipPath>
</defs>
</svg>

`;

export const Cellularbars = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
