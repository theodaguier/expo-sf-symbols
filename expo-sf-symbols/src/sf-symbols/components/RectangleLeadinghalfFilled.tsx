
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
<g clip-path="url(#clip0_2207_34161)">
<path d="M0.00415039 21.0737C0.00415039 23.4878 1.23462 24.6948 3.68384 24.6948H23.9573C26.4183 24.6948 27.6369 23.4878 27.6369 21.0737V6.75342C27.6369 4.33936 26.4183 3.12061 23.9573 3.12061H3.68384C1.23462 3.12061 0.00415039 4.33936 0.00415039 6.75342V21.0737ZM13.844 22.8081V5.00733H23.9339C25.094 5.00733 25.7502 5.64014 25.7502 6.85889V20.9683C25.7502 22.187 25.094 22.8081 23.9339 22.8081H13.844Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34161">
<rect width="27.6328" height="21.5742" fill="currentColor" transform="translate(0.00415039 3.12061)"/>
</clipPath>
</defs>
</svg>

`;

export const RectangleLeadinghalfFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
