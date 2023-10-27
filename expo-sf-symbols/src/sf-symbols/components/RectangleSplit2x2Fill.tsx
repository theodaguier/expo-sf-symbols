
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
<g clip-path="url(#clip0_2207_34174)">
<path d="M0.0922852 14.8755V12.9888H12.9712V3.14502H14.8579V12.9888H27.7251V14.8755H14.8579V24.7193H12.9712V14.8755H0.0922852ZM3.77198 24.7193H24.0454C26.5064 24.7193 27.7251 23.5005 27.7251 21.0864V6.76611C27.7251 4.35205 26.5064 3.14502 24.0454 3.14502H3.77198C1.32276 3.14502 0.0922852 4.35205 0.0922852 6.76611V21.0864C0.0922852 23.5005 1.32276 24.7193 3.77198 24.7193Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34174">
<rect width="27.6328" height="21.5977" fill="currentColor" transform="translate(0.0922852 3.12158)"/>
</clipPath>
</defs>
</svg>

`;

export const RectangleSplit2x2Fill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
