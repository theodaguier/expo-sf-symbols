
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
<g clip-path="url(#clip0_2207_36489)">
<path d="M3.08618 23.0266H4.99634V5.02661H3.08618V23.0266ZM6.8479 23.0266H7.93774V5.02661H6.8479V23.0266ZM9.76587 23.0266H12.8831V5.02661H9.76587V23.0266ZM14.0198 23.0266H16.012V5.02661H14.0198V23.0266ZM17.1956 23.0266H20.2893V5.02661H17.1956V23.0266ZM21.2385 23.0266H23.6643V5.02661H21.2385V23.0266ZM24.262 23.0266H25.8323V5.02661H24.262V23.0266Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36489">
<rect width="22.7461" height="18.082" fill="currentColor" transform="translate(3.08618 5.02661)"/>
</clipPath>
</defs>
</svg>

`;

export const Barcode = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
