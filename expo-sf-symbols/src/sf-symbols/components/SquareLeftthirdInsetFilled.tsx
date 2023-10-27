
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
<g clip-path="url(#clip0_2207_34076)">
<path d="M6.74903 24.7305H20.9638C23.4248 24.7305 24.6435 23.5117 24.6435 21.0976V6.78906C24.6435 4.375 23.4248 3.15625 20.9638 3.15625H6.74903C4.29981 3.15625 3.06934 4.36328 3.06934 6.78906V21.0976C3.06934 23.5234 4.29981 24.7305 6.74903 24.7305ZM6.77246 22.8437C5.60059 22.8437 4.95606 22.2226 4.95606 21.0039V6.88281C4.95606 5.66406 5.60059 5.04297 6.77246 5.04297H20.9404C22.1005 5.04297 22.7568 5.66406 22.7568 6.88281V21.0039C22.7568 22.2226 22.1005 22.8437 20.9404 22.8437H6.77246Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.2139 7.66797C11.2139 6.92969 10.9092 6.63672 10.1592 6.63672H7.60449C6.85449 6.63672 6.5498 6.92969 6.5498 7.66797V20.2187C6.5498 20.9453 6.85449 21.2383 7.60449 21.2383H10.1592C10.9092 21.2383 11.2139 20.9453 11.2139 20.2187V7.66797Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34076">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.06934 3.13281)"/>
</clipPath>
</defs>
</svg>

`;

export const SquareLeftthirdInsetFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
