
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
<g clip-path="url(#clip0_2207_34222)">
<path d="M3.70703 24.5896H23.9804C26.4414 24.5896 27.6601 23.3826 27.6601 20.9685V6.64819C27.6601 4.23413 26.4414 3.01538 23.9804 3.01538H3.70703C1.25781 3.01538 0.0273438 4.23413 0.0273438 6.64819V20.9685C0.0273438 23.3826 1.25781 24.5896 3.70703 24.5896Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.2421 7.59741C11.7695 7.59741 12.1328 7.99585 12.1328 8.57007V14.0896C12.1328 14.8162 11.7343 15.0974 11.1132 15.0974H5.55859C4.98438 15.0974 4.62109 14.7459 4.62109 14.2068C4.62109 13.6795 4.99609 13.3279 5.58203 13.3279H7.59766L9.39062 13.5154L7.50391 11.7459L3.87109 8.11304C3.69531 7.94897 3.57812 7.7146 3.57812 7.48022C3.57812 6.92944 3.92968 6.56616 4.46876 6.56616C4.76172 6.56616 4.98438 6.67163 5.16016 6.84741L8.78125 10.4802L10.5273 12.3435L10.3515 10.4568V8.54663C10.3515 7.96069 10.7031 7.59741 11.2421 7.59741Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_34222">
<rect width="27.6328" height="21.5742" fill="currentColor" transform="translate(0.0273438 3.01538)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowDownRightTopleftRectangleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
