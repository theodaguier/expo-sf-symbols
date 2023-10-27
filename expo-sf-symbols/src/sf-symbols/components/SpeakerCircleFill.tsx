
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
<g clip-path="url(#clip0_2207_33903)">
<path d="M13.9951 26.0484C20.5342 26.0484 25.9482 20.6343 25.9482 14.0952C25.9482 7.56787 20.5225 2.14209 13.9834 2.14209C7.45605 2.14209 2.04199 7.56787 2.04199 14.0952C2.04199 20.6343 7.46777 26.0484 13.9951 26.0484Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M16.2334 19.896C15.917 19.896 15.6592 19.7788 15.3662 19.4859L12.5889 16.8257C12.5537 16.7906 12.46 16.7788 12.4014 16.7788H10.5381C9.62402 16.7788 9.15527 16.2866 9.15527 15.3374V12.8999C9.15527 11.939 9.62402 11.4585 10.5381 11.4585H12.4014C12.46 11.4585 12.5537 11.4468 12.5889 11.3999L15.3662 8.7749C15.7061 8.44678 15.9053 8.32959 16.2217 8.32959C16.6553 8.32959 16.9717 8.66943 16.9717 9.09131V19.1577C16.9717 19.5913 16.6553 19.896 16.2334 19.896Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_33903">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.04199 2.13037)"/>
</clipPath>
</defs>
</svg>

`;

export const SpeakerCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
