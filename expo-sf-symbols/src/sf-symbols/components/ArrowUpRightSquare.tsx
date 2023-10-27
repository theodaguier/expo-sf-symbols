
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
<g clip-path="url(#clip0_2207_37369)">
<path d="M6.77002 24.6174H20.9848C23.4458 24.6174 24.6645 23.3986 24.6645 20.9845V6.6759C24.6645 4.26184 23.4458 3.04309 20.9848 3.04309H6.77002C4.3208 3.04309 3.09033 4.25012 3.09033 6.6759V20.9845C3.09033 23.4103 4.3208 24.6174 6.77002 24.6174ZM6.79345 22.7306C5.62158 22.7306 4.97705 22.1095 4.97705 20.8908V6.76965C4.97705 5.5509 5.62158 4.92981 6.79345 4.92981H20.9614C22.1215 4.92981 22.7778 5.5509 22.7778 6.76965V20.8908C22.7778 22.1095 22.1215 22.7306 20.9614 22.7306H6.79345Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M17.5512 16.7189C18.0669 16.7189 18.4184 16.3205 18.4184 15.7814V10.2501C18.4184 9.55871 18.0317 9.28918 17.4341 9.28918H11.8794C11.3286 9.28918 10.9771 9.62903 10.9771 10.1447C10.9771 10.6603 11.3403 11.0001 11.9028 11.0001H14.0356L15.77 10.8126L13.9419 12.5118L9.61767 16.8361C9.45361 17.0002 9.34814 17.2345 9.34814 17.4689C9.34814 17.9963 9.68799 18.3361 10.2036 18.3361C10.4849 18.3361 10.7075 18.2306 10.8716 18.0666L15.1841 13.7541L16.8715 11.9493L16.6958 13.7775V15.8049C16.6958 16.3556 17.0356 16.7189 17.5512 16.7189Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37369">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.09033 3.01965)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowUpRightSquare = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
