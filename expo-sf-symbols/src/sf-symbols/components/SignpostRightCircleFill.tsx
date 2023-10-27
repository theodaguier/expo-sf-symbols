
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
<g clip-path="url(#clip0_2207_35256)">
<path d="M14.0476 26.0454C20.5867 26.0454 26.0007 20.6313 26.0007 14.0922C26.0007 7.56494 20.575 2.13916 14.0359 2.13916C7.50854 2.13916 2.09448 7.56494 2.09448 14.0922C2.09448 20.6313 7.52026 26.0454 14.0476 26.0454Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.71168 15.4047C8.89137 15.4047 8.43433 14.9594 8.43433 14.1626V10.7876C8.43433 9.99073 8.89137 9.55714 9.71168 9.55714H13.3445V8.20948C13.3445 7.82276 13.6375 7.51807 14.0242 7.51807C14.3875 7.51807 14.6922 7.82276 14.6922 8.20948V9.55714H17.6101C18.1492 9.55714 18.407 9.70948 18.7 10.0142L20.3054 11.5376C20.9851 12.1704 20.9617 12.7915 20.3172 13.4126L18.7 14.9477C18.407 15.2407 18.1492 15.4047 17.6101 15.4047H14.6922V19.3071H16.3445C16.7195 19.3071 17.0242 19.6118 17.0242 19.9868C17.0242 20.3501 16.7195 20.6547 16.3445 20.6547H11.6921C11.3171 20.6547 11.0125 20.3501 11.0125 19.9868C11.0125 19.6118 11.3171 19.3071 11.6921 19.3071H13.3445V15.4047H9.71168Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_35256">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.09448 2.12744)"/>
</clipPath>
</defs>
</svg>

`;

export const SignpostRightCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
