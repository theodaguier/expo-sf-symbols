
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
<g clip-path="url(#clip0_2207_34030)">
<path d="M14.0183 26.0468C20.5574 26.0468 25.9714 20.6211 25.9714 14.0937C25.9714 7.55469 20.5457 2.14062 14.0066 2.14062C7.47925 2.14062 2.06519 7.55469 2.06519 14.0937C2.06519 20.6211 7.49097 26.0468 14.0183 26.0468ZM14.0183 24.0547C8.48707 24.0547 4.0691 19.625 4.0691 14.0937C4.0691 8.56251 8.47535 4.13282 14.0066 4.13282C19.5379 4.13282 23.9675 8.56251 23.9793 14.0937C23.991 19.625 19.5496 24.0547 14.0183 24.0547Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M14.0183 21.5234C18.0847 21.5234 21.448 18.1484 21.448 14.0937C21.448 10.0273 18.073 6.65234 14.0183 6.65234C9.9519 6.65234 6.58862 10.0273 6.58862 14.0937C6.58862 18.1484 9.96362 21.5234 14.0183 21.5234ZM14.0183 19.6367C11.0066 19.6367 8.47534 17.1054 8.47534 14.0937C8.47534 11.0586 10.9949 8.53906 14.0183 8.53906C17.03 8.53906 19.5613 11.0703 19.5613 14.0937C19.5613 17.1172 17.0418 19.6367 14.0183 19.6367Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M14.03 17.1289C15.6941 17.1289 17.0652 15.7695 17.0652 14.082C17.0652 12.4179 15.6941 11.0586 14.03 11.0586C12.3543 11.0586 10.9832 12.4179 10.9832 14.082C10.9832 15.7695 12.3543 17.1289 14.03 17.1289Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34030">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.06519 2.14062)"/>
</clipPath>
</defs>
</svg>

`;

export const Target = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
