
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
<g clip-path="url(#clip0_2207_37205)">
<path d="M3.71533 24.6719H23.9887C26.4497 24.6719 27.6684 23.4649 27.6684 21.0508V6.73047C27.6684 4.31641 26.4497 3.09766 23.9887 3.09766H3.71533C1.26611 3.09766 0.0356445 4.31641 0.0356445 6.73047V21.0508C0.0356445 23.4649 1.26611 24.6719 3.71533 24.6719ZM3.73876 22.7852C2.56689 22.7852 1.92236 22.1641 1.92236 20.9454V6.83594C1.92236 5.61719 2.56689 4.98438 3.73876 4.98438H23.9653C25.1254 4.98438 25.7817 5.61719 25.7817 6.83594V20.9454C25.7817 22.1641 25.1254 22.7852 23.9653 22.7852H3.73876Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.27002 14.875H18.4575C19.1137 14.875 19.5708 14.5235 19.5708 13.9024C19.5708 13.2696 19.1489 12.9062 18.4575 12.9062H9.27002C8.59033 12.9062 8.14502 13.2696 8.14502 13.9024C8.14502 14.5235 8.61376 14.875 9.27002 14.875Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37205">
<rect width="27.6328" height="21.5742" fill="currentColor" transform="translate(0.0356445 3.09766)"/>
</clipPath>
</defs>
</svg>

`;

export const MinusRectangle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
