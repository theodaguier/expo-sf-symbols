
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
<g clip-path="url(#clip0_2207_34357)">
<path d="M26.2043 12.8941C26.7434 11.1948 26.3215 9.83545 24.9035 8.8042L15.927 2.20654C14.4621 1.1167 13.0207 1.1167 11.5442 2.20654L2.56763 8.8042C1.16139 9.83545 0.73951 11.2066 1.29029 12.9409L4.72388 23.6402C5.25123 25.3159 6.4231 26.1714 8.20435 26.1714H19.2785C21.0598 26.1714 22.2199 25.3159 22.759 23.6402L26.2043 12.8941ZM13.7473 3.28467V24.2847H8.20435C7.25513 24.2847 6.78638 23.9566 6.49342 23.0659L3.07154 12.355C2.76685 11.4409 2.94263 10.8901 3.71607 10.3159L12.6809 3.70654C13.0676 3.41357 13.4192 3.28467 13.7473 3.28467Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34357">
<rect width="25.3737" height="25.0664" fill="currentColor" transform="translate(1.05664 1.10498)"/>
</clipPath>
</defs>
</svg>

`;

export const PentagonRighthalfFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
