
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
<g clip-path="url(#clip0_2207_36847)">
<path d="M9.92236 24.4711H17.2934C24.0903 24.4711 27.1255 21.3422 27.1255 14.9438V7.58435C27.1255 5.22888 25.9067 4.03357 23.5278 4.03357H3.68799C1.30908 4.03357 0.090332 5.22888 0.090332 7.58435V14.9438C0.090332 21.3422 3.12549 24.4711 9.92236 24.4711ZM9.92236 22.5844C4.39111 22.5844 1.97705 20.182 1.97705 15.0609V7.68982C1.97705 6.51795 2.58642 5.92029 3.73486 5.92029H23.4809C24.6059 5.92029 25.2387 6.51795 25.2387 7.68982V15.0609C25.2387 20.182 22.8247 22.5844 17.2817 22.5844H9.92236Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36847">
<rect width="27.0352" height="20.4492" fill="currentColor" transform="translate(0.090332 4.03357)"/>
</clipPath>
</defs>
</svg>

`;

export const ButtonRoundedbottomHorizontal = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
