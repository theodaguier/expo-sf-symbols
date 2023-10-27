
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
<g clip-path="url(#clip0_2207_32945)">
<path d="M1.04614 20.8838C1.04614 23.3096 2.27661 24.5166 4.72583 24.5166H24.3313C26.4289 24.5166 27.6594 23.2979 27.6594 20.8838V11.2744H1.04614V20.8838ZM1.04614 9.73926H27.6594V8.84863C27.6594 6.43457 26.4172 5.21582 23.9797 5.21582H12.7297C11.9328 5.21582 11.4523 5.02832 10.8665 4.52441L10.1516 3.93848C9.37817 3.28223 8.78052 3.07129 7.62036 3.07129H4.28052C2.22973 3.07129 1.04614 4.24317 1.04614 6.59863V9.73926Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_32945">
<rect width="26.6133" height="21.5977" fill="currentColor" transform="translate(1.04614 3.07129)"/>
</clipPath>
</defs>
</svg>

`;

export const FolderFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
