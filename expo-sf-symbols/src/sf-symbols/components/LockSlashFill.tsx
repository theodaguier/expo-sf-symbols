
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
<g clip-path="url(#clip0_2207_35295)">
<path d="M8.87232 25.7236H19.6067C21.3176 25.7236 22.2317 24.7861 22.2317 22.9345V14.8603C22.2317 13.0088 21.3176 12.083 19.6067 12.083H8.87232C7.14966 12.083 6.2356 13.0088 6.2356 14.8603V22.9345C6.2356 24.7861 7.14966 25.7236 8.87232 25.7236ZM8.2981 12.9853H10.1497V9.02442C10.1497 6.0713 12.0481 4.50099 14.2395 4.50099C16.4309 4.50099 18.3293 6.0713 18.3293 9.02442V12.9853H20.1926V9.28224C20.1926 4.87599 17.3098 2.73145 14.2395 2.73145C11.1692 2.73145 8.2981 4.87599 8.2981 9.28224V12.9853Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M22.7708 27.3174C23.6731 28.208 25.1262 28.208 25.9934 27.2939C26.8606 26.4033 26.8606 24.9853 25.9817 24.1064L5.88404 4.02051C5.00513 3.12988 3.552 3.12988 2.66138 4.02051C1.78247 4.88769 1.78247 6.35254 2.66138 7.23144L22.7708 27.3174Z" fill="currentColor"/>
<path d="M23.7434 26.3447C24.095 26.6963 24.6692 26.6963 25.0208 26.3447C25.3606 25.9931 25.3723 25.4189 25.0208 25.0674L4.9231 4.98144C4.57154 4.62988 3.9856 4.62988 3.63404 4.98144C3.29419 5.33301 3.29419 5.91894 3.63404 6.25879L23.7434 26.3447Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35295">
<rect width="24.6401" height="26.8887" fill="currentColor" transform="translate(2.0022 1.09375)"/>
</clipPath>
</defs>
</svg>

`;

export const LockSlashFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
