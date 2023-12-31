
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
<g clip-path="url(#clip0_2207_34209)">
<path d="M3.77198 24.5884H24.0454C26.5064 24.5884 27.7251 23.3814 27.7251 20.9673V6.64697C27.7251 4.23291 26.5064 3.01416 24.0454 3.01416H3.77198C1.32276 3.01416 0.0922852 4.23291 0.0922852 6.64697V20.9673C0.0922852 23.3814 1.32276 24.5884 3.77198 24.5884ZM3.79541 22.7017C2.62354 22.7017 1.97901 22.0806 1.97901 20.8619V6.75244C1.97901 5.53369 2.62354 4.90088 3.79541 4.90088H24.022C25.1821 4.90088 25.8384 5.53369 25.8384 6.75244V20.8619C25.8384 22.0806 25.1821 22.7017 24.022 22.7017H3.79541Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M16.6157 7.70166C16.1001 7.70166 15.7603 8.08838 15.7603 8.63916V13.9947C15.7603 14.6978 16.1353 14.9673 16.7329 14.9673H22.1353C22.6743 14.9673 23.0259 14.6275 23.0259 14.1119C23.0259 13.5962 22.6626 13.2564 22.1118 13.2564H20.1314L18.397 13.4439L20.2251 11.7329L23.7642 8.19385C23.9282 8.02978 24.0454 7.80713 24.0454 7.57275C24.0454 7.04541 23.7056 6.69385 23.19 6.69385C22.897 6.69385 22.6861 6.79932 22.522 6.96338L18.9829 10.5024L17.2954 12.3071L17.4712 10.479V8.61572C17.4712 8.05322 17.1314 7.70166 16.6157 7.70166Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34209">
<rect width="27.6328" height="21.5742" fill="currentColor" transform="translate(0.0922852 3.01416)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowDownLeftToprightRectangle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
