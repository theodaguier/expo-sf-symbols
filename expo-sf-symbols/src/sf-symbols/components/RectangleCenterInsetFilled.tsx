
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
<g clip-path="url(#clip0_2207_34198)">
<path d="M3.70703 24.6933H23.9804C26.4414 24.6933 27.6601 23.4863 27.6601 21.0722V6.75195C27.6601 4.33789 26.4414 3.11914 23.9804 3.11914H3.70703C1.25781 3.11914 0.0273438 4.33789 0.0273438 6.75195V21.0722C0.0273438 23.4863 1.25781 24.6933 3.70703 24.6933ZM3.73046 22.8066C2.55859 22.8066 1.91406 22.1855 1.91406 20.9668V6.85742C1.91406 5.63867 2.55859 5.00586 3.73046 5.00586H23.957C25.1171 5.00586 25.7734 5.63867 25.7734 6.85742V20.9668C25.7734 22.1855 25.1171 22.8066 23.957 22.8066H3.73046Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M7.42187 19.2558H20.2656C21.0859 19.2558 21.4257 18.916 21.4257 18.0722V9.75195C21.4257 8.9082 21.0859 8.55664 20.2656 8.55664H7.42187C6.61328 8.55664 6.26172 8.9082 6.26172 9.75195V18.0722C6.26172 18.916 6.61328 19.2558 7.42187 19.2558Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34198">
<rect width="27.6328" height="21.5742" fill="currentColor" transform="translate(0.0273438 3.11914)"/>
</clipPath>
</defs>
</svg>

`;

export const RectangleCenterInsetFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
