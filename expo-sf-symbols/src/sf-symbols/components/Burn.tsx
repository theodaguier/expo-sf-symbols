
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
<g clip-path="url(#clip0_2207_37050)">
<path d="M2.04407 13.9867C2.04407 20.5141 7.46985 25.9398 13.9972 25.9398C20.5363 25.9398 25.9503 20.5141 25.9503 13.9867C25.9503 7.44763 20.5246 2.03357 13.9855 2.03357C7.45813 2.03357 2.04407 7.44763 2.04407 13.9867ZM4.04798 13.9867H13.9738L9.00501 5.34998C10.4581 4.49451 12.1691 4.02576 13.9855 4.02576C15.8019 4.02576 17.5129 4.49451 18.966 5.34998L13.9738 13.9867H23.9582C23.9699 17.7016 21.966 20.9242 18.9777 22.6234L13.9738 13.9867L9.00501 22.6117C6.02845 20.9008 4.04798 17.6898 4.04798 13.9867Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37050">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.04407 2.03357)"/>
</clipPath>
</defs>
</svg>

`;

export const Burn = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
