
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
<g clip-path="url(#clip0_2207_33879)">
<path d="M5.32715 23.1611C6.3584 23.1611 6.88574 22.6221 6.88574 21.5908V5.62988C6.88574 4.61035 6.3584 4.07129 5.32715 4.07129H2.66699C1.63574 4.07129 1.09668 4.56348 1.09668 5.62988V21.5908C1.09668 22.6221 1.63574 23.1611 2.66699 23.1611H5.32715ZM12.2295 22.8096C12.71 22.8096 13.1084 22.6572 13.5772 22.376L25.5186 15.3565C26.3506 14.8643 26.7022 14.2783 26.7022 13.6103C26.7022 12.9307 26.3506 12.3564 25.5186 11.8643L13.5772 4.83301C13.0967 4.55176 12.71 4.39941 12.2295 4.39941C11.3155 4.39941 10.542 5.10254 10.542 6.41504V20.8057C10.542 22.1182 11.3155 22.8096 12.2295 22.8096Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33879">
<rect width="25.6055" height="19.0898" fill="currentColor" transform="translate(1.09668 4.07129)"/>
</clipPath>
</defs>
</svg>

`;

export const ForwardFrameFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
