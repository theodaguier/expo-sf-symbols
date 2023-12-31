
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
<g clip-path="url(#clip0_2207_34607)">
<path d="M8.04907 26.9482C8.5061 26.9482 8.84594 26.7138 9.39672 26.1982L13.6272 22.331H21.549C25.0412 22.331 26.9162 20.4092 26.9162 16.9756V7.99903C26.9162 4.56544 25.0412 2.63184 21.549 2.63184H6.45532C2.96313 2.63184 1.08813 4.55372 1.08813 7.99903V16.9756C1.08813 20.4209 2.96313 22.331 6.45532 22.331H7.0061V25.7412C7.0061 26.4677 7.3811 26.9482 8.04907 26.9482Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M14.0139 14.6553C13.4045 14.6553 13.0647 14.3154 13.0529 13.6943L12.9006 7.31933C12.8889 6.69824 13.3459 6.24121 14.0022 6.24121C14.6467 6.24121 15.1272 6.70996 15.1154 7.33105L14.9397 13.6943C14.9279 14.3271 14.5881 14.6553 14.0139 14.6553ZM14.0139 18.581C13.3108 18.581 12.7014 18.0303 12.7014 17.3271C12.7014 16.6357 13.299 16.0732 14.0139 16.0732C14.717 16.0732 15.3147 16.624 15.3147 17.3271C15.3147 18.042 14.7053 18.581 14.0139 18.581Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_34607">
<rect width="25.8281" height="25.8867" fill="currentColor" transform="translate(1.08813 1.06152)"/>
</clipPath>
</defs>
</svg>

`;

export const ExclamationmarkBubbleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
