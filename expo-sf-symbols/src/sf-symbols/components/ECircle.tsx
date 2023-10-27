
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
<g clip-path="url(#clip0_2207_37639)">
<path d="M14.0097 25.965C20.5488 25.965 25.9628 20.5393 25.9628 14.0119C25.9628 7.4729 20.5371 2.05884 13.998 2.05884C7.4707 2.05884 2.05664 7.4729 2.05664 14.0119C2.05664 20.5393 7.48242 25.965 14.0097 25.965ZM14.0097 23.9729C8.47852 23.9729 4.06055 19.5432 4.06055 14.0119C4.06055 8.48072 8.4668 4.05103 13.998 4.05103C19.5293 4.05103 23.9707 8.48072 23.9707 14.0119C23.9707 19.5432 19.541 23.9729 14.0097 23.9729Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.3027 19.2385H16.8457C17.291 19.2385 17.6191 18.9455 17.6191 18.4768C17.6191 17.9963 17.291 17.7033 16.8457 17.7033H12.2519V14.551H16.541C16.9863 14.551 17.3144 14.2932 17.3144 13.8361C17.3144 13.3557 16.9863 13.0861 16.541 13.0861H12.2519V10.0979H16.8457C17.291 10.0979 17.6191 9.79321 17.6191 9.32445C17.6191 8.84399 17.291 8.56274 16.8457 8.56274H11.3027C10.6934 8.56274 10.377 8.98461 10.377 9.61742V18.1838C10.377 18.8166 10.6934 19.2385 11.3027 19.2385Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37639">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.05664 2.05884)"/>
</clipPath>
</defs>
</svg>

`;

export const ECircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
