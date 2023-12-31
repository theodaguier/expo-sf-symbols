
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
<g clip-path="url(#clip0_2207_35250)">
<path d="M16.2083 7.13135V3.07666C16.2083 2.56104 15.7747 2.12744 15.259 2.12744C14.7434 2.12744 14.3215 2.56104 14.3215 3.07666V7.13135H16.2083ZM23.6028 17.0688C25.1965 17.0688 26.0872 16.1899 26.0872 14.6196V8.09228C26.0872 6.52197 25.1965 5.65478 23.6028 5.65478H8.29814C7.25517 5.65478 6.76298 5.97119 6.16532 6.55713L3.04814 9.52197C1.73564 10.7876 1.78252 11.9712 3.03642 13.1782L6.16532 16.1665C6.76298 16.7407 7.25517 17.0688 8.30986 17.0688H23.6028ZM16.2083 16.4008H14.3215V26.7368H16.2083V16.4008ZM20.7083 25.8579C20.7083 25.3422 20.2864 24.9086 19.7708 24.9086H10.7356C10.22 24.9086 9.79814 25.3422 9.79814 25.8579C9.79814 26.3735 10.22 26.7954 10.7356 26.7954H19.7708C20.2864 26.7954 20.7083 26.3735 20.7083 25.8579Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35250">
<rect width="24.0074" height="24.6914" fill="currentColor" transform="translate(2.07983 2.12744)"/>
</clipPath>
</defs>
</svg>

`;

export const SignpostLeftFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
