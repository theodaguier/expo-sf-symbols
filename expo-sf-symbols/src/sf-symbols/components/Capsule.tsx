
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="31" height="29" viewBox="0 0 31 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_34294)">
<path d="M0.0146484 14.263C0.0146484 21.0481 4.69043 25.4895 11.7451 25.4895H18.3662C25.4208 25.4895 30.1084 21.0481 30.1084 14.263C30.1084 7.47779 25.4208 3.03638 18.3662 3.03638H11.7451C4.69043 3.03638 0.0146484 7.47779 0.0146484 14.263ZM1.90137 14.263C1.90137 8.68482 5.89746 4.9231 11.7451 4.9231H18.3662C24.2255 4.9231 28.2216 8.68482 28.2216 14.263C28.2216 19.8411 24.2255 23.6028 18.3662 23.6028H11.7451C5.89746 23.6028 1.90137 19.8411 1.90137 14.263Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34294">
<rect width="30.0938" height="22.4648" fill="currentColor" transform="translate(0.0146484 3.03638)"/>
</clipPath>
</defs>
</svg>

`;

export const Capsule = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
