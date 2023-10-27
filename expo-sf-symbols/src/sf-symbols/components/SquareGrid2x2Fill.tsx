
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
<g clip-path="url(#clip0_2207_34245)">
<path d="M17.0249 24.7306H22.3569C23.8452 24.7306 24.5952 23.9923 24.5952 22.4454V17.1954C24.5952 15.6602 23.8452 14.9102 22.3569 14.9102H17.0249C15.5249 14.9102 14.7749 15.6602 14.7749 17.1954V22.4454C14.7749 23.9923 15.5249 24.7306 17.0249 24.7306Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M5.25928 24.7306H10.603C12.0913 24.7306 12.8413 23.9923 12.8413 22.4454V17.1954C12.8413 15.6602 12.0913 14.9102 10.603 14.9102H5.25928C3.771 14.9102 3.021 15.6602 3.021 17.1954V22.4454C3.021 23.9923 3.771 24.7306 5.25928 24.7306Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M17.0249 12.9766H22.3569C23.8452 12.9766 24.5952 12.2266 24.5952 10.6797V5.4414C24.5952 3.89453 23.8452 3.15625 22.3569 3.15625H17.0249C15.5249 3.15625 14.7749 3.89453 14.7749 5.4414V10.6797C14.7749 12.2266 15.5249 12.9766 17.0249 12.9766Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M5.25928 12.9766H10.603C12.0913 12.9766 12.8413 12.2266 12.8413 10.6797V5.4414C12.8413 3.89453 12.0913 3.15625 10.603 3.15625H5.25928C3.771 3.15625 3.021 3.89453 3.021 5.4414V10.6797C3.021 12.2266 3.771 12.9766 5.25928 12.9766Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34245">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.021 3.13281)"/>
</clipPath>
</defs>
</svg>

`;

export const SquareGrid2x2Fill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
