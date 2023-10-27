
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
<g clip-path="url(#clip0_2207_37324)">
<path d="M3.06714 13.8982C3.06714 14.1912 3.19604 14.4607 3.43042 14.6834L11.2117 22.4529C11.446 22.6756 11.6921 22.781 11.9734 22.781C12.5476 22.781 13.0046 22.3592 13.0046 21.7732C13.0046 21.492 12.8992 21.2107 12.7117 21.0349L10.0867 18.3631L5.44605 14.1326L5.19995 14.7068L8.97339 14.9412H23.7976C24.4069 14.9412 24.8288 14.5076 24.8288 13.8982C24.8288 13.2888 24.4069 12.8552 23.7976 12.8552H8.97339L5.19995 13.0896L5.44605 13.6755L10.0867 9.43335L12.7117 6.76147C12.8992 6.57397 13.0046 6.30444 13.0046 6.02319C13.0046 5.43726 12.5476 5.01538 11.9734 5.01538C11.6921 5.01538 11.446 5.10913 11.1882 5.36694L3.43042 13.113C3.19604 13.3357 3.06714 13.6052 3.06714 13.8982Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37324">
<rect width="21.7617" height="17.7773" fill="currentColor" transform="translate(3.06714 5.01538)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowLeft = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
