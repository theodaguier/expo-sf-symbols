
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
<g clip-path="url(#clip0_2207_34995)">
<path d="M6.73633 24.6875H20.9511C23.4121 24.6875 24.6308 23.4687 24.6308 21.0546V6.74609C24.6308 4.33203 23.4121 3.11328 20.9511 3.11328H6.73633C4.28711 3.11328 3.05664 4.32031 3.05664 6.74609V21.0546C3.05664 23.4804 4.28711 24.6875 6.73633 24.6875ZM6.75976 22.8007C5.58789 22.8007 4.94336 22.1796 4.94336 20.9609V6.83984C4.94336 5.62109 5.58789 5 6.75976 5H20.9277C22.0878 5 22.7441 5.62109 22.7441 6.83984V20.9609C22.7441 22.1796 22.0878 22.8007 20.9277 22.8007H6.75976Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.7207 20H16.9668C17.4589 20 17.8222 19.6367 17.8222 19.1445V8.65625C17.8222 8.14062 17.4589 7.78906 16.9668 7.78906H10.7207C10.2285 7.78906 9.86523 8.14062 9.86523 8.65625V19.1445C9.86523 19.6367 10.2285 20 10.7207 20ZM11.5762 12.8164C11.3535 12.8164 11.1895 12.6406 11.1895 12.4063V9.51172C11.1895 9.26562 11.3535 9.11328 11.5762 9.11328H16.1113C16.3457 9.11328 16.498 9.26562 16.498 9.51172V12.4063C16.498 12.6406 16.3457 12.8164 16.1113 12.8164H11.5762Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34995">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.05664 3.08984)"/>
</clipPath>
</defs>
</svg>

`;

export const LightswitchOnSquare = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
