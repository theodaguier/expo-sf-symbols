
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
<g clip-path="url(#clip0_2207_37584)">
<path d="M13.9782 25.93C20.5173 25.93 25.9313 20.5043 25.9313 13.9769C25.9313 7.43786 20.5056 2.0238 13.9665 2.0238C7.43921 2.0238 2.02515 7.43786 2.02515 13.9769C2.02515 20.5043 7.45093 25.93 13.9782 25.93ZM13.9782 23.9379C8.44703 23.9379 4.02906 19.5082 4.02906 13.9769C4.02906 8.44568 8.43531 4.01599 13.9665 4.01599C19.4978 4.01599 23.9392 8.44568 23.9392 13.9769C23.9392 19.5082 19.5095 23.9379 13.9782 23.9379Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.24391 14.6097L15.9119 18.559C16.4627 18.8871 17.0838 18.6176 17.0838 18.055V9.91055C17.0838 9.33633 16.4158 9.10195 15.9119 9.40664L9.24391 13.3558C8.75172 13.6371 8.74 14.3285 9.24391 14.6097Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37584">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.02515 2.0238)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowtriangleBackwardCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
