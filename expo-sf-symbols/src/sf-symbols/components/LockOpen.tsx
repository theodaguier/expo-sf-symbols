
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
<g clip-path="url(#clip0_2207_35302)">
<path d="M4.69556 25.0611H15.4182C17.1408 25.0611 18.0549 24.1235 18.0549 22.272V14.1978C18.0549 12.3579 17.1408 11.4204 15.4182 11.4204H4.69556C2.9729 11.4204 2.05884 12.3579 2.05884 14.1978V22.272C2.05884 24.1235 2.9729 25.0611 4.69556 25.0611ZM4.75415 23.2915C4.25025 23.2915 3.95728 22.9751 3.95728 22.4009V14.0689C3.95728 13.4946 4.25025 13.19 4.75415 13.19H15.3596C15.8752 13.19 16.1565 13.4946 16.1565 14.0689V22.4009C16.1565 22.9751 15.8752 23.2915 15.3596 23.2915H4.75415ZM14.2815 12.3345H16.133V8.38526C16.133 5.42041 18.0315 3.86182 20.2229 3.86182C22.4143 3.86182 24.3127 5.42041 24.3127 8.38526V10.9868C24.3127 11.6782 24.7229 12.0298 25.2502 12.0298C25.7541 12.0298 26.176 11.7134 26.176 10.9868V8.63135C26.176 4.2251 23.2815 2.09229 20.2229 2.09229C17.1526 2.09229 14.2815 4.2251 14.2815 8.63135V12.3345Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35302">
<rect width="24.1172" height="23.5664" fill="currentColor" transform="translate(2.05884 2.09229)"/>
</clipPath>
</defs>
</svg>

`;

export const LockOpen = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
