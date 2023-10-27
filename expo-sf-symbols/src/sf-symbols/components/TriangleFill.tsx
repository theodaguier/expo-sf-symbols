
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
<g clip-path="url(#clip0_2207_34323)">
<path d="M5.20557 25.4111H23.3696C25.3618 25.4111 26.5688 24.0283 26.5688 22.2353C26.5688 21.6846 26.4047 21.1103 26.1118 20.5947L17.018 4.75098C16.4086 3.68457 15.3657 3.14551 14.2875 3.14551C13.2094 3.14551 12.1547 3.68457 11.5571 4.75098L2.46338 20.5947C2.14697 21.1221 2.00635 21.6846 2.00635 22.2353C2.00635 24.0283 3.21338 25.4111 5.20557 25.4111Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34323">
<rect width="24.5625" height="22.3945" fill="currentColor" transform="translate(2.00635 3.14551)"/>
</clipPath>
</defs>
</svg>

`;

export const TriangleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
