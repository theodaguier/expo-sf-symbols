
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
<g clip-path="url(#clip0_2207_34211)">
<path d="M3.69654 24.5884H23.9699C26.4309 24.5884 27.6496 23.3814 27.6496 20.9673V6.64697C27.6496 4.23291 26.4309 3.01416 23.9699 3.01416H3.69654C1.24732 3.01416 0.0168457 4.23291 0.0168457 6.64697V20.9673C0.0168457 23.3814 1.24732 24.5884 3.69654 24.5884ZM3.71997 22.7017C2.5481 22.7017 1.90357 22.0806 1.90357 20.8619V6.75244C1.90357 5.53369 2.5481 4.90088 3.71997 4.90088H23.9465C25.1066 4.90088 25.7629 5.53369 25.7629 6.75244V20.8619C25.7629 22.0806 25.1066 22.7017 23.9465 22.7017H3.71997Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M16.5402 7.70166C16.0246 7.70166 15.6848 8.08838 15.6848 8.63916V13.9947C15.6848 14.6978 16.0598 14.9673 16.6574 14.9673H22.0598C22.5988 14.9673 22.9504 14.6275 22.9504 14.1119C22.9504 13.5962 22.5871 13.2564 22.0363 13.2564H20.0559L18.3215 13.4439L20.1496 11.7329L23.6887 8.19385C23.8527 8.02978 23.9699 7.80713 23.9699 7.57275C23.9699 7.04541 23.6301 6.69385 23.1145 6.69385C22.8215 6.69385 22.6106 6.79932 22.4465 6.96338L18.9074 10.5024L17.2199 12.3071L17.3957 10.479V8.61572C17.3957 8.05322 17.0559 7.70166 16.5402 7.70166Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34211">
<rect width="27.6328" height="21.5742" fill="currentColor" transform="translate(0.0168457 3.01416)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowDownBackwardToptrailingRectangle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
