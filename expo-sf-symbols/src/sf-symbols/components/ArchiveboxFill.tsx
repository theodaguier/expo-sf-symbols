
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
<g clip-path="url(#clip0_2207_33011)">
<path d="M7.30396 24.6104H20.1594C22.468 24.6104 23.6985 23.415 23.6985 21.1182V9.90332H3.76489V21.1182C3.76489 23.4268 4.99536 24.6104 7.30396 24.6104ZM9.87036 14.1338C9.37818 14.1338 9.03833 13.7939 9.03833 13.2783V12.915C9.03833 12.3994 9.37818 12.0713 9.87036 12.0713H17.6047C18.0969 12.0713 18.4485 12.3994 18.4485 12.915V13.2783C18.4485 13.7939 18.0969 14.1338 17.6047 14.1338H9.87036ZM4.01099 8.29786H23.4524C24.7766 8.29786 25.4446 7.5127 25.4446 6.2002V5.13379C25.4446 3.82129 24.7766 3.03613 23.4524 3.03613H4.01099C2.75708 3.03613 2.0188 3.82129 2.0188 5.13379V6.2002C2.0188 7.5127 2.68677 8.29786 4.01099 8.29786Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33011">
<rect width="23.4258" height="21.5977" fill="currentColor" transform="translate(2.0188 3.0127)"/>
</clipPath>
</defs>
</svg>

`;

export const ArchiveboxFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
