
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
<g clip-path="url(#clip0_2207_34224)">
<path d="M3.73438 24.5884H24.0078C26.4688 24.5884 27.6875 23.3814 27.6875 20.9673V6.64697C27.6875 4.23291 26.4688 3.01416 24.0078 3.01416H3.73438C1.28516 3.01416 0.0546875 4.23291 0.0546875 6.64697V20.9673C0.0546875 23.3814 1.28516 24.5884 3.73438 24.5884Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.2695 7.59619C11.7969 7.59619 12.1602 7.99463 12.1602 8.56885V14.0884C12.1602 14.815 11.7617 15.0962 11.1406 15.0962H5.58594C5.01172 15.0962 4.64844 14.7447 4.64844 14.2056C4.64844 13.6783 5.02344 13.3267 5.60938 13.3267H7.625L9.41797 13.5142L7.53125 11.7446L3.89844 8.11182C3.72266 7.94775 3.60547 7.71338 3.60547 7.479C3.60547 6.92822 3.95703 6.56494 4.4961 6.56494C4.78907 6.56494 5.01172 6.67041 5.1875 6.84619L8.8086 10.479L10.5547 12.3423L10.3789 10.4556V8.54541C10.3789 7.95947 10.7305 7.59619 11.2695 7.59619Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_34224">
<rect width="27.6328" height="21.5742" fill="currentColor" transform="translate(0.0546875 3.01416)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowDownForwardTopleadingRectangleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
