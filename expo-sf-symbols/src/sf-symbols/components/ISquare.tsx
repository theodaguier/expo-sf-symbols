
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
<g clip-path="url(#clip0_2207_37657)">
<path d="M6.71118 24.6788H20.926C23.387 24.6788 24.6057 23.46 24.6057 21.0459V6.7373C24.6057 4.32324 23.387 3.10449 20.926 3.10449H6.71118C4.26196 3.10449 3.03149 4.31152 3.03149 6.7373V21.0459C3.03149 23.4717 4.26196 24.6788 6.71118 24.6788ZM6.73461 22.792C5.56274 22.792 4.91821 22.1709 4.91821 20.9522V6.83105C4.91821 5.6123 5.56274 4.99121 6.73461 4.99121H20.9026C22.0627 4.99121 22.719 5.6123 22.719 6.83105V20.9522C22.719 22.1709 22.0627 22.792 20.9026 22.792H6.73461Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.8127 19.2413C14.4221 19.2413 14.762 18.8311 14.762 18.1866V9.33887C14.762 8.69434 14.4221 8.28418 13.8127 8.28418C13.2151 8.28418 12.887 8.71778 12.887 9.33887V18.1866C12.887 18.8077 13.2151 19.2413 13.8127 19.2413Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37657">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.03149 3.08105)"/>
</clipPath>
</defs>
</svg>

`;

export const ISquare = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
