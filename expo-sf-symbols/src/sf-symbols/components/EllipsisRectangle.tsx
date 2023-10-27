
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="28" height="29" viewBox="0 0 28 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_34761)">
<path d="M1.0083 19.0913C1.0083 21.3062 2.22705 22.4781 4.43018 22.4781H22.9575C25.1724 22.4781 26.3911 21.3062 26.3911 19.0913V9.42334C26.3911 7.22022 25.1724 6.06006 22.9575 6.06006H4.43018C2.22705 6.06006 1.0083 7.22022 1.0083 9.42334V19.0913ZM2.89502 19.1851V9.32959C2.89502 8.35694 3.4458 7.80615 4.41846 7.80615H22.981C23.9536 7.80615 24.5044 8.35694 24.5044 9.32959V19.1851C24.5044 20.1578 23.9536 20.7085 22.981 20.7085H4.41846C3.4458 20.7085 2.89502 20.1578 2.89502 19.1851Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M19.1841 15.9507C20.1099 15.9507 20.8833 15.189 20.8833 14.2515C20.8833 13.314 20.1099 12.5522 19.1841 12.5522C18.2466 12.5522 17.4849 13.314 17.4849 14.2515C17.4849 15.189 18.2466 15.9507 19.1841 15.9507Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.7114 15.9507C14.6489 15.9507 15.4106 15.189 15.4106 14.2515C15.4106 13.314 14.6489 12.5522 13.7114 12.5522C12.7739 12.5522 12.0122 13.314 12.0122 14.2515C12.0122 15.189 12.7739 15.9507 13.7114 15.9507Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.25049 15.9507C9.17627 15.9507 9.93799 15.189 9.93799 14.2515C9.93799 13.314 9.16455 12.5522 8.25049 12.5522C7.31299 12.5522 6.55127 13.314 6.55127 14.2515C6.55127 15.189 7.31299 15.9507 8.25049 15.9507Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34761">
<rect width="25.3828" height="16.418" fill="currentColor" transform="translate(1.0083 6.06006)"/>
</clipPath>
</defs>
</svg>

`;

export const EllipsisRectangle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
