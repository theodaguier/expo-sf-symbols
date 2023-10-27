
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
<g clip-path="url(#clip0_2207_35600)">
<path d="M7.30811 23.6565H20.8081C25.6831 23.6565 28.0385 21.3596 28.0385 16.6135V12.1487C28.0385 7.37915 25.7299 5.07056 20.937 5.07056H7.1792C2.39795 5.07056 0.0776367 7.37915 0.0776367 12.1487V16.6135C0.0776367 21.3596 2.43311 23.6565 7.30811 23.6565ZM7.30811 21.7697C3.62842 21.7697 1.96436 20.176 1.96436 16.6135V12.1487C1.96436 8.56275 3.58155 6.95728 7.1792 6.95728H20.937C24.5464 6.95728 26.1518 8.56275 26.1518 12.1487V16.6135C26.1518 20.176 24.4995 21.7697 20.8081 21.7697H7.30811ZM1.02686 12.9338H27.0893V11.7502H1.02686V12.9338ZM14.0581 17.2932C14.6792 17.2932 15.1948 16.7776 15.1948 16.1565C15.1948 15.5354 14.6792 15.0315 14.0581 15.0315C13.437 15.0315 12.9331 15.5354 12.9331 16.1565C12.9331 16.7776 13.437 17.2932 14.0581 17.2932Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35600">
<rect width="27.9609" height="18.5977" fill="currentColor" transform="translate(0.0776367 5.05884)"/>
</clipPath>
</defs>
</svg>

`;

export const EarbudsCase = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
