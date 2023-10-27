
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
<g clip-path="url(#clip0_2207_35331)">
<path d="M6.69849 24.7081H20.9133C23.3743 24.7081 24.593 23.4893 24.593 21.0752V6.7666C24.593 4.35254 23.3743 3.13379 20.9133 3.13379H6.69849C4.24927 3.13379 3.0188 4.34082 3.0188 6.7666V21.0752C3.0188 23.501 4.24927 24.7081 6.69849 24.7081Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.06568 16.1768C9.06568 14.8995 10.0969 13.5166 11.8313 12.9072L12.0188 10.0713C11.1516 9.5791 10.4368 9.0166 10.1086 8.60644C9.93286 8.38379 9.83911 8.16113 9.83911 7.96191C9.83911 7.58691 10.1321 7.31738 10.5657 7.31738H17.0813C17.5149 7.31738 17.8079 7.58691 17.8079 7.96191C17.8079 8.16113 17.7141 8.37207 17.5618 8.59473C17.2336 9.00488 16.5071 9.56738 15.6282 10.0713L15.8274 12.9072C17.55 13.5166 18.5813 14.8995 18.5813 16.1768C18.5813 16.7159 18.2415 17.044 17.6907 17.044H14.5735V19.2002C14.5735 20.5127 14.0461 21.6026 13.8235 21.6026C13.6008 21.6026 13.0735 20.5127 13.0735 19.2002V17.044H9.9563C9.41724 17.044 9.06568 16.7159 9.06568 16.1768Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_35331">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.0188 3.11035)"/>
</clipPath>
</defs>
</svg>

`;

export const PinSquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
