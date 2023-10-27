
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
<g clip-path="url(#clip0_2207_34585)">
<path d="M5.72265 26.4771C7.12891 26.4771 10.6328 24.9419 12.625 23.5123C12.8242 23.3716 12.9882 23.313 13.1523 23.313C13.3047 23.3247 13.457 23.3365 13.6093 23.3365C22.0586 23.3365 27.6601 18.5318 27.6601 12.6958C27.6601 6.80127 21.7539 2.04346 14.3711 2.04346C6.98828 2.04346 1.08203 6.80127 1.08203 12.6958C1.08203 16.4458 3.39062 19.7388 7.15234 21.7544C7.32812 21.8482 7.38672 22.024 7.29297 22.1997C6.63672 23.2779 5.46484 24.5669 5.01953 25.1529C4.5625 25.7388 4.82031 26.4771 5.72265 26.4771Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.0586 18.5318C12.6601 18.5318 12.332 18.3794 12.0273 17.9693L9.08594 14.3599C8.91015 14.1255 8.80469 13.856 8.80469 13.5982C8.80469 13.0591 9.21484 12.6255 9.75391 12.6255C10.082 12.6255 10.3398 12.7427 10.6328 13.1294L13.0117 16.188L18.0156 8.16065C18.2382 7.79737 18.5429 7.62158 18.8593 7.62158C19.3632 7.62158 19.8437 7.97315 19.8437 8.51221C19.8437 8.77002 19.6914 9.05127 19.5508 9.28565L14.0429 17.9693C13.7968 18.3443 13.457 18.5318 13.0586 18.5318Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_34585">
<rect width="26.5781" height="24.4336" fill="currentColor" transform="translate(1.08203 2.04346)"/>
</clipPath>
</defs>
</svg>

`;

export const CheckmarkMessageFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
