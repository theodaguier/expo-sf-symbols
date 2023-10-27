
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="34" height="29" viewBox="0 0 34 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_35407)">
<path d="M5.84668 20.5117V7.12891C5.84668 6.37891 6.22168 6.00391 6.97168 6.00391H26.9638C27.7138 6.00391 28.0888 6.37891 28.0888 7.12891V20.5117H5.84668Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M0.0693359 21.8477C0.0693359 22.586 0.666992 23.1835 1.39356 23.1835H32.542C33.2685 23.1835 33.8662 22.586 33.8662 21.8477C33.8662 21.1094 33.2685 20.5117 32.542 20.5117H29.9755V6.60156C29.9755 4.96094 29.0966 4.11719 27.4677 4.11719H6.46778C4.9209 4.11719 3.95996 4.96094 3.95996 6.60156V20.5117H1.39356C0.666992 20.5117 0.0693359 21.1094 0.0693359 21.8477ZM5.84668 20.5117V7.12891C5.84668 6.37891 6.22168 6.00391 6.97168 6.00391H26.9638C27.7138 6.00391 28.0888 6.37891 28.0888 7.12891V20.5117H5.84668Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35407">
<rect width="33.7969" height="19.0898" fill="currentColor" transform="translate(0.0693359 4.09375)"/>
</clipPath>
</defs>
</svg>

`;

export const MacbookGen1 = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
